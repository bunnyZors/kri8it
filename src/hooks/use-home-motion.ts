import { useEffect, type RefObject } from "react";
import { capabilityDesktopWidth } from "@/lib/home-motion-rules";

export function useHomeMotion(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      if (disposed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const scope = root.current;
      const media = gsap.matchMedia();
      const ctx = gsap.context(() => {
        media.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.fromTo("[data-hero-reveal]", { y: 18, opacity: 0.2 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.12, clearProps: "all" });
          gsap.to(".orbit-scroll", { rotation: 32, y: 70, transformOrigin: "50% 50%", ease: "none", scrollTrigger: { trigger: ".site-hero", start: "top top", end: "bottom top", scrub: 1 } });
          gsap.fromTo(".orbit-path", { strokeDasharray: 1, strokeDashoffset: 0.7 }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".site-hero", start: "top top", end: "bottom top", scrub: 1 } });
          gsap.fromTo(".kinetic-fill", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", ease: "none", scrollTrigger: { trigger: ".premise", start: "top 75%", end: "center 40%", scrub: true } });
          gsap.fromTo(".process-draw", { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".process-list", start: "top 65%", end: "bottom 65%", scrub: true } });
          gsap.utils.toArray<HTMLElement>(".sector-geometry").forEach(el => gsap.fromTo(el, { y: -20 }, { y: 20, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } }));
          gsap.to(".system-outer", { rotation: 90, transformOrigin: "50% 50%", ease: "none", scrollTrigger: { trigger: ".system-diagram", start: "top bottom", end: "bottom top", scrub: 1 } });
          gsap.fromTo(".system-flow", { strokeDasharray: 1, strokeDashoffset: 0.8 }, { strokeDashoffset: 0, scrollTrigger: { trigger: ".system-diagram", start: "top 80%", end: "bottom 50%", scrub: true } });
        });
        media.add(`(min-width: ${capabilityDesktopWidth}px) and (prefers-reduced-motion: no-preference)`, () => {
          const track = scope.querySelector<HTMLElement>(".capability-track");
          const viewport = scope.querySelector<HTMLElement>(".capability-viewport");
          const section = scope.querySelector<HTMLElement>(".capability-section");
          if (!track || !viewport || !section) return;
          const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
          section.classList.add("capabilities-pinned");
          const animation = gsap.to(track, { x: () => -distance(), ease: "none", scrollTrigger: { trigger: section, start: "top 80px", end: () => `+=${distance()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1, refreshPriority: 1 } });
          const focusPanel = (event: FocusEvent) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) return;
            const panel = target.closest<HTMLElement>(".capability-panel");
            const trigger = animation.scrollTrigger;
            if (panel && trigger) window.scrollTo({ top: trigger.start + Math.min(panel.offsetLeft, distance()), behavior: "instant" });
          };
          track.addEventListener("focusin", focusPanel);
          return () => { track.removeEventListener("focusin", focusPanel); section.classList.remove("capabilities-pinned"); };
        });
      }, scope);
      const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
      void document.fonts.ready.then(() => {
        refresh();
        // Pin spacing changes document geometry after the route's initial hash scroll.
        if (!disposed && window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
      });
      const resize = new ResizeObserver(refresh);
      resize.observe(scope);
      cleanup = () => { resize.disconnect(); media.revert(); ctx.revert(); };
    }).catch(() => { /* SSR content remains fully usable if motion cannot load. */ });
    return () => { disposed = true; cleanup(); };
  }, [root]);
}