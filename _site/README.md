# SKACULT.com — SKA (Sacred Knowledge Annex)

**Doctrine-free. Idea-rich.**

SKACULT is a lightweight hub for projects + curated links. The name is a joke; the content is real.

## How this site is organized

This is a small Jekyll site with:

- **Layout:** `_layouts/default.html`
- **Reusable parts:** `_includes/`
  - `nav.html` (3-link nav + About drawer button)
  - `about-drawer.html` (About drawer content)
  - `footer.html`
- **Content you update most often:** `_data/`
  - `_data/projects.yml` (project cards)
  - `_data/cool_stuff.yml` (curated links shown on the Annex page)
- **Pages (root):**
  - `index.html` (Annex / homepage)
  - `projects.html`
  - `contact.html`
- **Styles:** `style.css`
- **Drawer behavior:** `assets/drawer.js`

Old/retired pages can live in `archive/` (optional).

## Editing content (the easy way)

### Add / update projects
Edit: `_data/projects.yml`

Each item supports:

- `title` (string)
- `description` (string)
- `status` (e.g. `Active`, `Parked`, `Archived`)
- `featured` (true/false) — featured items appear on the Annex page
- `tags` (list of strings)
- `url` (optional) — live/demo link
- `repo` (optional) — source repo link
- `writeup` (optional) — blog/doc link

### Add / update “Cool stuff”
Edit: `_data/cool_stuff.yml`

Groups are displayed on the Annex page. Keep it curated; don’t turn it into a bookmark dump.

### Update the About drawer
Edit: `_includes/about-drawer.html`

This is the “About me + cult-ish aims” drawer.

## Local development (preview the site on your Mac)

### 1) Start the server
From the repo folder:

```bash
bundle exec jekyll serve