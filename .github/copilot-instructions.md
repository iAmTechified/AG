# Copilot Instructions for AG Church Website

## Project Overview
This is a **Next.js 16 church website** for Assemblies of God Church – Citadel of Transformation. The app features sermons, news, programs, departments, giving (PayStack integration), and event management with a Laravel backend API connection.

**Tech Stack:** Next.js, React 19, TypeScript, Tailwind CSS 4, shadcn/ui (Radix UI), PayStack API

## Architecture

### Frontend Structure
- **`app/`** - Next.js app router with route-based pages (sermons, news, programmes, departments, ministers, giving, calendar)
- **`components/`** - Reusable UI components:
  - `ui/` - shadcn/ui Radix-based components (buttons, dialogs, forms, etc.)
  - `shared/` - Domain-specific cards: `sermon-card.tsx`, `news-card.tsx`, `department-card.tsx`
  - `layout/` - `header.tsx`, `footer.tsx` (used in root layout)
  - `giving/` - Payment-related: `paystack-payment-form.tsx`
- **`lib/`** - Core utilities:
  - `api.ts` - Centralized API client with mock fallbacks for all endpoints
  - `types.ts` - TypeScript interfaces for API responses (Sermon, News, Programme, Department, Minister, GalleryImage, PayStackResponse)
  - `utils.ts` - Helper functions

### Backend Integration
- **API Base:** `NEXT_PUBLIC_API_URL` (default: `https://api.church.com`)
- **Authentication:** Bearer token via `NEXT_PUBLIC_API_TOKEN`
- **Mock Data:** `lib/api.ts` exports `mockSermons`, `mockNews`, `mockDepartments`, `mockMinisters` for development fallbacks
- **Endpoints expected** (see SETUP.md for full list):
  - `/api/sermons`, `/api/news`, `/api/programmes`, `/api/departments`, `/api/ministers`, `/api/gallery`

### Payment System
- **PayStack Integration** at `app/api/paystack/initialize/route.ts`
- Uses `PAYSTACK_SECRET_KEY` (server-side only)
- Response includes `authorization_url`, `access_code`, `reference` for payment redirect

## Critical Patterns & Conventions

### Styling & Theme
- **Font Stack:** Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Colors:** Navy primary (`--primary: oklch(0.205 0 0)`) + Gold secondary (`oklch(0.97 0 0)`)
- **CSS Variables:** Defined in `styles/globals.css` with light/dark mode support
- **Tailwind CSS 4 with Custom Config:** `tailwindcss@4.1.9`, `@tailwindcss/postcss@4.1.9`
- **Animations:** Custom `animate-blob`, `animation-delay-2000`, `animate-fade-in` in CSS
- **UI Library:** shadcn/ui with Radix UI components—use `@/components/ui/*` for imports

### Page Structure
- All list pages (sermons, news, etc.) use mock data first, then swap to API when `NEXT_PUBLIC_API_URL` is set
- Detail pages (e.g., `/sermons/[id]`) use `[id]` dynamic routing
- Example: `app/sermons/page.tsx` lists sermons; `app/sermons/[id]/page.tsx` shows details

### Component Patterns
1. **Card Components:** `SermonCard`, `NewsCard`, `DepartmentCard` accept typed props, return Link-wrapped containers with hover animations
2. **Sections:** Pages use semantic `<section>` tags with `bg-muted`, `bg-primary`, `text-primary-foreground` classes
3. **Responsive Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for most layouts
4. **Icons:** Use `lucide-react` (library configured in `components.json`)

### Type Safety
- All API responses typed in `lib/types.ts`
- Use `interface` for API contracts, avoid `type` for consistency
- Example: `interface Sermon { id, title, description, date, preacher, video_url, duration, category }`

## Development Workflow

### Setup
```bash
npm install --legacy-peer-deps  # Required due to Radix UI peer dependencies
npm run dev                      # Start dev server on http://localhost:3000
npm run build                    # Build for production
npm run lint                     # Run ESLint
npm start                        # Start production server
```

### Adding New Features
1. **New Page:** Create `app/[feature]/page.tsx` with `getSermons()`-like API call pattern
2. **New Card Component:** Follow `SermonCard` pattern—accept `id`, `title`, image props; return Link-wrapped `<div className="group">`
3. **New API Endpoint:** Add function to `lib/api.ts` + type to `lib/types.ts`, include mock data fallback
4. **New Route Handler:** Place in `app/api/[feature]/route.ts` (e.g., PayStack at `app/api/paystack/initialize/route.ts`)

### Environment Variables
- `.env.local` (development):
  - `NEXT_PUBLIC_API_URL` - Backend URL
  - `NEXT_PUBLIC_API_TOKEN` - API bearer token
  - `PAYSTACK_SECRET_KEY` - PayStack secret (never expose publicly)
  - `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` - PayStack public key (for client forms)

## Build & Deployment
- **Platform:** Vercel (configured in `next.config.mjs`)
- **Analytics:** Vercel Analytics integrated via `@vercel/analytics`
- **Image Optimization:** Currently disabled (`unoptimized: true`) for static export compatibility
- **TypeScript:** Build errors ignored (`ignoreBuildErrors: true`) — fix lint issues manually

## Key Files Reference
- `lib/api.ts` - All API calls + mocks (start here for backend integration)
- `app/layout.tsx` - Root layout with Header/Footer, font setup, metadata
- `components/shared/*.tsx` - Reusable domain components (sermon-card, news-card)
- `components/ui/` - shadcn/ui components (use for new UI elements)
- `app/api/paystack/initialize/route.ts` - PayStack payment initialization
- `styles/globals.css` - CSS variables, animations, theme definitions
