import { createFileRoute } from "@tanstack/react-router";
import Automotive from "@/pages/Automotive";

export const Route = createFileRoute("/automotive")({
  component: Automotive,
});
