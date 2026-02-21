// assets/toc.js
(() => {
  const toc = document.getElementById("page-toc");
  const main = document.getElementById("main-content");
  if (!toc || !main) return;

  // Collect headings you want in TOC (tweak as desired)
  const headings = Array.from(main.querySelectorAll("h2, h3"))
    .filter(h => h.textContent && h.textContent.trim().length > 0);

  if (headings.length === 0) {
    toc.innerHTML = `<div class="muted">No headings.</div>`;
    return;
  }

  // Ensure each heading has an id
  const slugify = (s) =>
    s.toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const used = new Map();
  const ensureId = (h) => {
    if (h.id) return h.id;
    let base = slugify(h.textContent);
    let n = used.get(base) || 0;
    used.set(base, n + 1);
    const id = n === 0 ? base : `${base}-${n}`;
    h.id = id;
    return id;
  };

  // Build list
  const ul = document.createElement("ul");
  ul.className = "toc-list";

  headings.forEach((h) => {
    const id = ensureId(h);
    const li = document.createElement("li");
    li.className = h.tagName.toLowerCase() === "h3" ? "toc-item toc-h3" : "toc-item toc-h2";

    const a = document.createElement("a");
    a.className = "toc-link";
    a.href = `#${id}`;
    a.textContent = h.textContent;

    li.appendChild(a);
    ul.appendChild(li);
  });

  toc.innerHTML = "";
  toc.appendChild(ul);

  // Optional: highlight current section while scrolling
  const links = Array.from(toc.querySelectorAll("a"));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
    });
  }, { rootMargin: "-25% 0px -70% 0px", threshold: 0.01 });

  headings.forEach(h => obs.observe(h));
})();