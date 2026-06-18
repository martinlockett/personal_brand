# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Martin Lockett's personal brand repository. It contains two things:

- **`brand/`** — raw brand assets: the brand guide (`Brand Guide.md`), brand sheet (SVG/PNG), and ML monogram SVG.
- **`design-system/`** — a full design system built from those brand assets: CSS tokens, React components, guideline specimen pages, and a personal-site UI kit.

There is no build system, no package.json, no bundler. Everything is static HTML + vanilla CSS + JSX loaded via CDN script tags.

## Build

```bash
npm install        # first time only
npm run build      # bundles components → design-system/_ds_bundle.js + _site_bundle.js
npm run watch      # rebuild on save during development
```

Both bundles are gitignored — run `npm run build` after cloning before opening the UI kit.

## Running the UI kit

```bash
npm run build
npx serve design-system -p 3456
# open http://localhost:3456/ui_kits/personal-site/
```

**Do not open `index.html` directly** (`file://` is blocked by the browser extension and relative paths break). Always use `serve`.

`serve` must point at `design-system/` (not the repo root). The `<base>` tag in `index.html` fixes path resolution caused by `serve`'s 301 redirect stripping `index.html` from the URL.

Guideline specimen pages (`design-system/guidelines/*.html`) are self-contained and need no build step — open them directly with `open`.

## Architecture

### CSS token system

`design-system/styles.css` is the single entry point — link only this file. It imports the four token files:
- `tokens/colors.css` — all brand colours as CSS custom properties
- `tokens/typography.css` — type scale, weights, leading
- `tokens/spacing.css` — spacing scale + container widths (`--container`: 1140px, `--container-text`: 680px)
- `tokens/fonts.css` — Fraunces + Inter loaded from Google Fonts CDN

### React components

Each component in `components/{core,forms,brand}/` ships three files: `.jsx` (implementation), `.d.ts` (prop types), `.prompt.md` (usage guidance for AI generation). Components register themselves on `window.MartinLockettDesignSystem_2039f1`.

- **`components/core/`** — Button, Badge, Card, Eyebrow, Rule, Pullquote
- **`components/forms/`** — Input
- **`components/brand/`** — Wordmark, Monogram

### UI kit

`ui_kits/personal-site/` is a full interactive personal site. Routing is plain React state (no router). Content is in `data.js` (`window.SITE_ESSAYS`). Screens: Home, Writing index, Essay, About, Contact. Shared chrome: Nav (sticky translucent), Footer (Ink Navy).

### Agent Skill

`design-system/SKILL.md` makes the design system loadable as a Claude Code Agent Skill named `martin-lockett-design`. Read it to understand the skill's scope and orientation. The `readme.md` contains the full brand rules — treat it as the canonical reference.

## Brand constraints (enforce these when generating UI)

- **No emoji. Ever.**
- **Brass is a spark, not a fill** — 5% maximum. If a layout feels loud, reduce Brass.
- **Whitespace is the brand** — when in doubt, remove rather than add.
- **Sentence case** everywhere in copy and headings. UPPERCASE only for short letter-spaced eyebrows/labels. Title Case only for "Martin Lockett" as wordmark.
- **Middot `·`** is the signature separator, not bullet points or pipes.
- **Monochrome must work first** — colour is the last layer.
- **Motion:** calm, no bounce. Standard/ease-out, 140–400ms. No infinite decorative loops.
- **Fonts:** Fraunces (display/headings/pullquotes) and Inter (body/UI) only. No substitution.
- **Warm Parchment (`#F3EEE4`) backgrounds**, not white. Ink Navy (`#1C2B40`) for emphasis bands (footer, motto).
