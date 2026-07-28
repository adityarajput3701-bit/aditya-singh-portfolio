# Required assets

Two files are referenced in code but not included, since I can't generate your
actual resume or a real branded image on your behalf:

- `resume.pdf` — your actual resume, referenced by the "Get Resume" buttons
  (`Navbar`, `Hero`, `Contact`) via `/resume.pdf`.
- `og-image.png` — 1200×630px social-preview image, referenced in
  `lib/seo.ts` for Open Graph / Twitter card tags.

Drop both into this folder before deploying. Without them, the download
buttons 404 and social shares fall back to no preview image — the site
otherwise builds and runs fine without them.
