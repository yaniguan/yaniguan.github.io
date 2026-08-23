#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Emit the road-trip map <svg> block for _pages/outside.md.

The map is generated, not hand-drawn: the paths are projected from real
lon/lat and smoothed into beziers, so editing them by hand is not practical.
To add a trip, add an entry to ROUTES and LABELS below (and to STOPS for any
extra unlabelled dots along the way), then run

    python bin/roadtrip-map.py > /tmp/map.svg

and paste the result over the existing <svg viewBox="0 0 900 420"> block in
_pages/outside.md. Everything else on that page is hand-written; this script
only ever produces the one figure.

Projection is Albers equal-area conic with the usual USA standard parallels
(29.5N / 45.5N). An equirectangular map makes the country too wide and leaves
the Canada border dead straight, which reads immediately as "not a US map".
"""
from __future__ import print_function

import math
import sys

# ---------------------------------------------------------------- projection
LAT0, LON0 = 23.0, -96.0
LAT1, LAT2 = 29.5, 45.5
RAD = math.pi / 180.0

_n = (math.sin(LAT1 * RAD) + math.sin(LAT2 * RAD)) / 2.0
_C = math.cos(LAT1 * RAD) ** 2 + 2 * _n * math.sin(LAT1 * RAD)
_rho0 = math.sqrt(_C - 2 * _n * math.sin(LAT0 * RAD)) / _n


def albers(lon, lat):
    """Project to SVG-oriented units: y is already flipped to grow downward."""
    rho = math.sqrt(_C - 2 * _n * math.sin(lat * RAD)) / _n
    theta = _n * (lon - LON0) * RAD
    return (rho * math.sin(theta), rho * math.cos(theta) - _rho0)


# ---------------------------------------------------------------------- data
# Coarse outline of the lower 48, clockwise from the Olympic Peninsula. The
# Great Lakes are traced as the political border rather than as coastline.
OUTLINE = [
    (-123.0, 48.4), (-124.0, 46.3), (-124.1, 43.3), (-124.2, 40.4),
    (-122.5, 37.8), (-120.6, 34.5), (-118.2, 33.7), (-117.1, 32.5),
    (-114.7, 32.7), (-111.0, 31.3), (-108.2, 31.3), (-106.5, 31.8),
    (-103.0, 29.0), (-101.4, 29.8), (-99.5, 27.6), (-97.4, 25.9),
    (-97.2, 27.8), (-95.3, 29.0), (-93.8, 29.7), (-91.0, 29.2),
    (-89.0, 29.2), (-88.0, 30.4), (-85.0, 30.0), (-84.0, 30.1),
    (-82.8, 29.0), (-82.7, 28.0), (-82.2, 26.7), (-81.7, 25.9),
    (-81.1, 25.2), (-80.4, 25.3), (-80.1, 26.9), (-80.6, 28.5),
    (-81.3, 30.4), (-80.9, 32.1), (-79.0, 33.5), (-77.9, 34.2),
    (-75.5, 35.2), (-76.0, 37.0), (-75.1, 38.5), (-74.0, 40.7),
    (-71.0, 41.5), (-70.7, 41.9), (-70.8, 43.1), (-69.0, 44.0),
    (-67.0, 44.9), (-67.2, 45.7), (-68.0, 47.4), (-69.3, 47.4),
    (-70.4, 45.9), (-71.5, 45.0), (-74.7, 45.0), (-76.5, 44.1),
    (-79.2, 43.3), (-82.4, 43.0), (-82.5, 45.3), (-84.4, 46.5),
    (-88.0, 48.2), (-90.0, 48.1), (-95.2, 49.0), (-123.0, 49.0),
]

LA = (-118.24, 34.05)

# Waypoints along the interstate actually driven, not a great circle.
ROUTES = [
    # key, class, waypoints
    ("seattle", "fig-route", [
        LA, (-119.0, 35.37), (-121.49, 38.58), (-122.3, 41.3),
        (-123.1, 44.05), (-122.68, 45.52), (-122.33, 47.61)]),
    # 2024 was not a single destination: I-10 out, then a loop of the big
    # Texas cities with a day spent in each.
    ("texas", "fig-route", [
        LA, (-112.07, 33.45), (-110.97, 32.22), (-106.49, 31.76),
        (-102.9, 30.9), (-98.49, 29.42), (-97.74, 30.27),
        (-97.1, 32.77), (-96.8, 32.78), (-95.37, 29.76)]),
    ("chicago", "fig-route", [
        LA, (-114.6, 35.15), (-111.65, 35.2), (-106.6, 35.08),
        (-101.8, 35.2), (-97.5, 35.47), (-93.3, 37.2),
        (-90.2, 38.63), (-87.63, 41.88)]),
    ("boston", "fig-route-em", [
        LA, (-115.14, 36.17), (-110.16, 38.99), (-104.99, 39.74),
        (-94.58, 39.1), (-90.2, 38.63), (-86.16, 39.77),
        (-82.99, 39.96), (-79.99, 40.44), (-76.88, 40.27),
        (-74.0, 40.71), (-71.06, 42.36)]),
]

# Labelled endpoints. dx/dy offset the two text lines from the ring; set a
# large dy plus leader=True to park a label clear of a busy area (the Texas
# one would otherwise sit right on the Gulf coastline) and connect it back.
LABELS = [
    dict(at=LA, name="LOS ANGELES", sub="start and finish",
         anchor="end", dx=-14, dy=0, r=7.0),
    dict(at=(-122.33, 47.61), name="SEATTLE", sub="2023 · RAV4",
         anchor="start", dx=14, dy=0, r=5.5),
    dict(at=(-95.37, 29.76), name="TEXAS", sub="2024 · RAV4 · a day in each city",
         anchor="start", dx=0, dy=34, r=5.5, leader=True),
    dict(at=(-87.63, 41.88), name="CHICAGO", sub="2025 · RAV4",
         anchor="start", dx=14, dy=0, r=5.5),
    dict(at=(-71.06, 42.36), name="BOSTON", sub="2026 · Model 3 on FSD",
         anchor="start", dx=14, dy=0, r=5.5, em=True),
]

# Unlabelled stops: the other Texas cities the 2024 loop stayed a day in.
# Dallas and Fort Worth are one dot -- they are ~5px apart at this scale.
STOPS = [(-106.49, 31.76), (-98.49, 29.42), (-97.74, 30.27), (-96.95, 32.78)]

VIEWBOX = (900, 420)
BOX = (142.0, 44.0, 718.0, 384.0)  # left, top, right, bottom of the drawing area

# ------------------------------------------------------------------- fitting
_flat = [albers(*c) for c in OUTLINE]
_xs = [p[0] for p in _flat]
_ys = [p[1] for p in _flat]
_w, _h = max(_xs) - min(_xs), max(_ys) - min(_ys)
S = min((BOX[2] - BOX[0]) / _w, (BOX[3] - BOX[1]) / _h)
DX = BOX[0] + ((BOX[2] - BOX[0]) - _w * S) / 2.0 - min(_xs) * S
DY = BOX[1] + ((BOX[3] - BOX[1]) - _h * S) / 2.0 - min(_ys) * S


def P(lon, lat):
    x, y = albers(lon, lat)
    return (x * S + DX, y * S + DY)


def fmt(p):
    return "%.1f,%.1f" % p


def smooth(pts, closed=False, k=1.0 / 6.0):
    """Catmull-Rom -> cubic bezier. Lower k = straighter, less corner overshoot."""
    n = len(pts)
    d = ["M %s" % fmt(pts[0])]
    for i in range(n if closed else n - 1):
        p1, p2 = pts[i % n], pts[(i + 1) % n]
        p0 = pts[(i - 1) % n] if (closed or i > 0) else pts[0]
        p3 = pts[(i + 2) % n] if (closed or i + 2 < n) else pts[-1]
        c1 = (p1[0] + (p2[0] - p0[0]) * k, p1[1] + (p2[1] - p0[1]) * k)
        c2 = (p2[0] - (p3[0] - p1[0]) * k, p2[1] - (p3[1] - p1[1]) * k)
        d.append("C %s %s %s" % (fmt(c1), fmt(c2), fmt(p2)))
    return " ".join(d) + (" Z" if closed else "")


# -------------------------------------------------------------------- output
MARKER = u"""      <circle class="fig-box" cx="%(cx)s" cy="%(cy)s" r="%(r)s" />
      <circle class="%(dot)s" cx="%(cx)s" cy="%(cy)s" r="%(rin)s" />
      <text class="%(cls)s" x="%(tx)s" y="%(ty)s" text-anchor="%(anchor)s">%(name)s</text>
      <text class="fig-s" x="%(tx)s" y="%(sy)s" text-anchor="%(anchor)s">%(sub)s</text>"""


def render():
    parts = [
        u'<svg viewBox="0 0 %d %d" role="img" aria-labelledby="map-title map-desc">'
        % VIEWBOX,
        u'      <title id="map-title">Four round trips out of Los Angeles</title>',
        u'      <desc id="map-desc">',
        u'        A map of the lower 48 with four routes leaving Los Angeles: north to Seattle in',
        u'        2023, southeast in 2024 for a loop of the big Texas cities, east to Chicago in',
        u'        2025, and all the way across to Boston in 2026. Every route was driven in both',
        u'        directions.',
        u'      </desc>',
        u'',
        # a coastline wants corners; the interstates genuinely do curve
        u'      <path class="fig-map" d="%s" />' % smooth([P(*c) for c in OUTLINE], True, 0.09),
        u'',
    ]
    for _key, cls, pts in ROUTES:
        parts.append(u'      <path class="%s" d="%s" />' % (cls, smooth([P(*c) for c in pts])))
    parts.append(u'')

    for ll in STOPS:
        cx, cy = P(*ll)
        parts.append(
            u'      <circle class="fig-box" cx="%.1f" cy="%.1f" r="3.5" />\n'
            u'      <circle class="fig-dot" cx="%.1f" cy="%.1f" r="1.6" />'
            % (cx, cy, cx, cy)
        )
    parts.append(u'')

    for lab in LABELS:
        cx, cy = P(*lab["at"])
        r, em = lab["r"], lab.get("em", False)
        if lab.get("leader"):
            parts.append(u'      <path class="fig-map" d="M%.1f,%.1f V%.1f" />'
                         % (cx, cy + r, cy + lab["dy"] - 13))
        parts.append(MARKER % {
            "cx": round(cx, 1), "cy": round(cy, 1), "r": r,
            "rin": round(r * 0.45, 2),
            "dot": "fig-dot-em" if em else "fig-dot",
            "cls": "fig-t-em" if em else "fig-t",
            "tx": round(cx + lab["dx"], 1),
            "ty": round(cy + lab["dy"] - 3, 1),
            "sy": round(cy + lab["dy"] + 11, 1),
            "anchor": lab["anchor"], "name": lab["name"], "sub": lab["sub"],
        })
        parts.append(u'')

    parts.append(u'    </svg>')
    return u"\n".join(parts)


if __name__ == "__main__":
    out = render()
    if hasattr(sys.stdout, "buffer"):
        sys.stdout.buffer.write(out.encode("utf-8") + b"\n")
    else:
        print(out.encode("utf-8"))
