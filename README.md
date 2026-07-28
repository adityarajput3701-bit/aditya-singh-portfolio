# Aditya Singh — Portfolio

Next.js 15 / React 19 / TypeScript / Tailwind / React Three Fiber.

## Setup

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_SITE_URL to your real domain
```

Add `resume.pdf` and `og-image.png` to `/public` — see `public/README.md`.

```bash
npm run dev        # http://localhost:3000
npm run type-check # tsc --noEmit
npm run lint
npm run build && npm run start   # production build
```

## Structure

```
src/
├── app/            Next.js App Router: layout, page, sitemap, robots
├── components/
│   ├── layout/      Navbar, MobileNav, Footer, LoadingScreen, BackToTop, ScrollProgressBar
│   ├── sections/    Hero, About, Experience, Skills, Certifications, Education, Contact
│   ├── three/       CanvasRoot, CameraRig, LightRig
│   └── ui/          GlassCard, MagneticButton, Tag, RevealOnScroll, CursorGlow, SectionHeading
├── features/scene/  LedgerLattice, GlassPanels, ParticleField
├── shaders/         Raw GLSL source (noise, lattice, particles)
├── materials/       Custom ShaderMaterial classes, registered via R3F extend()
├── effects/         Post-processing composite (Bloom, vignette, grain, chromatic aberration)
├── config/          content.ts — the single source of truth for resume data
├── types/           Content types + R3F JSX intrinsic-element augmentation
├── hooks/           useReducedMotion, useMousePosition, useActiveSection, useScrollProgress, useDeviceTier
└── lib/             seo.ts — metadata + JSON-LD builders
```

To update resume content, edit `src/config/content.ts` only — every section
renders from there, nothing is hardcoded in components.

## Known gaps, stated plainly

- **Not yet compiled.** This was built in a sandboxed environment with no
  network access, so `npm install` / `next build` have not been run against
  it. Everything was hand-reviewed for syntax and API correctness, but your
  first `npm run dev` is the real test. Most likely failure mode if something
  breaks: a version mismatch between `@react-three/fiber` / `drei` /
  `postprocessing` and the pinned `three` version — check their compatibility
  table if you hit a resolution error.
- `resume.pdf` and `og-image.png` are not included (see `public/README.md`).
- `NEXT_PUBLIC_SITE_URL` defaults to a placeholder — set it before deploying.
- `leva` is installed per the original tech-stack spec but not wired into any
  component. Wire it into a dev-only panel over the shader uniforms in
  `LedgerLattice` / `ParticleField` if you want live tuning controls.
