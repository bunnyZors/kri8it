import { motion } from "framer-motion";

const cards = [
  {
    prefix: "KRI",
    highlight: "8",
    suffix: "IT",
    highlightColor: "text-accent",
    description:
      "Strategy, brand, and digital foundations that shape how customers experience your business.",
  },
  {
    prefix: "Autom",
    highlight: "Ai8",
    suffix: "",
    highlightColor: "text-orange-500",
    description:
      "Sales and marketing automation that brings together customer conversations, reputation signals, and attribution, from first contact through to follow-up.",
  },
  {
    prefix: "Integr",
    highlight: "Ai8",
    suffix: "",
    highlightColor: "text-purple-500",
    description:
      "Connects platforms and workflows so data moves reliably across the business, underpinning both Kri8it and AutomAi8.",
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
            Where intelligence meets
            <br />
            <span className="text-accent">seamless execution.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.prefix + card.highlight}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-muted-foreground/15 bg-muted/30 p-10 md:p-12 text-center flex flex-col items-center"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-tight">
                {card.prefix}
                <span className={card.highlightColor}>{card.highlight}</span>
                {card.suffix}
                <span className={card.highlightColor}>.</span>
              </h3>
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
