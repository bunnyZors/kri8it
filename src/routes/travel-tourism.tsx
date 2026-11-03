import { createFileRoute } from "@tanstack/react-router";
import TravelTourism from "@/pages/TravelTourism";

export const Route = createFileRoute("/travel-tourism")({
  component: TravelTourism,
});
