// assets/sidebar-drawer.js
(() => {
  const overlay = document.querySelector("[data-sidebar-overlay]");
  const drawer = document.getElementById("sidebar-drawer");
  const openBtn = document.querySelector("[data-sidebar-open]");
  const closeBtn = document.querySelector("[data-sidebar-close]");

  if (!overlay || !drawer || !openBtn) return;

  const open = () => {
    overlay.hidden = false;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  };

  const close = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
    openBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);

  overlay.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) close();
  });
})();