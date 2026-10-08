import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";

vi.mock("gsap", () => ({ default: { registerPlugin: vi.fn(), context: () => ({ revert: vi.fn() }), to: vi.fn() } }));
vi.mock("gsap/ScrollTrigger", () => ({ ScrollTrigger: {} }));

const renderPage = (page: React.ReactNode) => render(<MemoryRouter>{page}</MemoryRouter>);

describe("V2 editorial pages", () => {
  it("renders the new homepage architecture without legacy sections", () => {
    renderPage(<Index />);
    expect(screen.getByRole("heading", { name: "Clearer direction. Digital work your business can use." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Where AutomAi8 fits." })).toBeInTheDocument();
    expect(screen.queryByText("Trusted By")).not.toBeInTheDocument();
    expect(screen.queryByText("Industries")).not.toBeInTheDocument();
  });

  it("renders the new services architecture and every capability group", () => {
    renderPage(<Services />);
    expect(screen.getByRole("heading", { name: "Decide what the work needs to achieve. Then put the right skills behind it." })).toBeInTheDocument();
    expect(screen.getByText("Strategy and planning")).toBeInTheDocument();
    expect(screen.getByText("Systems and automation")).toBeInTheDocument();
    expect(screen.queryByText("Digital work as a connected system.")).not.toBeInTheDocument();
  });

  it("renders the new about architecture without unsupported legacy claims", () => {
    renderPage(<About />);
    expect(screen.getByRole("heading", { name: "Digital experience, applied with judgement." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Human plus AI, where the work calls for it." })).toBeInTheDocument();
    expect(screen.queryByText(/Founded 25 years ago/)).not.toBeInTheDocument();
    expect(screen.queryByText("Who We Work With")).not.toBeInTheDocument();
  });
});