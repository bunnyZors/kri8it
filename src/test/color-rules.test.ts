import { describe, expect, it } from "vitest";
import { BRAND_PRIMARY, LIGHT_SECTION_TEXT_ACCENT, PAPER_BACKGROUND, contrastRatio } from "@/lib/color-rules";

describe("light-section turquoise tint", () => {
  it("meets WCAG AA on the site's paper background", () =>
    expect(contrastRatio(LIGHT_SECTION_TEXT_ACCENT, PAPER_BACKGROUND)).toBeGreaterThanOrEqual(4.5));
  it("meets WCAG AA on pure white", () =>
    expect(contrastRatio(LIGHT_SECTION_TEXT_ACCENT, "#FFFFFF")).toBeGreaterThanOrEqual(4.5));
  it("is a compliant tint, not the bright brand primary", () =>
    expect(LIGHT_SECTION_TEXT_ACCENT).not.toBe(BRAND_PRIMARY));
});
