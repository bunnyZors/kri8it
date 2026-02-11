import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Decorative arcs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="400" cy="0" r="300" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
          <circle cx="400" cy="0" r="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none">
          <circle cx="0" cy="300" r="250" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#F2F2F2]/70 text-sm uppercase tracking-[0.2em] mb-6">
            Let's Talk
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight mb-10">
            We work best with businesses that value{" "}
            <span className="text-[#049AD9]">long-term partnership</span> and want
            digital systems that support growth over time. If that sounds like you,{" "}
            <span className="text-[#049AD9]">let's talk.</span>
          </h2>
          <a
            href="mailto:clint@kri8it.com"
            className="inline-flex items-center gap-4 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-foreground/10">
              <ArrowRight size={16} />
            </span>
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
