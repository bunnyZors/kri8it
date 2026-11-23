# Kri8it Website — Engineering Handover

> Drop this file into the repository root (Codex reads `AGENTS.md` automatically;
> `AGENTS.md` points here). It describes the site as built, the rules that
> govern it, and how to change it safely.

## 1. What this is

Marketing website for **Kri8it**, a digital consultancy (Cape Town + Dublin).
Five content pages plus a 404. No backend, no database, no authentication —
the only "submission" is a footer enquiry that composes a `mailto:` draft in
the visitor's own email client. Do not add a backend without explicit owner
approval.

- Live: https://kri8it.lovable.app
- Pages: `/` (home), `/services`, `/about`, `/travel-tourism`, `/automotive`

## 2. Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **TanStack Start v1** (`@tanstack/react-start` 1.168) | SSR, file-based routing |
| UI | React 19, shadcn/ui (Radix), lucide-react icons | |
| Styling | **Tailwind CSS v4** via `@import` in `src/styles.css` | **No `tailwind.config.js` exists** — tokens, fonts and utilities live in `src/styles.css` |
| Motion | GSAP 3 + ScrollTrigger | isolated in one hook (see §7) |
| 3D | three + @react-three/fiber + @react-three/drei | used by the AutomAi8 phone scene |
| Tests | Vitest + Testing Library (jsdom) | `src/test/` |
| Package manager | **bun** (`bun add`, never edit lockfiles) | |

Commands: `bun run dev` · `bun run build` · `bun run test` · `bun run lint`

## 3. Directory map

```
src/
  routes/            Thin TanStack route files, one per URL, each with its own
                     head() (title, description, og:title, og:description).
                     __root.tsx = shared shell (Navbar, Footer, Outlet, scroll-
                     to-top on navigation). routeTree.gen.ts is GENERATED — never edit.
  pages/             Page modules with the actual copy and section order:
                     Index, Services, About, TravelTourism, Automotive, NotFound.
  components/        Shared sections (Navbar, Footer, ClientMarquee, HeroSection,
                     EditorialPage, CtaSection, …) and ui/ (shadcn primitives).
  components/home/   Homepage-only: HomeSections.tsx (all homepage sections),
                     EditorialElements.tsx (shared editorial primitives),
                     Automai8Infographic.tsx + Automai8PhoneScene.tsx +
                     automai8-features.ts (feature data kept separate from presentation).
  data/site-content.ts  Homepage structured content — the single source of truth
                     for homepage copy. Edit copy here, not in components.
  hooks/use-home-motion.ts  All homepage GSAP/ScrollTrigger effects (see §7).
  lib/router-compat.tsx     Link / useLocation / useNavigate with react-router
                     calling conventions over the TanStack router. ALWAYS import
                     routing helpers from here, never from react-router-dom.
  styles.css         Design tokens (HSL triples), @font-face, custom utilities.
  assets/            Images. Some are `*.asset.json` pointers to hosted media —
                     import them like normal assets; the build resolves them.
public/fonts/        Inter (variable) + Gilroy (Light/Regular/Medium/Bold/Heavy).
```

## 4. Routing rules (hard constraints)

- One thin file per URL in `src/routes/` rendering a module from `src/pages/`.
- Every route gets its own `head()` with a unique title/description/og tags.
  Never "Lovable App" placeholders.
- Create the route file in the same change as any `Link`/`navigate` that
  references it. A `FileRoutesByPath` type error means the route file is
  missing or misnamed — create/rename it, never cast or suppress.
- Every parent route must render `<Outlet />`.
- Never install `react-router-dom` or add an `App.tsx` page switcher.

## 5. Design system

**Palette (owner-approved, exhaustive — do not introduce new colours):**

| Colour | Hex | Role |
|---|---|---|
| Primary turquoise | `#00E5E3` | Buttons + highlighted words in headings on DARK sections only |
| Primary text tint | `#00726F` (`--site-primary-text`) | Turquoise text on light backgrounds (WCAG AA, 5.1:1) |
| Body text on light | `#45565E` | Muted blue-grey derived from primary |
| Secondaries | `#049AD9`, `#4AD3EE`, `#005E98`, `#122658` | Icons, data visualisation, infographics ONLY |
| Link/nav hover | `#049AD9` | Matches approved blue buttons |

Violet `#9F63FF` was removed — never re-propose it. Headings stay dark except
highlighted words. Neutral backgrounds stay neutral.

**Typography:** Gilroy (bold/heavy) for headings, Inter for body — loaded via
`@font-face` in `src/styles.css`. Preserve original weights and paragraph
styling (`text-base md:text-lg leading-relaxed` for body copy).

**Buttons / CTAs (owner-specified):**
- Primary: turquoise `#00E5E3` circular disc with a dark right arrow BEFORE a
  bold, uppercase, widely tracked label. Label sits on the page background
  (light on dark sections, dark on light sections).
- Secondary: muted uppercase text with a subtle underline — no pill, no
  outline, no trailing arrow.
- Eyebrows: muted grey, bold, `0.3em` tracking, formatted `NN / LABEL`.

**Tokens:** all colours/gradients/shadows are semantic tokens in
`src/styles.css` (HSL triples mapped in `@theme inline`). Never hardcode
`bg-[#…]`/`text-white` utilities in components.

## 6. Content governance (owner rules — treat as blocking)

- Homepage copy lives in `src/data/site-content.ts` and is **source-verified**.
  Animation/motion specs are presentation-only and must never change copy.
- Owner's manual copy edits exist ONLY in the hero, section 01 ("Start with
  the right question") and section 02 ("Choose the right response"). Keep them.
- Never invent clients, quotes, awards, statistics, integrations, prices or
  results. Quotes must be exact verified wording.
- Tone: considered, clear, confident, practical. No hype, no generic AI-agency
  language.
- Verified contacts: Cape Town +27 82 559 9903 (clint@kri8it.com,
  francesca@kri8it.com) · Dublin +353 83 317 4599 (charl@kri8it.ie).
- Primary CTA "Talk through your business challenge" → `mailto:clint@kri8it.com`.
- "Portfolio" and "Blog" nav entries are intentionally `to: null` (not built).

## 7. Motion rules

- All homepage scroll effects live in `src/hooks/use-home-motion.ts`: a
  hydrated, dynamically imported GSAP hook with `matchMedia` cleanup. Native
  scrolling and SSR-readable content must never depend on motion loading.
- Native scrolling only. GSAP/ScrollTrigger is the only motion framework for
  scroll effects — do not add a second one.
- Effects must reverse on upward scroll and fully respect
  `prefers-reduced-motion` (reduced-motion users see complete, static content).
- Hero figure-eight artwork: original 4s ease-out stroke-draw with 0 / .5 / 1s
  delays and −15% reversible vertical parallax. No rotation, no scroll-driven
  stroke drawing.
- "How we work" progress bar: 6px, fills left-to-right on scroll, short black
  tail transitioning into dominant turquoise.
- The 01 heading highlight ("need to do?") and 02 highlight ("important
  decisions") are STATIC turquoise — no scroll-driven colour fill.

## 8. Homepage structure (in order)

Hero (figure-eight SVG + split-text char animation) → ClientMarquee
("Trusted by", 19 logos, infinite scroll, left-edge fade, 200vw track) →
01 Question → 02 Response (capability cards: dark rounded panels, arc artwork,
turquoise number, bottom tagline) → Sector focus (Automotive / Travel &
tourism full-width split rows linking to their pages) → Partnership (dark
centred statement, concentric rings) → Human judgement / AutomAi8 (light
section, blueprint-grid panel, 3D phone + orbiting feature icons with
descriptions) → Engagement model (5-step horizontal timeline) → How we work
(dark 5-column, scroll progress bar) → Testimonials → Contact CTA.

AutomAi8 features (data in `automai8-features.ts`): Coversational AI *(sic —
owner's spelling, do not "fix")*, AI Front Desk, Smarter Marketing, Reputation
management, Social Planner.

## 9. Testing & verification

- `bun run test` — suites in `src/test/`: `app-routing.test.tsx`,
  `editorial-content.test.tsx`, `home-rules.test.ts`. When you change a rule
  the owner cares about (colours, CTAs, copy), update/add a test asserting the
  concrete value.
- Typecheck: `npx tsc -b --noEmit` (tsconfig has `noUncheckedIndexedAccess`,
  `exactOptionalPropertyTypes` — guard indexed reads, omit optional keys).
- Visual QA viewports: 390×844, 834×1112, 1440×900. Check mobile menu,
  keyboard nav, links, scroll up/down, and reduced motion.

## 10. Gotchas

- `src/routeTree.gen.ts` is generated — never edit it.
- No `@/hooks/use-toast` toaster mount; use `sonner` (`<Toaster />` in `__root.tsx`).
- `*.asset.json` files are hosted-media pointers — keep them with their imports.
- Fonts must load via `<link>`/`@font-face`, never remote `@import` in CSS
  (Tailwind v4 Lightning CSS resolves imports from the filesystem).
- Keep CSS `@import` rules at the very top of `src/styles.css`.
- Do not publish to production or connect external services without explicit
  owner approval.

## 11. Known outstanding items

- The AutomAi8 phone screen currently shows an illustrative/remade mobile
  view; the owner has not yet supplied the final real login-screen asset.
- Portfolio and Blog pages are not built (nav links intentionally inert).
