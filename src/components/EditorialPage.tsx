import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientMarquee from "@/components/ClientMarquee";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  secondaryLabel: string;
  secondaryTo: string;
  supportingLine?: string;
  showClients?: boolean;
};

export function ArrowLink({
  children,
  href,
  to,
  compact = false,
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  to?: string;
  compact?: boolean;
  light?: boolean;
}) {
  const className = "inline-flex items-center gap-4 w-fit h-auto min-h-12 px-5 py-4 uppercase whitespace-normal text-left";
  const content = (
    <>
      <span className="flex items-center justify-center">
        <ArrowRight size={compact ? 18 : 20} />
      </span>
      <span className="text-sm font-bold uppercase">
        {children}
      </span>
    </>
  );

  if (to) return <Button asChild variant={light ? "editorialLink" : "editorial"} className={className}><Link to={to}>{content}</Link></Button>;
  return <Button asChild variant={light ? "editorialLink" : "editorial"} className={className}><a href={href}>{content}</a></Button>;
}

export function EditorialHero({
  eyebrow,
  title,
  children,
  secondaryLabel,
  secondaryTo,
  supportingLine,
  showClients = false,
}: EditorialHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;
    const context = gsap.context(() => {
      if (artworkRef.current) {
        gsap.to(artworkRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, sectionRef);
    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className={`relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 overflow-hidden ${showClients ? "pb-0" : "pb-20"}`}>
      <div ref={artworkRef} className={`absolute top-0 left-0 right-0 ${showClients ? "bottom-[210px] md:bottom-[260px]" : "bottom-0"} pointer-events-none overflow-hidden`} aria-hidden="true">
        <svg viewBox="0 0 1474 1119" fill="none" className="absolute right-0 bottom-0 w-[72%] md:w-[55%] h-auto opacity-40">
          <path d="M.5,1118.81c7.16-197.99,130.53-379,317.92-456.35.22.84.54,2.06.93,3.55,6.13,22.92,28.6,86.14,62.22,143.23,41.07,69.74,93.26,113.16,91.02,113.72-4.21,1.06-.14.04-19.31,5.18-93.19,24.99-150,103.46-157.02,190.66" stroke="hsl(var(--accent))" strokeWidth="1.5" className="hero-svg-path" style={{ strokeDasharray: 1178, strokeDashoffset: 1178 }} />
          <path d="M1473.76,654.49c-10.93,1.19-21.9,3.23-32.85,6.17-35.47,9.51-67.67,30.81-67.67,30.81-49.61,34.17-88.1,82.15-110.68,138-6.51,19.28-13.02,38.55-19.52,57.83l-244.7-138.59-16.4-9.28,47.09-81.08.92.53c61.42-133.4,181.62-242.19,334.55-283.19,36.45-9.77,73.04-15.36,109.25-17.04" stroke="hsl(var(--accent))" strokeWidth="1.5" className="hero-svg-path" style={{ strokeDasharray: 1307, strokeDashoffset: 1307, animationDelay: "0.5s" }} />
          <path d="M903.48,1118.8l-163.55-93.48-81.08-47.09c-34.86-22.06-69.72-44.11-104.59-66.16-45.03-35.57-83.69-78.53-114.33-127.05,0,0-41.14-65.74-61.09-140.15C305.66,371.9,467.65,91.27,740.62,18.09c251.13-67.33,508.73,64.33,605.33,298.35-2.38.64-10.77,2.86-13.14,3.52-153.26,43.26-247.27,148.72-247.27,148.72,0,0-1.07-6.35-2.74-12.55-31.04-115.8-150.08-184.51-265.88-153.47-115.8,31.04-184.51,150.08-153.47,265.88v.02c9.52,35.48,28.48,65.46,28.48,65.46,16.6,24.66,38.44,45.34,63.97,60.57,25.38,13.04,50.76,26.08,76.17,39.11l55.71,30.52,381.88,218.26,81.08,47.09-.53.92c44.73,20.59,86.39,47.56,123.56,80.07" stroke="hsl(var(--accent))" strokeWidth="1.5" className="hero-svg-path" style={{ strokeDasharray: 4265, strokeDashoffset: 4265, animationDelay: "1s" }} />
        </svg>
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-accent text-xs font-medium uppercase tracking-[0.3em] mb-8">
          {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.65 }} className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.98] tracking-normal max-w-6xl mb-10">
          {title}
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="max-w-3xl">
          <div className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed space-y-4">{children}</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mt-9">
            <ArrowLink href="mailto:clint@kri8it.com">Talk through your business challenge</ArrowLink>
            <Button asChild variant="editorialLink" className="h-auto min-h-12 px-5 py-4 whitespace-normal text-left"><Link to={secondaryTo}>{secondaryLabel}<ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          {supportingLine && <p className="mt-10 pt-6 border-t border-muted-foreground/20 text-sm text-[#F2F2F2]/60 max-w-2xl">{supportingLine}</p>}
        </motion.div>
      </div>

      {showClients && (
        <>
          <ClientMarquee />
          <div className="pb-16" />
        </>
      )}
    </section>
  );
}

export function InvitationSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none"><circle cx="400" cy="0" r="300" stroke="hsl(var(--muted-foreground))" /><circle cx="400" cy="0" r="200" stroke="hsl(var(--muted-foreground))" /></svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 300 300" fill="none"><circle cx="0" cy="300" r="250" stroke="hsl(var(--muted-foreground))" /></svg>
      </div>
      <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-normal mb-7 max-w-5xl">{title}</h2>
        <div className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed max-w-3xl space-y-4 mb-9">{children}</div>
        <ArrowLink href="mailto:clint@kri8it.com">Talk through your business challenge</ArrowLink>
      </motion.div>
    </section>
  );
}

export const lightSectionHeading = "font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-normal text-[hsl(230,40%,15%)]";
export const darkSectionHeading = "font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-normal text-foreground";
export const lightBody = "text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed";
export const darkBody = "text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed";
