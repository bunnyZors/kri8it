import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Strategy & Planning",
    description: "Brand, digital, growth, content, and customer journey planning.",
  },
  {
    title: "Branding & Creative",
    description: "Brand identity, UX/UI, content, copy, and visual systems.",
  },
  {
    title: "Web & Digital Experience",
    description: "WordPress websites, e-commerce, custom development, and technical foundations.",
  },
  {
    title: "Performance Marketing",
    description: "Organic SEO, paid search, paid social, CRO, and reporting.",
  },
  {
    title: "Systems & Integration",
    description: "CRM setup, automation, lead workflows, email systems, and platform integrations.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[hsl(230,10%,60%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
              Our Services
            </p>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)] pr-8 lg:pr-16">
              We offer a focused set of services that work best when{" "}
              <span className="text-[#049AD9]">connected</span>.
            </h2>
          </motion.div>

          {/* Right column - service list */}
          <div className="flex flex-col">
            {services.map((service, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="py-10 grid sm:grid-cols-[1fr_1.2fr] gap-4 sm:gap-8 items-start">
                    <motion.h3
                      className="font-display text-xl md:text-2xl font-medium text-[hsl(230,40%,15%)] transition-colors duration-300"
                      animate={{
                        color: isActive ? "hsl(211, 100%, 48%)" : "hsl(230, 40%, 15%)",
                        x: isActive ? 8 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm md:text-base leading-relaxed"
                      animate={{
                        opacity: isActive ? 1 : 0.55,
                        x: isActive ? 4 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ color: "hsl(230, 10%, 55%)" }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                  <div className="h-px w-full bg-[hsl(230,10%,85%)] relative overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#049AD9]"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
