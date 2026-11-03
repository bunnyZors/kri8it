# Project architecture rules

- Use the shared editorial page primitives for consultancy-led page heroes, CTA links and invitation bands so the core pages retain one visual and interaction language.
- Keep route-specific copy and section order in each page module so editorial reviews can verify each page against its source document.
- The app runs on TanStack Start: each URL is a thin file in `src/routes/` (with its own `head()` title/description) that renders a module from `src/pages/`, so pages stay server-rendered with correct per-page metadata.
- Import routing helpers (`Link`, `useLocation`, `useNavigate`) from `@/lib/router-compat`, which keeps react-router calling conventions over the TanStack router so existing components need no rewrites.
- Theme tokens, fonts and custom utilities live in `src/styles.css` (Tailwind v4, HSL-triple colour variables) because there is no Tailwind config file any more.