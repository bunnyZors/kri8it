import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { describe, expect, it, vi } from "vitest";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";

vi.mock("gsap", () => ({ default: { registerPlugin: vi.fn(), context: () => ({ revert: vi.fn() }), to: vi.fn() } }));
vi.mock("gsap/ScrollTrigger", () => ({ ScrollTrigger: {} }));

// Pages render Links, so mount each one inside a minimal in-memory router.
const renderPage = async (page: ReactNode) => {
  const rootRoute = createRootRoute({ component: () => <>{page}</> });
  const router = createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  const result = render(<RouterProvider router={router} />);
  await screen.findAllByRole("heading", { level: 1 });
  return result;
};

describe("V2 editorial pages", () => {
  it("uses the approved conversation destination on the homepage", async () => {
    await renderPage(<Index />);
    const conversations = screen.getAllByRole("link", { name: "Talk through your business challenge" });
    conversations.forEach(link => expect(link).toHaveAttribute("href", "mailto:clint@kri8it.com"));
  });

  it("keeps the trusted-by logo band on the homepage hero only", async () => {
    const services = await renderPage(<Services />);
    expect(screen.queryByText("Trusted By")).not.toBeInTheDocument();
    services.unmount();
    await renderPage(<About />);
    expect(screen.queryByText("Trusted By")).not.toBeInTheDocument();
  });

  it("renders the new services architecture and every capability group", async () => {
    await renderPage(<Services />);
    expect(screen.getByRole("heading", { name: "Decide what the work needs to achieve. Then put the right skills behind it." })).toBeInTheDocument();
    expect(screen.getByText("Strategy and planning")).toBeInTheDocument();
    expect(screen.getByText("Systems and automation")).toBeInTheDocument();
    expect(screen.queryByText("Digital work as a connected system.")).not.toBeInTheDocument();
  });

  it("renders the new about architecture without unsupported legacy claims", async () => {
    await renderPage(<About />);
    expect(screen.getByRole("heading", { name: "Digital experience, applied with judgement." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Human plus AI, where the work calls for it." })).toBeInTheDocument();
    expect(screen.queryByText(/Founded 25 years ago/)).not.toBeInTheDocument();
    expect(screen.queryByText("Who We Work With")).not.toBeInTheDocument();
  });
});
