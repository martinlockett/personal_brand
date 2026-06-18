---
name: martin-lockett-design
description: Use this skill to generate well-branded interfaces and assets for Martin Lockett's personal brand, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand:** Martin Lockett — a personal brand. Quiet, deep, considered. "The Observer who builds." Voice: Considered · Genuine · Generative.
- **The single rule that governs everything:** whitespace is the brand; restraint over decoration. Brass accent is 5% max — a spark, never a fill.
- **Foundations:** link `styles.css` for all tokens + webfonts. Colours, type (Fraunces + Inter), spacing, radii, shadows live under `tokens/`. Specimen cards under `guidelines/`.
- **Components:** `components/{core,forms,brand}/` — Button, Badge, Card, Eyebrow, Rule, Pullquote, Input, Wordmark, Monogram. Each has a `.prompt.md` with usage.
- **UI kit:** `ui_kits/personal-site/` — a full interactive personal site to copy from.
- **Assets:** `assets/ml-monogram.svg`, `assets/brand-sheet.{svg,png}`.

When in doubt, read `readme.md` — it has the full content fundamentals, visual foundations, and iconography guidance.
