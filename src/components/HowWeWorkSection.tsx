import { motion } from "framer-motion";
import { Layers, Brain, TrendingUp, ChevronRight } from "lucide-react";

const values = [
  {
    icon: Layers,
    title: "Built for brands that refuse to stand still",
    description:
      "Make bold moves with purpose by connecting brand strategy, digital execution, and system design to drive sustainable growth.",
  },
  {
    icon: Brain,
    title: "Intelligence that goes way beyond tech",
    description:
      "We augment our approach with smart automation and integration, so your platforms and workflows work harder together.",
  },
  {
    icon: TrendingUp,
    title: "Performance you can count on at every stage",
    description:
      "From awareness to retention, every part of the customer journey is measured, optimised, and connected to real outcomes.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Top split */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.1] uppercase">
              Never settle for the status quo
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Work with a full-service digital partner that empowers you to punch above your weight
              by supercharging expert strategy across brand, digital, and systems with 25 years of
              experience, turning bold ambition into meaningful business outcomes.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors border-b-2 border-accent pb-1"
            >
              Talk to our experts
              <ChevronRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* 3 value props */}
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <val.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-extrabold mb-3 leading-tight">{val.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
