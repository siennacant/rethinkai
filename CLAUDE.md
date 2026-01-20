# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Start production server
```

## Architecture

This is a Next.js 16 App Router application displaying 2026 Oscar nominees. It uses React 19 and Tailwind CSS 4.

### Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components (Header, CategoryCard, NomineeCard)
- `src/data/nominees.ts` - Static data for nominees and ceremony info

### Key Patterns

- **Client Components**: Interactive components (`CategoryCard`, `NomineeCard`, `Header`) use `"use client"` directive for state management
- **Path Alias**: `@/*` maps to `./src/*`
- **Image Handling**: Uses Next.js Image component with TMDB remote images configured in `next.config.ts`. Components include fallback UI for failed image loads.
- **Styling**: Tailwind CSS with custom CSS animations (shimmer, sparkle, float effects) defined in `globals.css`. Gold color palette with CSS variables.

### Data Types

```typescript
interface Nominee { title: string; image: string; details?: string; }
interface Category { name: string; icon: string; nominees: Nominee[]; }
```
