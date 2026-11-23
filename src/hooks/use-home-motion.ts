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
          // Original EditorialHero artwork parallax; line drawing stays a load animation.
          gsap.to(".hero-eight", { yPercent: -15, ease: "none", scrollTrigger: { trigger: ".site-hero", start: "top top", end: "bottom top", scrub: true } });
          gsap.fromTo(".kinetic-fill", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", ease: "none", scrollTrigger: { trigger: ".premise", start: "top 75%", end: "center 40%", scrub: true } });
          gsap.fromTo(".process-progress-fill", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".process-track", start: "top 80%", end: "bottom 45%", scrub: true } });
          gsap.utils.toArray<HTMLElement>(".sector-geometry").forEach(el => gsap.fromTo(el, { y: -20 }, { y: 20, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } }));
          gsap.fromTo(".proof-rings svg", { y: -50 }, { y: 50, ease: "none", scrollTrigger: { trigger: ".proof-section", start: "top bottom", end: "bottom top", scrub: 1 } });
          const quoteViewport = scope.querySelector<HTMLElement>(".quote-viewport");
          const quoteTrack = scope.querySelector<HTMLElement>(".quote-track");
          const quoteSet = quoteTrack?.querySelector<HTMLElement>(".quote-set");
          if (quoteViewport && quoteTrack && quoteSet) {
            // Duplicate sets make the roll seamless: shift by one full set width.
            const quoteRoll = () => quoteSet.offsetWidth + 70;
            gsap.fromTo(quoteTrack, { x: () => -quoteRoll() }, { x: 0, ease: "none", scrollTrigger: { trigger: quoteViewport, start: "top 92%", end: "bottom 35%", scrub: 1, invalidateOnRefresh: true } });
          }
          gsap.fromTo(".system-lines path", { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, stagger: 0.2, ease: "none", scrollTrigger: { trigger: ".automai8-infographic", start: "top 82%", end: "bottom 55%", scrub: true } });
          const infographic = scope.querySelector<HTMLElement>(".automai8-infographic");
          if (infographic) {
            const float = gsap.timeline({ paused: true, repeat: -1, yoyo: true, defaults: { duration: 3.5, ease: "sine.inOut" } })
              .fromTo(".automai8-interface", { y: 7, rotation: -1 }, { y: -9, rotation: 1 }, 0)
              .fromTo(".automai8-device", { rotationY: -12, rotationX: 7 }, { rotationY: -4, rotationX: 3 }, 0)
              .fromTo(".automai8-whatsapp", { y: 4, rotation: -.5 }, { y: -4, rotation: .5 }, 0)
              .fromTo(".automai8-feature-row > :first-child", { y: 0 }, { y: -6 }, .2)
              .fromTo(".automai8-feature-row > :last-child", { y: -5 }, { y: 2 }, .4)
              .fromTo(".automai8-floating-icon", { y: 6, rotation: -6 }, { y: -10, rotation: 5, stagger: .25 }, 0)
              .fromTo(".automai8-device-shadow", { scaleX: 1, opacity: .5 }, { scaleX: .85, opacity: .3 }, 0);
            let manuallyPaused = false;
            const visibility = ScrollTrigger.create({ trigger: infographic, start: "top bottom", end: "bottom top", onToggle: self => { if (self.isActive && !manuallyPaused) float.resume(); else float.pause(); } });
            if (visibility.isActive) float.resume();
            const toggle = (event: Event) => {
              if (!(event instanceof CustomEvent)) return;
              manuallyPaused = event.detail === true;
              if (manuallyPaused || !visibility.isActive) float.pause(); else float.resume();
            };
            infographic.addEventListener("automai8-motion-toggle", toggle);
            return () => { infographic.removeEventListener("automai8-motion-toggle", toggle); };
          }
          return undefined;
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