# Personal Site — UI kit

An interactive recreation of Martin Lockett's personal website, built from the brand's own components. Open `index.html`.

## Screens
- **Home** (`HomeScreen.jsx`) — hero intro + monogram, four pillars, motto band, selected writing.
- **Writing** (`WritingScreen.jsx`) — calm index of essays & notes.
- **Essay** (`EssayScreen.jsx`) — single reading view; short measure, generous leading, "read next".
- **About** (`AboutScreen.jsx`) — brand essence, how-I-work principles.
- **Contact** (`ContactScreen.jsx`) — quiet form with a confirmation state.
- **Nav / Footer** — shared chrome (sticky translucent nav; Ink Navy footer).

## Notes
- Composes the system's components via `window.MartinLockettDesignSystem_2039f1` (loaded from `../../_ds_bundle.js`).
- Content lives in `data.js` (`window.SITE_ESSAYS`). Copy is illustrative, written in-voice.
- Routing is plain React state in `index.html` — no router, recreation-fidelity only.
