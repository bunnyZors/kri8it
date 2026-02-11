import { motion } from "framer-motion";
import { Compass, Globe, Palette, TrendingUp, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategy",
    description: "Brand, digital, growth, content, and customer journey planning.",
    span: "md:col-span-2",
  },
  {
    icon: Globe,
    title: "Web & Digital",
    description: "WordPress, e-commerce, mobile-first design, and technical foundations.",
    span: "",
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    description: "Brand identity, UX/UI, content, copy, and visual systems.",
    span: "",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "SEO, paid search, paid social, CRO, and performance reporting.",
    span: "",
  },
  {
    icon: Settings,
    title: "Systems & Integration",
    description: "CRM setup, automation, lead workflows, email systems, and platform integrations.",
    span: "",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-xl">
            A focused set of services designed for{" "}
            <span className="text-accent">ambitious growth.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glow-card p-8 group cursor-pointer ${service.span}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <service.icon className="text-accent" size={22} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
