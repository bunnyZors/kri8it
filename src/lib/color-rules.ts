/**
 * Colour governance: turquoise used as text on light backgrounds must meet
 * WCAG AA contrast (4.5:1) against the site's actual paper background.
 * The bright brand primary (#00E5E3) stays reserved for dark sections,
 * icons and data visualisation.
 */
export const PAPER_BACKGROUND = "#F2F0EA";
export const BRAND_PRIMARY = "#00E5E3";
export const LIGHT_SECTION_TEXT_ACCENT = "#00726F";

export function relativeLuminance(hex: string): number {
  const value = hex.replace("#", "");
  const channels = [0, 2, 4].map((offset) => {
    const channel = Number.parseInt(value.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function contrastRatio(foreground: string, background: string): number {
  const [darker, lighter] = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => a - b);
  return (lighter + 0.05) / (darker + 0.05);
}
