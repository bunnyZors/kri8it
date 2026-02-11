import { motion } from "framer-motion";
import { Brain, MousePointerClick, Filter, HandHelping, ArrowRight } from "lucide-react";

const stages = [
  { label: "Awareness", icon: Brain },
  { label: "Engagement", icon: MousePointerClick },
  { label: "Conversion", icon: Filter },
  { label: "Retention", icon: HandHelping },
];

export default function HowWeWorkSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-[900] leading-[1.05] mb-6"
        >
          How we <span className="text-accent italic">work</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16"
        >
          We approach digital work as a connected system. Every engagement
          is designed around the full customer journey:
        </motion.p>

        {/* Stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-16"
        >
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-4">
                <stage.icon className="w-16 h-16 md:w-20 md:h-20 text-foreground stroke-[1]" />
                <span className="text-foreground font-display font-bold text-lg md:text-xl">
                  {stage.label}
                </span>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
        >
          Strategy, creative, digital, marketing, and systems all play a role. When they work together,
          customers move more easily and teams spend less time fixing gaps.
        </motion.p>
      </div>
    </section>
  );
}
