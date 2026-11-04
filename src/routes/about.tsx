import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

const title = "About Kri8it | Digital experience and consultancy";
const description =
  "Over 25 years of digital experience across brand, websites and marketing, with consultancy and practical implementation shaped around the business need.";

export const Route = createFileRoute("/about")({
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
  component: About,
});
