# App Template

Frontend-only Next.js UI starter with shadcn/ui and a mock login flow.

## Stack
- Next.js (App Router) + TypeScript + npm
- Tailwind CSS + shadcn/ui components
- Mock auth via localStorage (no backend)

## Quickstart
1. Install deps: `npm install`
2. Dev server: `npm run dev` (http://localhost:3000)

## Scripts
- `npm run dev` – run Next.js locally
- `npm run lint` – ESLint
- `npm run typecheck` – `tsc --noEmit`

## Mock Auth
- `/login` lets users continue without credentials.
- A `mock-auth=true` flag is stored in localStorage.
- Protected routes check the flag client-side and redirect to `/login`.
- Logout clears localStorage and returns to `/login`.

## Project Structure
- `app/(auth)/login` – mock login page
- `app/(app)/` – app shell and home page (client-side guard)
- `components/app-shell` – header + sidebar nav + guard
- `components/ui` – shadcn/ui primitives
- `lib` – UI helpers

## Notes
- No backend, database, or environment variables are required.
