# Hearlie's Flower Box

Research-backed static website for Hearlie's Flower Box, Orlando, Florida.

The implementation intentionally separates verified historical facts from current operating details that still require owner confirmation. See [`DESIGN_PLAN.md`](./DESIGN_PLAN.md) and [`ASSET_RIGHTS.md`](./ASSET_RIGHTS.md) before commercial launch.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The site is configured for GitHub Pages through `.github/workflows/pages.yml`. Pushes to `main` deploy the static site once GitHub Pages is configured to use **GitHub Actions** as its publishing source.
