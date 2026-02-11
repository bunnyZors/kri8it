import { motion } from "framer-motion";
import { Compass, Globe, Palette, TrendingUp, Settings, ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web & Digital Experience",
    description: "WordPress web design, websites, e-commerce, mobile-first design, and technical foundations.",
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    description: "Brand identity, UX/UI, content, copy, and visual systems.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "SEO, paid search, paid social, CRO, and performance reporting.",
  },
  {
    icon: Settings,
    title: "Systems & Integration",
    description: "CRM setup, automation, lead workflows, email systems, and platform integrations.",
  },
  {
    icon: Compass,
    title: "Strategy",
    description: "Brand, digital, growth, content, and customer journey planning.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6">
              We offer a focused set of services designed to support{" "}
              <span className="text-accent">ambitious growth</span> at every stage.
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
            >
              View All Services
              <ChevronRight size={16} />
            </Link>
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
