import { motion } from "framer-motion";

const stages = ["Awareness", "Engagement", "Conversion", "Retention"];

export default function HowWeWorkSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.1]">
              We approach digital work as a{" "}
              <span className="text-accent">connected system.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every engagement is designed around the full customer journey:
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {stages.map((stage, i) => (
                <span key={stage} className="flex items-center gap-3">
                  <span className="text-foreground font-bold text-lg">{stage}</span>
                  {i < stages.length - 1 && (
                    <span className="text-accent text-xl">→</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Strategy, creative, digital, marketing, and systems all play a role. When they work together, customers experience a consistent digital brand, while teams can focus on growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
