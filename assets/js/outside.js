// /outside/: the interactive layer -- numbers that count up, the sticky section
// nav, photo lightbox, the First Folio shelf, the Leaflet road-trip
// map and a quiet scroll reveal. Each piece upgrades markup that already reads
// fine without JavaScript, and quietly does nothing if its markup (or Leaflet)
// is missing. Data for the map comes from the #outside-data JSON block, which
// _includes/outside/trips.liquid writes from _data/outside/trips.yml.
(function () {
  "use strict";

  const root = document.querySelector(".outside-page");
  if (!root) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersReduced = () => reducedMotion.matches;
  const hasIO = "IntersectionObserver" in window;

  const data = (function () {
    const el = document.getElementById("outside-data");
    if (!el) return null;
    try {
      return JSON.parse(el.textContent);
    } catch (err) {
      return null;
    }
  })();

  // ------------------------------------------------------------------ helpers

  function pressOne(buttons, active) {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === active)));
  }

  const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
  }

  function formatNumber(n) {
    return Number(n).toLocaleString("en-US");
  }

  // ------------------------------------------------------------------ mileage
  // Great-circle distance between consecutive map waypoints. The waypoints are
  // sparse and the roads bend, so this is a floor on the real mileage -- the
  // page labels it that way.

  const EARTH_RADIUS_MI = 3958.8;

  function haversine(a, b) {
    const rad = Math.PI / 180;
    const dLat = (b[0] - a[0]) * rad;
    const dLon = (b[1] - a[1]) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLon / 2) ** 2;
    return 2 * EARTH_RADIUS_MI * Math.asin(Math.sqrt(h));
  }

  function routeMiles(route) {
    let miles = 0;
    for (let i = 1; route && i < route.length; i++) miles += haversine(route[i - 1], route[i]);
    return miles;
  }

  function totalMiles() {
    if (!data || !Array.isArray(data.trips)) return 0;
    let miles = 0;
    data.trips.forEach((trip) => {
      miles += routeMiles(trip.route);
      // A side trip is driven there and back.
      if (trip.side_route) miles += 2 * routeMiles(trip.side_route.route);
    });
    return Math.round(miles / 100) * 100;
  }

  // -------------------------------------------------------------- stats strip

  function countUp(els) {
    const targets = els.map((el) => Number(el.dataset.count) || 0);
    const duration = 900;
    let start = null;
    function frame(now) {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      els.forEach((el, i) => {
        el.textContent = formatNumber(Math.round(targets[i] * eased));
      });
      if (t < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  function initStats() {
    const strip = root.querySelector(".outside-stats");
    if (!strip) return;

    const milesItem = strip.querySelector("[data-stat-miles]");
    const miles = totalMiles();
    if (milesItem && miles > 0) {
      const num = milesItem.querySelector("[data-count]");
      num.dataset.count = String(miles);
      num.textContent = formatNumber(miles);
      const text = milesItem.querySelector("[data-stat-miles-text]");
      if (text) {
        text.textContent = "About " + formatNumber(miles) + " miles in straight lines between the map's waypoints; the real road mileage was higher";
      }
      milesItem.hidden = false;
    }

    if (prefersReduced() || !hasIO || !window.requestAnimationFrame) return;
    const counters = Array.from(strip.querySelectorAll("[data-count]"));
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        countUp(counters);
      },
      { threshold: 0.5 }
    );
    io.observe(strip);
  }

  // -------------------------------------------------------------- section nav

  function initNav() {
    const nav = root.querySelector(".outside-nav");
    if (!nav || !hasIO) return;
    const list = nav.querySelector("ul");
    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    const targets = new Map();
    links.forEach((a) => {
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (target) targets.set(target, a);
    });
    if (!targets.size) return;

    let current = null;
    function setCurrent(link) {
      if (link === current) return;
      current = link;
      links.forEach((a) => {
        if (a === link) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
      // Keep the active chip in view when the row is scrolled sideways.
      if (link && list && list.scrollWidth > list.clientWidth) {
        const left = link.offsetLeft - list.offsetLeft;
        const right = left + link.offsetWidth;
        if (left < list.scrollLeft || right > list.scrollLeft + list.clientWidth) {
          list.scrollTo({ left: Math.max(0, left - 16), behavior: prefersReduced() ? "auto" : "smooth" });
        }
      }
    }

    const visible = new Set();
    const first = targets.keys().next().value;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        // A thin band a third of the way down the viewport: whichever section
        // crosses it is the one being read. Map order is page order.
        let best = null;
        targets.forEach((link, el) => {
          if (visible.has(el)) best = link;
        });
        if (best) setCurrent(best);
        else if (first.getBoundingClientRect().top > window.innerHeight * 0.35) setCurrent(null);
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    targets.forEach((link, el) => io.observe(el));
  }

  // -------------------------------------------------------------- lightbox

  function initPhotos() {
    const dialog = root.querySelector("[data-lightbox-dialog]");
    const links = Array.from(root.querySelectorAll("a[data-lightbox]"));
    if (!dialog || typeof dialog.showModal !== "function" || !links.length) return;

    const img = dialog.querySelector(".lightbox-img");
    const caption = dialog.querySelector(".lightbox-caption");
    const count = dialog.querySelector(".lightbox-count");
    const prev = dialog.querySelector(".lightbox-prev");
    const next = dialog.querySelector(".lightbox-next");
    const close = dialog.querySelector(".lightbox-close");
    let items = [];
    let index = 0;
    let opener = null;

    // If the .webp copies are missing, fall back to the original file.
    img.addEventListener("error", () => {
      if (img.hasAttribute("srcset")) img.removeAttribute("srcset");
    });

    function show(i) {
      index = (i + items.length) % items.length;
      const link = items[index];
      const source = link.querySelector("source");
      const thumb = link.querySelector("img");
      img.removeAttribute("srcset");
      if (source && source.getAttribute("srcset")) {
        img.setAttribute("sizes", "100vw");
        img.setAttribute("srcset", source.getAttribute("srcset"));
      }
      img.src = link.href;
      img.alt = thumb ? thumb.alt : "";
      caption.textContent = link.dataset.caption || "";
      caption.hidden = !caption.textContent;
      const many = items.length > 1;
      prev.hidden = !many;
      next.hidden = !many;
      count.textContent = many ? index + 1 + " / " + items.length : "";
    }

    function open(link) {
      // Only what is currently shown: a filtered-out photo is skipped.
      items = links.filter((a) => !a.closest("[hidden]"));
      opener = link;
      show(Math.max(0, items.indexOf(link)));
      document.documentElement.style.overflow = "hidden";
      dialog.showModal();
      close.focus();
    }

    links.forEach((link) => {
      link.setAttribute("aria-haspopup", "dialog");
      link.addEventListener("click", (e) => {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        open(link);
      });
    });

    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("keydown", (e) => {
      if (items.length < 2) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        show(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        show(index + 1);
      }
    });
    // A click on the dimmed area (the dialog itself, not its contents) closes.
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.documentElement.style.overflow = "";
      if (opener) opener.focus();
    });
  }

  // -------------------------------------------------------------------- shelf

  function initShelf() {
    const shelf = root.querySelector("[data-shelf]");
    if (!shelf) return;
    const tip = shelf.querySelector(".shelf-tip");
    const spines = Array.from(shelf.querySelectorAll(".spine"));
    const groups = Array.from(shelf.querySelectorAll(".shelf-group"));
    let active = null;
    let hideTimer = 0;

    function hideTip(now) {
      window.clearTimeout(hideTimer);
      const go = () => {
        if (tip) tip.hidden = true;
        if (active) {
          active.classList.remove("is-active");
          active.removeAttribute("aria-describedby");
          active = null;
        }
      };
      if (now) go();
      else hideTimer = window.setTimeout(go, 150);
    }

    const filters = shelf.querySelector("[data-shelf-filters]");
    if (filters) {
      const buttons = Array.from(filters.querySelectorAll("button[data-section]"));
      filters.hidden = false;
      buttons.forEach((btn) =>
        btn.addEventListener("click", () => {
          const want = btn.dataset.section;
          pressOne(buttons, btn);
          groups.forEach((g) => {
            g.hidden = !!want && g.dataset.section !== want;
          });
          hideTip(true);
        })
      );
    }

    if (!tip) return;

    function place(spine) {
      tip.style.left = "0px";
      tip.style.top = "0px";
      const box = shelf.getBoundingClientRect();
      const b = spine.getBoundingClientRect();
      const w = tip.offsetWidth;
      const h = tip.offsetHeight;
      const left = Math.max(0, Math.min(b.left - box.left + b.width / 2 - w / 2, box.width - w));
      // Above the spine, unless that would tuck it under the sticky nav.
      let top = b.top - box.top - h - 10;
      if (b.top - h - 10 < 120) top = b.bottom - box.top + 8;
      tip.style.left = left + "px";
      tip.style.top = top + "px";
    }

    function showTip(spine) {
      window.clearTimeout(hideTimer);
      if (active && active !== spine) {
        active.classList.remove("is-active");
        active.removeAttribute("aria-describedby");
      }
      active = spine;
      const title = spine.querySelector(".spine-title");
      let meta = spine.dataset.sectionName + " · Folio no. " + spine.dataset.folio;
      if (spine.classList.contains("is-read")) meta += " · read";
      // The title repeats the button's own name, so it is hidden from the
      // description; the section, number and note are what it adds.
      let html = '<strong aria-hidden="true">' + escapeHtml(title ? title.textContent : "") + "</strong>";
      html += "<span>" + escapeHtml(meta) + "</span>";
      if (spine.dataset.note) html += "<span>" + escapeHtml(spine.dataset.note) + "</span>";
      tip.innerHTML = html;
      tip.hidden = false;
      spine.classList.add("is-active");
      spine.setAttribute("aria-describedby", tip.id);
      place(spine);
    }

    spines.forEach((spine) => {
      spine.addEventListener("mouseenter", () => showTip(spine));
      spine.addEventListener("mouseleave", () => {
        if (document.activeElement !== spine) hideTip();
      });
      spine.addEventListener("focus", () => showTip(spine));
      spine.addEventListener("blur", () => hideTip());
      spine.addEventListener("click", () => showTip(spine));
    });
    // The tooltip can be hovered without vanishing, and Esc dismisses it.
    tip.addEventListener("mouseenter", () => window.clearTimeout(hideTimer));
    tip.addEventListener("mouseleave", () => hideTip());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !tip.hidden) hideTip(true);
    });
    window.addEventListener("resize", () => hideTip(true));
    // A narrow shelf row scrolls sideways; the tooltip would be left behind.
    shelf.querySelectorAll(".shelf-row").forEach((row) => row.addEventListener("scroll", () => hideTip(true), { passive: true }));
  }

  // ---------------------------------------------------------------- trip map

  // Esri's keyless Canvas basemaps. Note the {y}/{x} order.
  const TILES = {
    light: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    dark: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  };
  const ATTRIBUTION = "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ";

  // Leaflet itself (script and stylesheet) is only fetched once the road-trip
  // section is getting close; the URLs and SRI hashes come from _config.yml via
  // data attributes on #trip-map.
  function loadLeaflet(el) {
    if (window.L) return Promise.resolve(window.L);
    const d = el.dataset;
    if (!d.leafletJs || !d.leafletCss) return Promise.reject(new Error("no Leaflet URL"));
    // The map is only drawn once both have arrived, so it never lays out unstyled.
    const css = new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = d.leafletCss;
      if (d.leafletCssSri) {
        link.integrity = d.leafletCssSri;
        link.crossOrigin = "anonymous";
      }
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
    const js = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = d.leafletJs;
      if (d.leafletJsSri) {
        script.integrity = d.leafletJsSri;
        script.crossOrigin = "anonymous";
      }
      script.onload = () => (window.L ? resolve(window.L) : reject(new Error("Leaflet missing")));
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return Promise.all([js, css]).then((loaded) => loaded[0]);
  }

  function validLatLng(lat, lon) {
    return typeof lat === "number" && typeof lon === "number" && isFinite(lat) && isFinite(lon);
  }

  function popupHtml(name, meta, note, href, linkText) {
    let html = '<span class="trip-popup-name">' + escapeHtml(name) + "</span>";
    if (meta) html += '<span class="trip-popup-meta">' + escapeHtml(meta) + "</span>";
    if (note) html += '<span class="trip-popup-meta">' + escapeHtml(note) + "</span>";
    if (href) html += '<a class="trip-popup-link" href="' + escapeHtml(href) + '">' + escapeHtml(linkText) + "</a>";
    return html;
  }

  function initMap() {
    const wrap = root.querySelector("[data-trip-map-wrap]");
    const el = document.getElementById("trip-map");
    const fallback = root.querySelector("[data-trip-map-fallback]");
    if (!wrap || !el || !data || !Array.isArray(data.trips) || !data.trips.length) return;

    // Fetch Leaflet well before the section scrolls in, so the swap from the
    // static SVG happens off screen.
    const section = wrap.closest(".outside-section") || fallback || wrap;
    // If Leaflet cannot be fetched the static SVG simply stays.
    const go = () =>
      loadLeaflet(el)
        .then((L) => startMap(L, wrap, el, fallback))
        .catch((err) => {
          if (window.console) window.console.warn("Road-trip map unavailable:", err);
        });
    if (hasIO) {
      const io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io.disconnect();
          go();
        },
        { rootMargin: "1200px 0px" }
      );
      io.observe(section);
    } else {
      go();
    }
  }

  function startMap(L, wrap, el, fallback) {
    // Swap the static SVG for the live map now, while it is still off screen,
    // so nothing jumps later; the tiles themselves load only when it nears view.
    wrap.hidden = false;
    if (fallback) fallback.hidden = true;

    const chips = Array.from(wrap.querySelectorAll("button[data-year]"));
    const rows = Array.from(root.querySelectorAll(".trip-row[data-year]"));
    const showButtons = Array.from(root.querySelectorAll(".trip-show[data-year]"));
    const trips = [];
    let map = null;
    let tiles = null;
    let tilesUrl = "";
    let allBounds = null;
    let selected = "all";
    let failed = false;

    function setTiles() {
      const url = document.documentElement.getAttribute("data-theme") === "dark" ? TILES.dark : TILES.light;
      if (url === tilesUrl) return;
      if (tiles) map.removeLayer(tiles);
      tilesUrl = url;
      tiles = L.tileLayer(url, { attribution: ATTRIBUTION, maxNativeZoom: 16, maxZoom: 19 }).addTo(map);
    }

    // A vector layer only has its SVG path once it is really on a map with a
    // view; restyling or raising it before then throws inside Leaflet.
    function onMap(layer) {
      return !!(map && map.hasLayer(layer) && layer._path);
    }

    function apply(animate) {
      const all = selected === "all";
      let focus = null;
      map.invalidateSize();
      trips.forEach((t) => {
        const on = all || t.year === selected;
        if (t.year === selected) focus = t;
        t.lines.forEach((line) => {
          if (onMap(line)) line.setStyle({ opacity: on ? 0.9 : 0.15, weight: on && !all ? 4.5 : 3 });
        });
        t.stops.forEach((stop) => {
          if (onMap(stop)) stop.setStyle({ opacity: on ? 1 : 0.25, fillOpacity: on ? 1 : 0.25 });
        });
      });
      const raise = (layer) => {
        if (onMap(layer)) layer.bringToFront();
      };
      if (focus) focus.lines.forEach(raise);
      trips.forEach((t) => t.stops.forEach(raise));
      if (focus) focus.stops.forEach(raise);
      const bounds = focus ? focus.bounds : allBounds;
      if (bounds && bounds.isValid()) map.fitBounds(bounds, { padding: [28, 28], animate: animate && !prefersReduced() });
    }

    function select(year) {
      if (failed) return;
      selected = String(year);
      chips.forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.year === selected)));
      rows.forEach((r) => r.classList.toggle("is-active", r.dataset.year === selected));
      if (map) apply(true);
    }

    function build() {
      if (map || failed) return;
      try {
        draw();
      } catch (err) {
        // Put the static map back rather than leave an empty box.
        failed = true;
        wrap.hidden = true;
        if (fallback) fallback.hidden = false;
        showButtons.forEach((b) => (b.hidden = true));
        rows.forEach((r) => r.classList.remove("is-selectable", "is-active"));
        if (window.console) window.console.error(err);
      }
    }

    function draw() {
      map = L.map(el, { scrollWheelZoom: false, zoomSnap: 0.25, minZoom: 2, worldCopyJump: true });
      // Leaflet only really adds layers once the map has a view, so every layer
      // is collected first, the view is set from their bounds, and then they
      // all go on before the first highlight.
      const layers = [];

      allBounds = L.latLngBounds([]);
      data.trips.forEach((trip) => {
        const year = String(trip.year);
        const label = year + " · " + trip.title;
        const entry = { year: year, lines: [], stops: [], bounds: L.latLngBounds([]) };

        const routes = [{ route: trip.route }];
        if (trip.side_route && trip.side_route.route) routes.push({ route: trip.side_route.route, dash: "6 6" });
        routes.forEach((r) => {
          // A malformed waypoint would make Leaflet throw and lose the whole map.
          const points = (Array.isArray(r.route) ? r.route : []).filter((pt) => Array.isArray(pt) && validLatLng(pt[0], pt[1]));
          if (points.length < 2) return;
          const line = L.polyline(points, {
            color: trip.color,
            weight: 3,
            opacity: 0.9,
            lineCap: "round",
            lineJoin: "round",
            dashArray: r.dash || null,
          });
          layers.push(line);
          line.bindTooltip(label, { sticky: true });
          line.on("click", () => select(year));
          entry.lines.push(line);
          entry.bounds.extend(line.getBounds());
        });

        (trip.markers || []).forEach((m) => {
          if (!m || !validLatLng(m.lat, m.lon)) return;
          const stop = L.circleMarker([m.lat, m.lon], {
            radius: m.endpoint ? 6.5 : 4.5,
            color: "#fff",
            weight: 1.5,
            fillColor: trip.color,
            fillOpacity: 1,
          });
          layers.push(stop);
          stop.bindPopup(popupHtml(m.name, label, m.note, "#trip-" + year, "Read about this trip"), { className: "trip-popup" });
          entry.stops.push(stop);
          entry.bounds.extend(stop.getLatLng());
        });

        if (entry.bounds.isValid()) allBounds.extend(entry.bounds);
        trips.push(entry);
      });

      // Real markers (not vector shapes) for the start and the modelled
      // places, so they can be tabbed to and opened with Enter.
      const start = data.start;
      if (start && validLatLng(start.lat, start.lon)) {
        layers.push(
          L.marker([start.lat, start.lon], {
            icon: L.divIcon({ className: "trip-map-start", iconSize: [16, 16] }),
            title: start.name,
            zIndexOffset: 1000,
          }).bindPopup(popupHtml(start.name, start.note), { className: "trip-popup" })
        );
        allBounds.extend([start.lat, start.lon]);
      }

      (data.places || []).forEach((p) => {
        if (!validLatLng(p.lat, p.lon)) return;
        layers.push(
          L.marker([p.lat, p.lon], {
            icon: L.divIcon({ className: "trip-map-place", iconSize: [12, 12] }),
            title: p.name + " (3D model)",
          }).bindPopup(popupHtml(p.name, p.location, null, "#" + p.id, "See the 3D model"), { className: "trip-popup" })
        );
        allBounds.extend([p.lat, p.lon]);
      });

      // Scroll-wheel zoom only once the map has been clicked or tabbed into,
      // so scrolling the page past it never gets captured.
      map.on("focus click", () => map.scrollWheelZoom.enable());
      map.on("blur", () => map.scrollWheelZoom.disable());

      // The container may only just have been unhidden: measure it, give the
      // map a view, then put the tiles and every layer on before highlighting.
      map.invalidateSize();
      if (allBounds.isValid()) map.fitBounds(allBounds, { padding: [28, 28], animate: false });
      else map.setView([39.5, -98.35], 4);
      setTiles();
      // Follow the site's light/dark toggle.
      new MutationObserver(setTiles).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      layers.forEach((layer) => layer.addTo(map));

      apply(false);
    }

    function bringIntoView() {
      build();
      if (failed) return;
      const r = wrap.getBoundingClientRect();
      if (r.top < 100 || r.bottom > window.innerHeight) {
        wrap.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
      }
    }

    chips.forEach((c) => c.addEventListener("click", () => select(c.dataset.year)));

    showButtons.forEach((b) => {
      b.hidden = false;
      b.addEventListener("click", () => {
        select(b.dataset.year);
        bringIntoView();
      });
    });

    rows.forEach((row) => {
      row.classList.add("is-selectable");
      row.addEventListener("click", (e) => {
        if (e.target.closest("a, button")) return;
        // Leave a text selection alone.
        if (window.getSelection && String(window.getSelection())) return;
        select(row.dataset.year);
        bringIntoView();
      });
    });

    if (hasIO) {
      const io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io.disconnect();
          build();
        },
        { rootMargin: "300px 0px" }
      );
      io.observe(el);
    } else {
      build();
    }
  }

  // ------------------------------------------------------------ scroll reveal
  // Sections fade up once as they arrive. Skipped entirely under reduced
  // motion; sections already on screen are marked before the class goes on,
  // so nothing visible ever blinks out.

  function initReveal() {
    if (prefersReduced() || !hasIO) return;
    const sections = Array.from(root.querySelectorAll(".outside-section"));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    sections.forEach((s) => {
      if (s.getBoundingClientRect().top < window.innerHeight) s.classList.add("is-revealed");
      else io.observe(s);
    });
    root.classList.add("outside-reveal");
  }

  [initStats, initNav, initPhotos, initShelf, initMap, initReveal].forEach((init) => {
    try {
      init();
    } catch (err) {
      if (window.console) window.console.error(err);
    }
  });
})();
