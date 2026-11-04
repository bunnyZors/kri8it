import { createFileRoute } from "@tanstack/react-router";
import Services from "@/pages/Services";

const title = "Brand, web, marketing and digital consultancy | Kri8it";
const description =
  "Consultancy and delivery across brand, websites, SEO, marketing, AI and systems. Define the business need, then choose the right work and capabilities.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});
