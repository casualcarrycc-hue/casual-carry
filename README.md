# Casual Carry — Next.js App

A Next.js (App Router + TypeScript + Tailwind) build-out of the Casual Carry
catalog prototype: homepage, full catalog with filters, a sliding
navigation drawer, a product detail page, and the leather-care journal.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` creates a production
build; `npm start` serves it.

The layout loads Bodoni Moda, EB Garamond, and Barlow Condensed from Google
Fonts at build time via `next/font/google`, so the machine running
`npm run build` / `npm run dev` needs normal internet access to
`fonts.googleapis.com` and `fonts.gstatic.com`.

## Structure

```
app/
  layout.tsx              Root layout — fonts, responsive nav, and footer
  page.tsx                 Homepage
  catalog/page.tsx          Full catalog: subcategory ribbon, filters, grid
  product/[slug]/page.tsx   Product detail
  journal/leather-care/     Leather care & patina journal
  terms/, privacy/          Catalog-stage legal information
  gifting/                  Static gifting introduction

components/
  Header.tsx                Mobile + desktop catalog navigation
  Footer.tsx                Contact, social, legal, and catalog links
  BottomNav.tsx             Mobile catalog tab bar
  NavDrawer.tsx             The sliding off-canvas navigation panel
  NavDrawerContext.tsx      Open/close state, shared by Header + NavDrawer
  CatalogContent.tsx        Catalog page logic (filters, grid, pagination)
  ProductCard.tsx           Product grid card with angle-switch
  CareAccordion.tsx         Leather care ritual accordion
  ClimateCalculator.tsx     Interactive balm-frequency calculator

lib/
  products.ts               Product data + helpers (single source of truth)

public/images/               Logo + product photography used across the app
```

## Design system

`tailwind.config.ts` encodes the full "Warm Editorial Atelier" token set
(colors, type scale, spacing, radii) exactly as approved in the Stitch
prototype and `DESIGN.md`. Update tokens there rather than hardcoding new
one-off values in components.

## Wiring this up to real commerce

This is intentionally catalog-first, per the original brief:

- `lib/products.ts` is mock data — swap it for a CMS/API call (or a
  database query) when ready; every component already reads from this
  one file.
- Cart, checkout, wishlist, customer accounts, booking forms, and downloads
  are intentionally hidden until a backend is available. Legacy `/bag`,
  `/wishlist`, and `/account` URLs redirect to the catalog.
- Catalog category filters run entirely in the browser against the local
  product data.
# casual-carry
