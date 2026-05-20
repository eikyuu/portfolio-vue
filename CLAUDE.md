# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Vincent Duguet, in French. Nuxt 3 (SSR) site, prerendered to static.

## Commands

Package manager is **pnpm** (declared in `package.json` via `packageManager`).

- `pnpm install` — install deps (runs `nuxt prepare` postinstall, which generates `.nuxt/eslint.config.mjs` consumed by [eslint.config.mjs](eslint.config.mjs))
- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` — Nitro server build
- `pnpm generate` — fully static build (uses the prerender route list in [nuxt.config.ts](nuxt.config.ts))
- `pnpm preview` — preview the built site
- `pnpm lint` — run ESLint

No test framework is configured.

## Architecture

Standard Nuxt 3 auto-import layout (`components/`, `composables/`, `layouts/`, `pages/`, `server/`). Non-obvious points worth knowing before editing:

- **Prerender list is hand-maintained.** `nitro.prerender.routes` in [nuxt.config.ts](nuxt.config.ts) hard-codes every URL that must end up in the static output. When adding a new page or blog slug, add it to that array or it will not be generated.
- **Blog content is inline, not a CMS.** Articles live as a `Blogs` object inside [pages/blog/\[slug\].vue](pages/blog/%5Bslug%5D.vue), with `content` as raw HTML strings rendered via `v-html`. There is no markdown pipeline. Adding an article = adding a key here + adding the slug to the prerender list + placing the `.webp` hero image in `public/`.
- **Contact form backend lives in Supabase.** [components/Contact.vue](components/Contact.vue) submits the form by calling a Supabase Edge Function named `"resend"` (`supabase.functions.invoke("resend", ...)`). The function source is **not in this repo** — it lives in the Supabase project. Any payload validation, HTML escaping, and rate-limiting MUST be done inside that Edge Function. The client-side regex/length checks are UX only, not security. Env vars consumed: `SUPABASE_URL`, `SUPABASE_ANON_KEY` (public). The earlier Nitro route at `server/routes/send.ts` has been removed — do not reintroduce it without removing the Supabase path first.
- **Runtime config.** Public only: `apiBase`, `supabaseUrl`, `supabaseKey`, plus a `motion.directives` block that registers a custom `v-pop-bottom` directive for `@vueuse/motion`.
- **Custom page-transition loader.** [layouts/default.vue](layouts/default.vue) runs a fake progress bar on every route change, using a `visitedPages` cookie to distinguish first-visit (slow) from revisit (fast) animations. Don't replace this with `<NuxtLoadingIndicator>` — the cookie-based behavior is intentional.
- **SEO.** Each landing page sets its own `useSeoMeta(...)`; [app.vue](app.vue) only sets `htmlAttrs.lang = 'fr'`. Page transitions are configured globally as `{ name: 'page', mode: 'out-in' }`.
- **Styling.** Tailwind via PostCSS plugin (not the Nuxt Tailwind module). Global CSS in [assets/css/main.css](assets/css/main.css) sets `font-family: Cambria, Georgia, serif` and base 14px. Brand colors are `#5A3B5D` (purple) and `#FFC800` (yellow).
- **Modules in use.** `@nuxt/image` (use `<NuxtImg>` for `public/` assets), `@nuxtjs/html-validator` (verbose, `failOnError: false` — validation warnings during dev are expected), `@nuxt/eslint`, `@vueuse/motion/nuxt`, `@nuxt/fonts`. `@vercel/analytics` is mounted in [app.vue](app.vue).
