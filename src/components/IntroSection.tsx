import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            Kri8it is a full-service digital agency and long-term digital partner with over 25 years of experience.
          </p>
          <p>
            We work in close partnership with growing businesses to shape their brand, digital platforms, and systems, supporting how those businesses operate in practice, not just how they present themselves.
          </p>
          <p>
            Our role is to define direction, build what's needed, and stay accountable for how it performs as the business moves forward and grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
