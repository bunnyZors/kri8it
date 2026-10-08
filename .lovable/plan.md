# Rebuild Home, Services and About from the V2 brief

## Goal
Replace the current Home, Services and About content and information architecture with the exact proposed website copy in the supplied V2 document. Preserve the existing Kri8it visual language, header, footer, route URLs and established animation style.

## What will change

### Home (`/`)
Rebuild the page in the document’s H01–H10 order:
1. Hero with the animated Kri8it line artwork, new consultancy-led headline, supporting copy, two calls to action and experience line.
2. Business questions section.
3. Consultancy-in-practice section.
4. Four distinct capability areas: brand, websites, marketing, and AI/automation/systems.
5. Use-in-context section.
6. Five-stage Map / Build / Test / Hand over / Support presentation.
7. Dedicated AutomAi8 section.
8. Client-fit section.
9. Partnership proof using only the two supplied quotes and attributions.
10. Final invitation with the supplied call to action.

All current homepage sections and copy not represented in H01–H10 will be removed from the page, including the logo carousel, industries, project showcases and any extra testimonial content.

### Services (`/services`)
Rebuild the page in the document’s S01–S10 order:
1. Consistent animated hero with the new “How we help” copy and both calls to action.
2. Consultancy-first introduction.
3. Four clearly differentiated service narratives for Brand, Websites, Marketing, and AI/automation/systems.
4. Capability detail at `#delivery`, presented as a polished expandable list while retaining every supplied capability and copywriting.
5. Appropriate-delivery section.
6. “Before we start” questions as a refined accordion.
7. Final invitation and supplied call to action.

The existing connected-system copy, diagram and service descriptions that are not in V2 will be removed.

### About (`/about`)
Rebuild the page in the document’s A01–A08 order:
1. Consistent animated hero with the new About copy and both calls to action.
2. Business-behind-the-brief point of view.
3. Evolution and breadth.
4. Partnership.
5. Four principles showing judgement in practice.
6. Dedicated Human plus AI / AutomAi8 section.
7. Follow-through section covering Map / Build / Test / Hand over / Support in context.
8. Final invitation and supplied call to action.

All current founder, geography, sector, values and connected-system content not present in V2 will be removed.

## Design approach
- Keep the current dark/light rhythm, Gilroy typography, cyan accent, spacing scale, `max-w-7xl` alignment and paragraph sizing.
- Keep heroes visually consistent with the homepage pattern and retain the animated SVG/parallax treatment.
- Reuse the established sticky split layouts, numbered rows, fine dividers and restrained motion rather than introducing a new visual system.
- Use the existing approved email route for primary calls to action because the footer form currently has no verified delivery path.
- Keep the header and footer unchanged.
- Respect reduced-motion preferences for page animations.

## Metadata
Apply the supplied title and description to each route. Keep accurate sitewide Open Graph fallbacks in the static document and use route-aware head updates for the browser and JS-capable crawlers. Do not add a placeholder share image.

## Technical details
- Create small reusable presentation pieces for the shared hero, arrow-style calls to action, section headings and invitation bands, while keeping page-specific copy in each page.
- Preserve `/`, `/services`, `/about`, `/services#delivery` and existing site routes.
- Add focused tests that verify the three routes render their new V2 headings and that removed legacy headings no longer appear.
- Validate compilation and tests, then inspect all three pages at desktop and mobile widths for hierarchy, text flow, animation visibility and anchor behaviour.

## Out of scope
- No header or footer redesign.
- No contact-form delivery implementation.
- No changes to Automotive or Travel & Tourism pages.
- No internal draft notes, editorial notes, provenance text or section codes will appear on the website.
