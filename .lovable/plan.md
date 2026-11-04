# Kri8it editorial scroll website

## Scope and reference decisions
- Rebuild the complete homepage as the eleven-part journey in the November 4 handover, not a hero-only experiment.
- Adapt the shared navigation and footer to the new journey and verified contact actions. Preserve `/services`, `/about`, `/automotive`, `/travel-tourism`, their content, and `/services#delivery`; no unrelated subpage redesign.
- The Kri8it content reference supplies factual copy. The handover supplies section order, capability/process names and motion. HighLevel informs narrative progression only; Gravity informs orbital restraint only. No reference code, branding, assets, pricing or claims will be copied.
- The private scroll prototype requires sign-in. Its absence is not a blocker: use the complete documented motion specification.
- No production publication, external connections, backend or working form submission without explicit approval.

## Visual direction
- Dark editorial canvas, large readable typography, open full-width sections, precise rules and original orbital line geometry. Alternate dark and paper sections to pace the narrative; blue is the primary accent and violet a restrained diagram/motion accent. Avoid gradients, stock dashboards and decorative floating cards.
- Global semantic tokens: ink `#090716`, paper `#F2F0EA`, blue `#049AD9`, violet `#9F63FF`, plus accessible text, muted, border, focus and surface roles. Keep the existing HSL-triple token contract so retained pages continue to render correctly; scope new homepage theme roles where needed.
- Retain the existing Kri8it SVG brand mark and Gilroy typography as project-provided assets for review, with robust system fallbacks. Logo/font licensing remains a release checklist item; do not approximate the mark. Define discrete mobile/tablet/desktop type sizes, zero letter spacing, spacing, maximum widths, radii and timing centrally.
- Maintain visible blue accents on light sections only where contrast is sufficient; use darker semantic variants for small text and focus states.

## Section-by-section mapping
| Order | Section | Content and presentation |
|---|---|---|
| 01 | Sticky navigation | Services, Focus, Process, AutomAi8, Proof and Contact jump to real homepage sections. Existing detail pages remain reachable through capability/sector/footer links. Responsive menu, skip link and top-edge progress indicator. |
| 02 | Orbital hero | Exact handover eyebrow, “Clearer direction that moves business forward.”, supporting paragraph and 25-year line. Primary CTA “Talk through your business challenge” → `mailto:clint@kri8it.com`; secondary “Let's shape your next step” → `/services`. Original scroll-linked orbital SVG, not a replacement brand logo. |
| 03 | Credibility strip | Nine named clients from the handover: Natural Selection, Springbok Atlas, Pembroke Privacy, Safari Online, Art of Safari, Exclusive Books, Wildlife Safari, Mahindra, Volkswagen. Understated labelled monochrome name placeholders until client-logo permission is confirmed; no scraped logos. |
| 04 | Strategic premise | “Start with a question your business needs to answer.” Business context, people and required help, using verified reference prose. Oversized scroll-fill typography with essential text always legible. |
| 05 | Capability journey | Strategy, Brand, Websites, Marketing, AI and automation; truthful descriptions from the handover. Desktop horizontal scroll progression; independent ordered panels on smaller screens. Link to the existing Services page. |
| 06 | Sector focus | Two substantial Automotive and Travel & tourism editorial panels with handover summaries, labelled image placeholders and links to existing sector pages. |
| 07 | Working process | Understand, Define, Shape, Deliver, Support and the supplied descriptions, linked by a reversible scroll-drawn progress line. |
| 08 | AutomAi8 | Exact agency/automation-brand relationship, lead management, retention, attribution and workflows; scoped human decisions and fallback behaviour. Rework the existing containment diagram into an original Kri8it boundary enclosing AutomAi8. No unsupported integration or performance claims. |
| 09 | Proof | Exact source-verified quotes and attributions below. Open editorial quote layout; permission status remains a release item. |
| 10 | Engagement pathway | Define the question → Scope the useful work → Agree delivery and responsibilities → Put the direction into use → Support and refine where required. Use source-supported descriptions, not packages or pricing. |
| 11 | Contact conversion | “Tell us what you want the work to achieve.” Invite context, prior attempts and the question. Direct clickable email/telephone links for both offices, followed by a concise footer. Replace the misleading non-submitting form with email actions; no fake success state. |

### Source-verified testimonial copy
- Bertus Floor, Group Digital Officer, The SAFY Group: “We have partnered with Kri8it Digital for over 10 years, and they are, in my view, our most valued business partner.”
- Terri Cordin, Marketing Manager, Wildlife Safari (Australia) Pty Ltd: “Working with Kri8it to develop and design our website is proof that a great partnership produces great results. We love our new website!”

### Verified contact details
- Cape Town: `+27 82 559 9903`, `clint@kri8it.com`, `francesca@kri8it.com`.
- Dublin: `+353 83 317 4599`, `charl@kri8it.ie`.

## Responsive and accessibility behaviour
- **1440 × 900:** desktop pinned capabilities, readable panel widths and native vertical scrolling; content from the next section remains discoverable below the hero.
- **834 × 1112:** unpinned vertical capability sequence, stacked editorial panels, compact navigation and touch-sized controls; no desktop pinning squeezed into tablet.
- **390 × 844:** one-column sections, stable image ratios, wrapped CTAs/contact details and a keyboard-operable menu. Use vertical capabilities rather than requiring swipe gestures.
- Semantic `header`, `nav`, `main`, sections, ordered lists, quotations and footer; logical headings, meaningful image text and decorative SVG hidden from assistive technology.
- Menu supports Escape, focus management, predictable closing on selection and focus return. Controls use existing design-system components and visible focus. Anchor targets account for sticky-header height.
- Reduced motion immediately exposes all content, disables pinning/parallax/orbit movement and animated theme changes, and retains usable section links. No-JavaScript/animation-failure state remains readable; no essential copy starts permanently hidden.

## Assets and release gates
- The two new attachments are text specifications, not approved visual assets. Sector imagery stays visibly labelled “Automotive image placeholder” / “Travel image placeholder”; client slots stay labelled logo placeholders. Missing imagery does not delay implementation.
- Existing logo, fonts and favicon can remain for review; inventory their licence/approval status. Do not assume existing client/sector files have new permission to use them in the rebuilt homepage.
- Use exact verified testimonial wording in preview; final permission is still required before release.
- Social-sharing image, confirmed social URLs, privacy/terms URLs, image/client-logo permissions and brand licence confirmation remain outstanding. Omit nonexistent social/legal destinations instead of fake links; report every unresolved item.
- No canonical tag until the owner confirms the intended production domain. No placeholder social image URL.

## Technical architecture
- Keep TanStack Start and the existing thin route → page-module convention. `src/pages/Index.tsx` composes focused section modules, not one oversized component. Keep existing editorial primitives for retained pages; add homepage-specific variants rather than silently altering all heroes.
- Group homepage content in a structured content module with exact source text and provenance. Separate reusable layout/sections from motion hooks and original SVG artwork. Record any changed structural rules in `AGENTS.md`.
- Reuse installed GSAP 3.14 / ScrollTrigger; no new animation framework or smooth-scroll library. Existing Framer Motion is present in retained pages: remove its use from new homepage/header/footer motion, without forcing an unrelated sitewide removal.
- Set up GSAP only after hydration with scoped contexts/matchMedia and cleanup on route exit. Refresh measurements after font loading and responsive layout settling, without making text visibility depend on fonts loading.
- Scroll architecture: top progress via transform; hero orbit rotation/translation and SVG strokes via reversible scrub timelines; load reveal via bounded stagger; kinetic fill via a readable base plus decorative overlay; desktop capability track translation using measured distance; sector placeholder parallax; process stroke reveal; section theme interpolation and coordinated header contrast. Use DOM/SVG updates, not React state on every scroll frame.
- Use native scrolling and no scroll trapping. Desktop pinning only when both width and motion preference permit it. Keyboard-focused capability content must scroll into view or temporarily unpin so hidden panels cannot strand keyboard users.
- Preserve SSR-readable content and route-specific title/description/Open Graph/Twitter metadata. Add homepage Organization/ProfessionalService structured data using only verified names/contact details; no invented address or ratings.

## Implementation passes and verification
1. Foundation: tokens, structured content, reusable navigation/footer/sections and source mapping.
2. Complete all eleven sections with static usable content and labelled placeholders.
3. Add desktop GSAP timelines, then tablet/mobile and reduced-motion adaptations.
4. Run existing routing tests and focused tests for motion breakpoint rules, reduced-motion pinning exclusions and concrete contact destinations. Do not rely on copy or styling snapshots as behavioural verification.
5. Use the platform's automatic production checks; inspect reported output and resolve errors rather than running a duplicate manual build.
6. Playwright on localhost at all three exact viewports: inspect hero/menu, every section, horizontal overflow, headline clipping, pinning progression, process drawing and scroll reversal. Test keyboard/skip/menu/Escape, all navigation/mailto/tel destinations, reduced-motion and runtime/failed network signals; capture screenshots and inspect them.
7. Regression-check the four retained detail pages and navigation back to the homepage. Verify no stale placeholder links or unsupported claims slipped into the new page.

## Completion handover
Provide the Lovable preview URL, what was built, packages added (none expected), concrete test results, labelled placeholders and permission/asset checklist. Identify owner steps for forms/CRM, consent, analytics, domain and publication. Keep production unchanged until explicit approval.