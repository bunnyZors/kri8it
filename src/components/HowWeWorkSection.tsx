import { motion } from "framer-motion";
import { Lightbulb, MousePointerClick, Users, Handshake, ArrowRight } from "lucide-react";

const steps = [
  { icon: Lightbulb, label: "Awareness" },
  { icon: MousePointerClick, label: "Engagement" },
  { icon: Users, label: "Conversion" },
  { icon: Handshake, label: "Retention" },
];

export default function HowWeWorkSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            How we <span className="text-accent italic">work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
            We approach digital work as a connected system. Every engagement is
            designed around the full customer journey:
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
                  <step.icon className="text-accent" size={28} />
                </div>
                <span className="text-sm font-semibold">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="text-muted-foreground hidden md:block mx-4" size={20} />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed"
        >
          Strategy, creative, digital, marketing, and systems all play a role. When they work
          together, customers move more easily and teams spend less time fixing gaps.
        </motion.p>
      </div>
    </section>
  );
}
