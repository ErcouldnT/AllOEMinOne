# AllOEMinOne

Find the cheapest OEM parts in Turkey at lightning speed! 🚀

## Tech Stack

| Category | Technology |
|---|---|
| Framework | SvelteKit 5 (Svelte 5, Runes) |
| Adapter | @sveltejs/adapter-node |
| Language | TypeScript |
| Styling | TailwindCSS 4 + DaisyUI 5 |
| Database | Drizzle ORM + SQLite (better-sqlite3) |
| Scrapers | Axios, Cheerio, Puppeteer (with Stealth Plugin) |
| Icons | @lucide/svelte |
| Linting | ESLint (@antfu/eslint-config) |
| Git Hooks | Husky + lint-staged |
| Deployment | Docker (multi-stage build) |

## Getting Started

```bash
# Install dependencies
npm install

# Create / push database schema
npm run db:push

# Start dev server
npm run dev
```

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run svelte-check |
| `npm run lint` | Lint & auto-fix with ESLint |
| `npm run db:push` | Push Drizzle schema to SQLite |
| `npm run db:studio` | Open Drizzle Studio (DB GUI) |

## Docker

```bash
docker compose up -d
```

The app will be available at `http://localhost:3000`.

## Features

- 🔍 Search across 15 different stores simultaneously
- 🖥️ Build & share custom PC configurations
- 🌗 Dark / Light theme support (DaisyUI)
- 📱 Fully responsive design (mobile-first)
- 🐳 Docker-ready with multi-stage build
- 💾 SQLite database with price history tracking
- ⚡ Server-side rendering with SvelteKit

## Supported Stores

Amazon · Çiçeksepeti · Hepsiburada · Inventus · İncehesap · İtopya · Mediamarkt · n11 · QP · pttAVM · Sinerji · Teknobiyotik · Teknosa · Trendyol · Vatanbilgisayar

## License

[GPL-3.0](LICENSE)

---

© [Ercode](https://github.com/ErcouldnT)
