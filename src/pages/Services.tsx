import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import strategyVisual from "@/assets/services/strategy-visual.png";
import designVisual from "@/assets/services/design-visual.png";
import developmentVisual from "@/assets/services/development-visual.png";
import marketingVisual from "@/assets/services/marketing-visual.png";
import systemsVisual from "@/assets/services/systems-visual.png";

const serviceBlocks = [
  {
    num: "01",
    title: "Strategy",
    subtitle: "Clear direction before work begins",
    description:
      "We help businesses make informed decisions before anything is built. Our strategy work focuses on understanding the business, its customers, and its goals — creating clear direction for planning, delivery, and growth.",
    items: [
      "Marketing strategy",
      "Campaign planning",
      "Content strategy",
      "Customer journey mapping",
      "Conversion optimisation",
      "Research and analysis",
    ],
    visual: strategyVisual,
    dark: true,
  },
  {
    num: "02",
    title: "Design",
    subtitle: "Clear, usable digital experiences",
    description:
      "We design brands and digital experiences that are clear, consistent, and easy to use. Our design work focuses on structure and usability across every touchpoint, from brand systems to digital interfaces.",
    items: [
      "Brand identity",
      "UX & UI design",
      "Creative direction",
      "Visual design",
      "Web and content design",
    ],
    visual: designVisual,
    dark: false,
  },
  {
    num: "03",
    title: "Development",
    subtitle: "Stable platforms built to last",
    description:
      "We build digital platforms that are stable, secure, and scalable. Our development work covers websites, e-commerce, and digital platforms — with a focus on performance, reliability, and long-term maintainability.",
    items: [
      "Website design & development",
      "WordPress development",
      "E-commerce",
      "Mobile-first builds",
      "UX implementation",
      "Technical foundations",
    ],
    visual: developmentVisual,
    dark: true,
  },
  {
    num: "04",
    title: "Performance Marketing",
    subtitle: "Attract, convert, and measure",
    description:
      "We help businesses attract, reach, and convert customers through considered marketing activity. Our work combines organic and paid channels, with a focus on steady performance, measurable outcomes, and clear reporting.",
    items: [
      "Organic SEO",
      "Paid search",
      "Paid social",
      "Content marketing",
      "Email campaigns",
      "Conversion rate optimisation",
      "Reporting & analytics",
    ],
    visual: marketingVisual,
    dark: false,
  },
  {
    num: "05",
    title: "Systems & Automation",
    subtitle: "Connected systems that reduce friction",
    description:
      "We connect marketing and sales systems so they work together. This includes CRM setup, automation, and reporting that reduce manual effort and improve follow-up, visibility, and consistency.",
    items: [
      "CRM setup",
      "Lead workflows",
      "Marketing automation",
      "Reporting",
      "Conversion tracking",
      "System integrations",
    ],
    visual: systemsVisual,
    dark: true,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
        {/* Decorative arcs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
          <svg viewBox="0 0 500 500" fill="none">
            <circle cx="500" cy="0" r="400" stroke="hsl(var(--accent))" strokeWidth="1" />
            <circle cx="500" cy="0" r="280" stroke="hsl(var(--accent))" strokeWidth="1" />
            <circle cx="500" cy="0" r="160" stroke="hsl(var(--accent))" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-xs font-medium uppercase tracking-[0.3em] mb-8"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight mb-10 max-w-5xl"
          >
            What we <span className="text-accent">do.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed max-w-2xl mb-12"
          >
            Kri8it works with businesses to plan and deliver digital work across
            strategy, design, development, and marketing — supported by AutomAi8, our
            applied intelligence and automation capability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-foreground font-bold text-sm md:text-base"
          >
            Each service can be delivered independently. They are most effective when connected.
          </motion.p>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </section>

      {/* Service Blocks */}
      {serviceBlocks.map((service, idx) => {
        const isDark = service.dark;
        const isEvenLayout = idx % 2 === 0;

        return (
          <section
            key={service.title}
            className="relative overflow-hidden"
            style={{
              background: isDark ? "hsl(240, 60%, 7%)" : "#F5F5F5",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44">
              <div
                className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                  isEvenLayout ? "" : "lg:[direction:rtl]"
                }`}
              >
                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEvenLayout ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:[direction:ltr]"
                >
                  {/* Number + Title */}
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className={`font-display text-sm font-medium tracking-[0.2em] ${
                        isDark ? "text-accent" : "text-accent"
                      }`}
                    >
                      {service.num}
                    </span>
                  </div>
                  <h2
                    className={`font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-3 ${
                      isDark ? "text-foreground" : "text-[hsl(230,40%,15%)]"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`text-lg font-semibold mb-6 ${
                      isDark ? "text-accent" : "text-accent"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-10 ${
                      isDark ? "text-[#F2F2F2]/70" : "text-[hsl(230,10%,45%)]"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Service items */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span
                          className={`text-sm ${
                            isDark ? "text-[#F2F2F2]/60" : "text-[hsl(230,10%,45%)]"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Visual Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative lg:[direction:ltr]"
                >
                  <div
                    className={`rounded-2xl overflow-hidden border ${
                      isDark
                        ? "border-[hsl(var(--border))] shadow-[0_0_60px_-15px_hsl(var(--accent)/0.15)]"
                        : "border-[hsl(230,10%,85%)] shadow-xl"
                    }`}
                  >
                    <img
                      src={service.visual}
                      alt={`${service.title} visual`}
                      className="w-full h-auto object-cover aspect-[5/4]"
                    />
                  </div>
                  {/* Floating accent element */}
                  {isDark && (
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-accent/20 pointer-events-none" />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Divider line */}
            <div
              className={`h-px w-full ${
                isDark ? "bg-border/30" : "bg-[hsl(230,10%,85%)]"
              }`}
            />
          </section>
        );
      })}

      {/* Let's Talk CTA */}
      <section className="relative section-padding overflow-hidden">
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

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#F2F2F2]/70 text-sm uppercase tracking-[0.25em] mb-6">
              Let's Talk
            </p>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-10">
              Ready to build a{" "}
              <span className="text-accent">digital system</span> that actually
              works for your business?
            </h2>
            <a
              href="mailto:clint@kri8it.com"
              className="inline-flex items-center gap-4 group"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
                <ArrowRight size={22} />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                Start Your Journey
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
