// Homepage visitor map: a choropleth of visitors by country.
//
// Data is inlined by _includes/visitor_map.liquid from _data/visitors.yml.
// The map libraries and the 110m world outline (~170 kB together) load only
// when the section comes near the viewport.
(function () {
  "use strict";

  const root = document.getElementById("visitor-map");
  if (!root) return;

  const CDN = "https://cdn.jsdelivr.net/npm/";
  const LIBS = [
    ["d3-array@3.2.4/dist/d3-array.min.js", "sha256-gKpw0M0X2r3fbQVklOoXkmpFpp2ot4UCIKrOMxutZx0="],
    ["d3-geo@3.1.1/dist/d3-geo.min.js", "sha256-I+V08ejUcW1iK85FNWo3m2aidxYrFF9fFH5Mja77c9I="],
    ["topojson-client@3.1.0/dist/topojson-client.min.js", "sha256-Jc0CrkhsxQY+AhWk5M+xXeg3AMh6xIusTVfcaq8+u4k="],
  ];
  const ATLAS = CDN + "world-atlas@2.0.2/countries-110m.json";
  // Lower bounds of the four shaded bins; must match the legend in the include.
  const BINS = [1, 5, 20, 100];
  const W = 960;
  const H = 420;
  const NS = "http://www.w3.org/2000/svg";

  const canvas = root.querySelector(".vm-canvas");
  const tooltip = root.querySelector(".vm-tooltip");
  let data = {};
  try {
    data = JSON.parse(document.getElementById("visitor-data").textContent) || {};
  } catch (e) {
    data = {};
  }
  const byId = new Map((data.countries || []).map((c) => [c.id, c]));

  function binOf(users) {
    let b = 0;
    for (const t of BINS) if (users >= t) b += 1;
    return b;
  }

  function loadScript([src, integrity]) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = CDN + src;
      s.integrity = integrity;
      s.crossOrigin = "anonymous";
      s.onload = resolve;
      s.onerror = () => reject(new Error("failed to load " + src));
      document.head.appendChild(s);
    });
  }

  function showTip(target, event) {
    const users = Number(target.dataset.users);
    tooltip.textContent =
      target.dataset.name + " · " + (users ? users + (users === 1 ? " visitor" : " visitors") : "no visits yet");
    tooltip.hidden = false;
    const box = root.querySelector(".vm-figure").getBoundingClientRect();
    const x = event.clientX - box.left;
    const y = event.clientY - box.top;
    tooltip.style.left = Math.min(Math.max(x, 60), box.width - 60) + "px";
    tooltip.style.top = y + "px";
  }

  function hideTip() {
    tooltip.hidden = true;
    const active = canvas.querySelector(".vm-active");
    if (active) active.classList.remove("vm-active");
  }

  async function render() {
    for (const lib of LIBS) await loadScript(lib);
    const world = await (await fetch(ATLAS)).json();
    const features = topojson
      .feature(world, world.objects.countries)
      .features.filter((f) => f.id !== "010"); // Antarctica: large and never relevant here

    const projection = d3.geoNaturalEarth1().fitExtent(
      [
        [2, 2],
        [W - 2, H - 2],
      ],
      { type: "FeatureCollection", features }
    );
    const path = d3.geoPath(projection);

    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("aria-hidden", "true");
    for (const f of features) {
      const c = byId.get(f.id);
      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", path(f));
      p.setAttribute("class", "vm-country vm-b" + (c ? binOf(c.users) : 0));
      p.dataset.name = c ? c.name : (f.properties && f.properties.name) || "Unknown";
      p.dataset.users = c ? c.users : 0;
      svg.appendChild(p);
    }

    svg.addEventListener("pointermove", (event) => {
      const t = event.target.closest(".vm-country");
      if (!t) return hideTip();
      const prev = canvas.querySelector(".vm-active");
      if (prev !== t) {
        if (prev) prev.classList.remove("vm-active");
        t.classList.add("vm-active");
        svg.appendChild(t); // draw the highlighted outline on top
      }
      showTip(t, event);
    });
    svg.addEventListener("pointerleave", hideTip);

    canvas.appendChild(svg);
    root.classList.add("vm-ready");
  }

  function start() {
    render().catch((err) => {
      root.classList.add("vm-failed");
      console.warn("[visitor-map]", err);
    });
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(root);
  } else {
    start();
  }
})();
