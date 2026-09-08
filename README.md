# Hearlie's Flower Box

A research-backed static website concept for Hearlie's Flower Box in Orlando's Parramore neighborhood.

**Live target:** https://prithiraj.github.io/Hearlie_s_Flower_Box/

## Why this build is intentionally different

Public sources conflict on the shop's current operating status. The site therefore uses a conversion-safe **Call to confirm** action and does **not** invent current hours, prices, delivery promises, ecommerce, or social profiles.

Read:
- [`DESIGN_PLAN.md`](./DESIGN_PLAN.md) — evidence baseline, creative direction, implementation plan, and acceptance criteria.
- [`ASSET_RIGHTS.md`](./ASSET_RIGHTS.md) — image provenance and commercial-launch replacement notes.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Architecture

No framework or build step is required:

- `index.html` — semantic page, SEO metadata, JSON-LD
- `styles.css` — responsive visual system, accessibility, reduced-motion
- `script.js` — mobile navigation, reveal behavior, optional Three.js petals
- `.github/workflows/pages.yml` — GitHub Pages deployment

## Deployment

Pushes to `main` deploy through GitHub Actions after the repository's **Settings → Pages → Source** is set to **GitHub Actions**.
