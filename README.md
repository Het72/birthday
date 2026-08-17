# Happy Birthday, Nirjra 🌸

A one-page React + Vite birthday site with a magical flower garden theme.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for production:

```bash
npm run build
```

The output goes to `dist/` — upload that folder to any static host (Netlify, Vercel, GitHub Pages, etc.) to share the link.

## Structure

- `src/components/Hero.jsx` — headline, message, "Open Your Surprise" button
- `src/components/SurpriseReveal.jsx` — petal/heart/sparkle burst + birthday message card
- `src/components/WishCards.jsx` — three small wish cards
- `src/components/GardenFinale.jsx` — large animated flower garden closing section
- `src/components/PetalField.jsx` — ambient falling petals, sparkles, drifting butterflies
- `src/components/icons/Flowers.jsx` — reusable hand-built SVG flowers, leaves, petals, hearts, sparkles, butterflies

To change the name, edit the `NAME` constant at the top of `src/App.jsx`.
