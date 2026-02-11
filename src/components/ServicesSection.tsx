import { motion } from "framer-motion";
import { Compass, Globe, Palette, TrendingUp, Settings, ArrowUpRight, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategy",
    description: "Brand, digital, growth, content, and customer journey planning that drives long-term transformative growth.",
  },
  {
    icon: Globe,
    title: "Web & Digital",
    description: "WordPress, e-commerce, mobile-first design, and technical foundations that connect brand and performance.",
  },
  {
    icon: Palette,
    title: "Creative",
    description: "Brand identity, UX/UI, content, copy, and visual systems that expand how people experience your brand.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    description: "SEO, paid search, paid social, CRO, and reporting across paid, earned, and owned channels.",
  },
  {
    icon: Settings,
    title: "Systems",
    description: "CRM setup, automation, lead workflows, email systems, and platform integrations that fuel better decisions.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header with left text + right service cards */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Digital Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] uppercase mb-6">
              Move first, move fast, & move with confidence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Get access to comprehensive capabilities without sacrificing flexibility or personalised service.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Work with a fully integrated digital team across strategy, digital, creative, marketing, and data that's already thinking five moves ahead.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
            >
              Explore Our Capabilities
              <ChevronRight size={16} />
            </a>
          </motion.div>

          {/* Right column - service cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ArrowUpRight
                    size={28}
                    className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                  <h3 className="text-lg font-extrabold group-hover:text-accent transition-colors">
                    {service.title}
                    <ChevronRight size={14} className="inline ml-1" />
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
