import { motion } from "framer-motion";
import { Layers, Zap, Link2 } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Kri8it",
    highlight: "8",
    description:
      "Strategy, brand, and digital foundations that shape how customers experience your business.",
  },
  {
    icon: Zap,
    title: "AutomAi8",
    highlight: "Ai8",
    description:
      "Sales and marketing automation that brings together customer conversations, reputation signals, and attribution.",
  },
  {
    icon: Link2,
    title: "IntegrAi8",
    highlight: "Ai8",
    description:
      "Connects platforms and workflows so data moves reliably across the business.",
  },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Systems & Automation
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
            Where intelligence meets
            <br />
            <span className="text-accent">seamless execution.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glow-card p-8 md:p-10 text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-muted mb-6 group-hover:bg-accent/10 transition-colors">
                <card.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                {card.title.replace(card.highlight, "")}
                <span className="text-accent">{card.highlight}</span>
                <span className="text-accent">.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
