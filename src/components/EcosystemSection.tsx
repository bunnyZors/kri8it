import { motion } from "framer-motion";
import kri8itLogo from "@/assets/logos/kri8it-logo-white.png";
import automai8Logo from "@/assets/logos/automai8-logo-white.png";
import integrai8Logo from "@/assets/logos/integrai8-logo-white.png";

const cards = [
  {
    logo: kri8itLogo,
    alt: "Kri8it",
    description:
      "Strategy, brand, and digital foundations that shape how customers experience your business.",
  },
  {
    logo: automai8Logo,
    alt: "AutomAi8",
    description:
      "Sales and marketing automation that brings together customer conversations, reputation signals, and attribution.",
  },
  {
    logo: integrai8Logo,
    alt: "IntegrAi8",
    description:
      "Connects platforms and workflows so data moves reliably across the business.",
  },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-padding bg-[hsl(230,30%,8%)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Systems &amp; Automation
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight">
            Where intelligence meets{" "}
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
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-muted-foreground/15 bg-muted/30 p-10 md:p-12 text-center flex flex-col items-center hover:border-muted-foreground/30 transition-colors"
            >
              <div className="h-16 md:h-20 w-full flex items-center justify-center mb-10">
                <img
                  src={card.logo}
                  alt={card.alt}
                  className="max-h-full max-w-[200px] w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-auto">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
