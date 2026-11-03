import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

const title = "Digital consultancy, brand, web and marketing | Kri8it";
const description =
  "Advice and delivery for brand, websites, marketing, AI and automation. Kri8it helps you define the purpose of the work and put the agreed direction into use.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});
