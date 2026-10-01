// Stop the place models spinning for anyone who has asked for less motion.
// They can still be dragged round by hand.
(function () {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  const apply = () => {
    document.querySelectorAll("model-viewer.place-model").forEach((viewer) => {
      viewer.autoRotate = !query.matches;
    });
  };
  apply();
  query.addEventListener("change", apply);
})();
