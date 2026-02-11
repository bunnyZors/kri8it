import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="section-padding" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Large heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-[800] leading-[1.1] tracking-[0.04em] mb-16 max-w-5xl text-[hsl(230,40%,15%)]"
        >
          Kri8it is a digital and brand partner with over{" "}
          <span className="text-[#049AD9] whitespace-nowrap">25 years of experience</span>.
        </motion.h2>

        {/* Bottom row: CTA left, text right */}
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="#contact"
            className="inline-flex items-center gap-5 group w-fit"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(230,40%,15%)] text-white group-hover:scale-110 transition-transform">
              <ArrowRight size={22} />
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[hsl(230,40%,15%)]">
              Start Your Journey
            </span>
          </motion.a>

          {/* Right column text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed mb-6">
              We work with businesses that want their digital presence to support how they
              actually operate, not just how they appear. Our role is to help define direction,
              build what's needed, and stay involved long enough to ensure it works.
            </p>
            <p className="text-[hsl(230,40%,15%)] font-bold text-base md:text-lg">
              We focus on long-term partnerships, not one-off projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
