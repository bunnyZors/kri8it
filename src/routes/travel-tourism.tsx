import { createFileRoute } from "@tanstack/react-router";
import TravelTourism from "@/pages/TravelTourism";

export const Route = createFileRoute("/travel-tourism")({
  head: () => ({ meta: [
    { title: "Travel and tourism digital strategy | Kri8it" },
    { name: "description", content: "Brand, content, websites and marketing for travel and tourism businesses, connecting inspiration with an informed next step." },
    { property: "og:title", content: "Travel and tourism digital strategy | Kri8it" },
    { property: "og:description", content: "Brand, content, websites and marketing for travel and tourism businesses, connecting inspiration with an informed next step." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TravelTourism,
});
