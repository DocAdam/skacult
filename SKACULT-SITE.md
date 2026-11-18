# Ska Cult homepage

The Ska Cult homepage works within this existing Jekyll repository without a separate build or any JavaScript dependencies. The original Jekyll layouts, data, pages, root stylesheet, and CNAME remain in place.

## Files to edit

| File | Purpose |
| --- | --- |
| `index.html` | Homepage copy, project entries, links, page title, and description. |
| `assets/skacult/site.css` | Responsive layout, colors, typography, and original CSS artwork. |
| `assets/skacult/site.js` | Project filters, rotating tiny sermons, and footer year. |
| `assets/skacult/favicon.svg` | Vinyl-record favicon. |
| `assets/skacult/body.otf`, `display.otf` | Bundled Nimbus fonts; licensing is in `font-license.txt`. |

The new homepage does not use `_data/projects.yml`, `_data/cool_stuff.yml`, or the legacy Jekyll layout. Those still support the existing pages described in README.md.

## Add a project

1. Duplicate an `<article class="project ...">` inside `.project-grid` in `index.html`.
2. Give it a `data-category` value of `tools`, `words`, or `experiments`.
3. Edit its title, description, category/status, and destination links.
4. Update the count in the Everything button and the initial `filter-status` text.

Projects link to their current homes. There are no accounts, forms, trackers, external fonts, or live feeds. All project links remain usable without JavaScript.

## Local preview

From the repository root, preview just the static homepage:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. Use the existing Jekyll preview command to render the legacy pages as well.

## Publishing and ownership

The root `index.html` replaces the previous homepage when this branch is merged and the repository is deployed. The existing `CNAME` remains `www.skacult.com`; this change does not alter DNS or GitHub Pages settings. If Pages publishes the repository root through Jekyll, it can copy this standalone HTML homepage and its assets as-is. A different publishing source may require corresponding deployment configuration.

The original homepage remains in Git history. No tracked `_site` output is updated here; let the site's deployment build generate its output.

Use this repository as the source of truth for homepage content and assets.
