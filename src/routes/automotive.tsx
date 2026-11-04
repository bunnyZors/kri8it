import { createFileRoute } from "@tanstack/react-router";
import Automotive from "@/pages/Automotive";

export const Route = createFileRoute("/automotive")({
  head: () => ({ meta: [
    { title: "Automotive digital strategy and delivery | Kri8it" },
    { name: "description", content: "Brand, websites, marketing and automation for automotive businesses, shaped around complex customer journeys and dealer networks." },
    { property: "og:title", content: "Automotive digital strategy and delivery | Kri8it" },
    { property: "og:description", content: "Brand, websites, marketing and automation for automotive businesses, shaped around complex customer journeys and dealer networks." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Automotive,
});
