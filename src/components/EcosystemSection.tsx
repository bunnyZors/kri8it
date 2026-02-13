import { motion } from "framer-motion";
import kri8itLogo from "@/assets/logos/kri8it-logo-white.png";
import automai8Logo from "@/assets/logos/automai8-logo-white.png";
import integrai8Logo from "@/assets/logos/integrai8-logo-white.png";

const cards = [
  {
    logo: kri8itLogo,
    alt: "Kri8it",
    logoClass: "max-h-[48px] md:max-h-[56px]",
    description:
      "Strategy, brand, and digital foundations that shape how customers experience your business.",
  },
  {
    logo: automai8Logo,
    alt: "AutomAi8",
    logoClass: "max-h-[52px] md:max-h-[64px]",
    description:
      "Sales and marketing automation that brings together customer conversations, reputation signals, and attribution.",
  },
  {
    logo: integrai8Logo,
    alt: "IntegrAi8",
    logoClass: "max-h-[40px] md:max-h-[48px]",
    description:
      "Connects platforms and workflows so data moves reliably across the business.",
  },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative section-padding bg-background overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#F2F2F2]/70 text-sm font-medium uppercase tracking-[0.25em] mb-6">
            Systems &amp; Automation
          </p>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Where intelligence meets<br />
            <span className="text-[#049AD9]">seamless execution</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-muted-foreground/15 bg-transparent p-10 md:p-12 text-center flex flex-col items-center cursor-pointer group hover:border-[#049AD9]/40 hover:shadow-[0_0_40px_-10px_rgba(0,229,227,0.15)] transition-all duration-500"
            >
              <div className="h-16 md:h-20 w-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <img
                  src={card.logo}
                  alt={card.alt}
                  className={`${card.logoClass} w-auto object-contain`}
                />
              </div>
              <p className="text-[#F2F2F2]/70 leading-relaxed text-sm md:text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
