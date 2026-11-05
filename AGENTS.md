# Project architecture rules

- Use the shared editorial page primitives for consultancy-led page heroes, CTA links and invitation bands so the core pages retain one visual and interaction language.
- Keep route-specific copy and section order in each page module so editorial reviews can verify each page against its source document.
- Keep the homepage’s source-verified structured content in a dedicated data module and compose focused sections from its page module, so the long-form journey stays reviewable without an oversized component.
- Treat animation specifications as presentation-only; homepage copy comes from the pre-handover editorial source with explicit owner edits, so motion work cannot silently replace business content.
- The footer enquiry composes a mailto draft in the visitor's email app rather than claiming server delivery; no delivery service is configured.
- Isolate homepage scroll effects in a hydrated, dynamically imported GSAP hook with matchMedia cleanup; native scrolling and SSR-readable content must not depend on motion loading.
- Use homepage-scoped semantic theme roles for the new editorial journey and shared header/footer, so retained detail-page tokens and content are not silently redesigned.
- The app runs on TanStack Start: each URL is a thin file in `src/routes/` (with its own `head()` title/description) that renders a module from `src/pages/`, so pages stay server-rendered with correct per-page metadata.
- Import routing helpers (`Link`, `useLocation`, `useNavigate`) from `@/lib/router-compat`, which keeps react-router calling conventions over the TanStack router so existing components need no rewrites.
- Theme tokens, fonts and custom utilities live in `src/styles.css` (Tailwind v4, HSL-triple colour variables) because there is no Tailwind config file any more.