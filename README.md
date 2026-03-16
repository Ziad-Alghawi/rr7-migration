# Kotlin Website RR7 Migration

This directory contains the React Router 7 Framework Mode migration of the Kotlin homepage.
The goal of this migration is to preserve the visual result and interactive behavior of the original implementation while moving to SSR-first rendering and hydration.

## What We Did

### Migration Scope

- Migrated the homepage implementation to React Router 7 Framework Mode.
- Enabled server-side rendering for initial HTML output and client-side hydration.
- Preserved reusable UI patterns and continued using `@rescui` components.

### Behavior and UI Parity

- Preserved the original page layout and section order.
- Preserved interactive behavior, including tab switching in the "Why Kotlin" section.
- Preserved "Sort" behavior in usage cards while keeping it hydration-safe.

### SSR and Hydration Hardening

- Refactored tab code highlighting to use deterministic rendering compatible with SSR.
- Removed render-time browser-only reads from components and moved them to `useEffect` where needed.
- Verified production build output for both server and client bundles.

## Project Structure (Brief)

```text
rr7-migration/
	app/
		root.tsx                     # Root layout, HTML shell, scripts, links
		routes.ts                    # Route registration
		routes/
			home.tsx                   # Homepage route entry
		components/
			OverviewPage.tsx           # Page composition
			header-section/            # Hero/intro section
			latest-from-kotlin-section/
			why-kotlin-section/
				programming-language/    # Tab switching + highlighted Kotlin code
			usage-section/             # Testimonials/usage cards + sort behavior
			start-section/
			layout/                    # Shared section/container primitives
		styles/                      # Global and grid styles
	public/                        # Static assets (fonts, images)
	build/                         # Generated production output
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Run type checks:

```bash
npm run typecheck
```

Create production build:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

## Scripts

- `npm run dev`: start local development server
- `npm run typecheck`: generate route types and run TypeScript checks
- `npm run build`: build client and server artifacts
- `npm run start`: run the built server output

## Notes

- This migration focuses on the homepage required by the assignment.
- The implementation keeps maintainability in mind with small, section-based components.
- SSR correctness is validated by server-rendered HTML output and successful hydration assets.
