# Stellar Spark Ignite — Foundry Factory

Monorepo for the **Foundry Factory** gym website.

## Structure

```
stellar-spark-ignite/
├── frontend/   # React + Vite + Tailwind CSS app
└── prd.json    # Product requirements
```

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

## Deploy

The project is configured for **Vercel**. Connect the repo and set the root directory to `frontend`. The `vercel.json` handles build config, SPA routing rewrites, and asset caching headers automatically.

## Tech

- React 19 · Vite 7 · Tailwind CSS v4 · Lucide React
