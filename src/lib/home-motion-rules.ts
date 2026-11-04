export const capabilityDesktopWidth = 1100;
export function shouldPinCapabilities(width: number, reducedMotion: boolean) {
  return width >= capabilityDesktopWidth && !reducedMotion;
}