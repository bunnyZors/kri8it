import { describe, expect, it } from "vitest";
import { shouldPinCapabilities } from "@/lib/home-motion-rules";
import { offices, primaryContact } from "@/data/site-content";

describe("homepage motion rules", () => {
  it("pins on the approved desktop viewport", () => expect(shouldPinCapabilities(1440, false)).toBe(true));
  it("keeps tablet capabilities vertical", () => expect(shouldPinCapabilities(834, false)).toBe(false));
  it("keeps mobile capabilities vertical", () => expect(shouldPinCapabilities(390, false)).toBe(false));
  it("never pins when reduced motion is requested", () => expect(shouldPinCapabilities(1440, true)).toBe(false));
});
describe("approved contact destinations", () => {
  it("sends the primary conversation to Clint", () => expect(primaryContact).toBe("mailto:clint@kri8it.com"));
  it("uses the supplied Cape Town number", () => expect(offices[0]?.telephone).toBe("tel:+27825599903"));
  it("uses the supplied Dublin number", () => expect(offices[1]?.telephone).toBe("tel:+353833174599"));
  it("includes the supplied Cape Town email contacts", () => expect(offices[0]?.emails).toEqual(["clint@kri8it.com", "francesca@kri8it.com"]));
  it("includes the supplied Dublin email contact", () => expect(offices[1]?.emails).toEqual(["charl@kri8it.ie"]));
});