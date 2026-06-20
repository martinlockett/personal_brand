# Martin Lockett — Design System

> *Vere Esse · Libere Agere · Alte Intellegere* — **Be true · act freely · understand deeply**

This is the design system for **Martin Lockett's personal brand** — a quiet, deep, considered identity for one person, not a company. It translates a personality-driven brand guide into reusable visual foundations, components, and a working personal-site UI kit. The whole point of the brand is restraint: it should *reveal* itself, not broadcast.

**Brand essence — "The Observer who builds."** A generative, people-aware thinker with a private interior. Three words: **Considered · Genuine · Generative.** Four pillars: **Truth · Purpose · Freedom · Depth.**

## Sources

This system was built from the owner's brand materials. Explore them to design with the brand more faithfully:

- **GitHub — `martinlockett/personal_brand`** ([https://github.com/martinlockett/personal_brand/brand)](https://github.com/martinlockett/personal_brand/tree/main/brand) — the canonical brand guide (`Brand Guide.md`), brand sheet, and `ML` monogram. The full source guide is preserved here at `guidelines/brand-guide-source.md`.
- Related repos by the same owner (context only, not used here): `martinlockett/obsidian_theme`, `martinlockett/elevate`.

> **Font note:** The brand specifies **Fraunces** (display serif) and **Inter** (body sans) — both Google Fonts. They're loaded from the Google Fonts CDN in `tokens/fonts.css` rather than self-hosted. If you need offline/self-hosted webfont binaries, send the `.woff2` files and I'll wire up local `@font-face` rules. No substitution was made — these are the brand's actual typefaces.

---

## Content fundamentals

How the brand *sounds*. Voice in one line: **thoughtful, honest, and quietly warm — the sound of someone who understood it before they said it.**

- **Person & address:** First person ("I read everything", "I'd rather have thought about it properly"). Warm second person when addressing the reader, never salesy.
- **Casing:** Sentence case everywhere in running copy and headings. Reserve UPPERCASE for short letter-spaced eyebrows/labels (e.g. `PERSONAL BRAND GUIDE`, `TRUTH · PURPOSE · FREEDOM · DEPTH`). Title Case only for the wordmark "Martin Lockett".
- **Punctuation:** The **middot ·** is a signature separator (`Be true · act freely · understand deeply`). Em-dashes for considered asides. The Latin motto appears in formal contexts.
- **Tone — do:** Say it plainly and precisely · explain *why* · warm but not performative · comfortable with a considered pause · let depth show.
- **Tone — don't:** Hype, buzzwords, salesy energy · assert without substance · over-familiar or attention-seeking · padding · rushing to fill silence.
- **Emoji:** None. Not part of the brand. No emoji in UI, copy, or assets.
- **Vibe:** Unhurried and grounded. Short measure, plenty of air. Copy rewards attention rather than shouting for it. *Example dek:* "Considered pieces, published when they're ready rather than often. Depth that reveals itself."

---

## Visual foundations

- **Colour:** Five named colours — **Ink Navy `#1C2B40`** (primary), **Brass `#B8843E`** (accent/spark), **Slate Teal `#4A6360`** (secondary), **Parchment `#F3EEE4`** (paper field), **Graphite `#23282E`** (body text). Usage ratio **60% Parchment / 25% Ink / 10% Slate Teal / 5% Brass.** Brass is a *seasoning, never a base* — if a layout feels loud, there's too much Brass. Monochrome must work first; colour is the last layer.
- **Type:** Two families. **Fraunces** (variable serif, 300–700, upright + italic) for the wordmark, headings, and pull-quotes — characterful but classical. **Inter** for all running text and interface — humanist warmth, never corporate. Principle: *plenty of air* — generous leading (~1.6 body), short measure (≤64ch), restraint over bold. Motto/captions in Fraunces italic.
- **Backgrounds:** Warm Parchment paper, not white. Occasional full-width **Ink Navy** bands for emphasis (motto, footer). No gradients, no neon, no busy patterns. Subtle paper grain is on-brand if used lightly.
- **Imagery:** Natural light, paper and ink, muted tones, considered negative space. Real and unposed over polished stock; depth of field, calm composition. Avoid gloss, stock-photo gestures, clutter.
- **Lines & dividers:** Fine **hairlines** over heavy blocks. The **brass hairline** is the signature flourish — use once per layout. Card borders are 1px paper-toned.
- **Corners:** Restrained, paper-soft radii (3–16px; pills only for badges). Nothing bubbly.
- **Shadows:** Warm, soft, low — tinted toward Ink Navy (`rgba(28,43,64,…)`), never grey-black. Elevation is subtle; the system prefers hairlines and whitespace to heavy drop shadows.
- **Cards:** Raised parchment surface (`--parchment-0`), 1px hairline border, soft `--shadow-sm`, `--radius-lg`. A featured card may carry a 2px **brass top edge**.
- **Motion:** Calm and considered — **no bounce**. Standard/`ease-out` curves, 140–400ms. Fades and gentle moves only; no infinite decorative loops.
- **Hover:** Fills darken one step (Ink → `ink-navy-500`, Brass → `brass-600`); ghost/secondary warm to `parchment-100`; links gain a brass underline.
- **Press:** A small 0.5px downward nudge; shadow drops. No colour invert, no big scale.
- **Focus:** A soft **brass focus ring** (`0 0 0 3px rgba(184,132,62,0.55)`) plus a brass border on fields.
- **Transparency / blur:** Sparingly — the sticky nav uses a translucent parchment with backdrop-blur. Otherwise surfaces are solid paper.
- **Layout rules:** Sticky translucent top nav; centred content at `--container` (1140px) or `--container-text` (680px) short measure for reading. Whitespace is the brand — *when in doubt, remove, don't add.*

---

## Iconography

The brand is **icon-light by design** — visibility-chasing and gimmickry are explicitly off-brand. There is no proprietary icon font or icon set in the source materials.

- **The one mark that matters** is the **`ML` monogram** (`assets/ml-monogram.svg`) — a Fraunces ligature in an Ink Navy rounded square with a brass keyline. It is the favicon/avatar/stamp. Available as a React component (`Monogram`) with brand and monochrome modes.
- **Separators over icons:** the middot **·** does much of the work icons would elsewhere.
- **Unicode arrows** (→, ←) are used for quiet navigation affordances rather than drawn glyphs.
- **No emoji**, ever.
- **If you need a UI icon set** (rare — keep it minimal), use a fine, single-weight line set such as **Lucide** (https://lucide.dev) at ~1.5px stroke to match the hairline aesthetic, in Slate Teal or Ink Navy. This is a *recommended substitute*, not part of the original brand — flag any icon use and keep it sparing. Never hand-draw decorative SVG illustrations; the brand favours type, rule lines, and whitespace.

---

## Index — what's in this system

**Foundations**
- `styles.css` — global entry point (import this one file). `@import`s only.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css` — CSS custom properties + webfont loading.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) + `brand-guide-source.md` (the original guide).

**Components** (`window.MartinLockettDesignSystem_2039f1.*`)
- `components/core/` — **Button, Badge, Card, Eyebrow, Rule, Pullquote**
- `components/forms/` — **Input**
- `components/brand/` — **Wordmark, Monogram**

**UI kit**
- `ui_kits/personal-site/` — interactive personal site: Home, Writing index, Essay reading view, About, Contact. Composes the components above.

**Assets**
- `assets/ml-monogram.svg` — the ML mark · `assets/brand-sheet.svg` / `.png` — the one-page brand reference.

**Other**
- `SKILL.md` — makes this system usable as a downloadable Agent Skill.

---

## Golden rules

1. **Whitespace is the brand** — when in doubt, remove, don't add.
2. **Brass is a spark, not a fill** — 5% maximum.
3. **Plain truth over polish** — say the real thing, simply.
4. **Monochrome must work first** — colour is the last layer, never the crutch.
5. **Reward attention** — depth that reveals itself beats anything that shouts.
