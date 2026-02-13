import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, useGSAP);

interface SmoothScrollerProps {
  children: React.ReactNode;
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const { pathname } = useLocation();

  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    smootherRef.current = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, { scope: wrapperRef });

  // Scroll to top on route change
  useEffect(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(0, false);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
