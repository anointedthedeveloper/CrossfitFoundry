# Foundry Factory — Frontend

Industrial-grade gym landing page built with React + Vite + Tailwind CSS v4.

## Stack

- **React 19** — UI
- **Vite 7** — build tool with HMR
- **Tailwind CSS v4** — utility-first styling
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky nav
│   ├── HeroSection.jsx     # Hero + CTA
│   ├── WodTicker.jsx       # Scrolling workout ticker
│   ├── ClassSchedule.jsx   # Weekly schedule + pricing
│   ├── CoachProfiles.jsx   # Coach cards
│   ├── EventCalendar.jsx   # Monthly event calendar
│   ├── MemberGallery.jsx   # Masonry photo gallery
│   ├── FreeTrialForm.jsx   # Lead capture form
│   └── Footer.jsx          # Footer + map
├── pages/
│   └── Home.jsx
├── config/
│   └── api.js
└── main.jsx
```

## Deploy to Vercel

The `vercel.json` at the root of this folder is pre-configured. Just connect the repo in the Vercel dashboard and set the **Root Directory** to `frontend`.

All SPA routes are rewritten to `index.html` automatically.
