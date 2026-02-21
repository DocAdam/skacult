// assets/drawer.js
(() => {
  const overlay = document.querySelector("[data-drawer-overlay]");
  const drawer = document.getElementById("about-drawer");
  if (!overlay || !drawer) return;

  const openBtnSelector = '[data-drawer-open="about"]';
  const closeBtnSelector = '[data-drawer-close="about"]';

  const openDrawer = () => {
    overlay.hidden = false;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
    document.body.classList.remove("no-scroll");
  };

  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest(openBtnSelector);
    const closeBtn = e.target.closest(closeBtnSelector);
    if (openBtn) openDrawer();
    if (closeBtn) closeDrawer();
    if (e.target === overlay) closeDrawer();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
  });
})();