import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, Globe, Palette, TrendingUp, Settings, ArrowRight } from "lucide-react";

const serviceBlocks = [
  {
    icon: Compass,
    title: "Strategy",
    subtitle: "Clear direction before work begins",
    description: "We help businesses make informed decisions before anything is built. Our strategy work focuses on understanding the business, its customers, and its goals, creating clear direction for planning, delivery, and growth.",
    items: ["Marketing strategy", "Campaign planning", "Content strategy", "Customer journey mapping", "Conversion optimisation", "Research and analysis"],
  },
  {
    icon: Palette,
    title: "Design",
    subtitle: "Clear, usable digital experiences",
    description: "We design brands and digital experiences that are clear, consistent, and easy to use. Our design work focuses on structure and usability across every touchpoint, from brand systems to digital interfaces.",
    items: ["Brand identity", "UX & UI design", "Creative direction", "Visual design", "Web and content design"],
  },
  {
    icon: Globe,
    title: "Development",
    subtitle: "Stable platforms built to last",
    description: "We build digital platforms that are stable, secure, and scalable. Our development work covers websites, e-commerce, and digital platforms, with a focus on performance, reliability, and long-term maintainability.",
    items: ["Website design & development", "WordPress development", "E-commerce", "Mobile-first builds", "UX implementation", "Technical foundations"],
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    subtitle: "Attract, convert, and measure",
    description: "We help businesses attract, reach, and convert customers through considered marketing activity. Our work combines organic and paid channels, with a focus on steady performance, measurable outcomes, and clear reporting.",
    items: ["Organic SEO", "Paid search", "Paid social", "Content marketing", "Email campaigns", "Conversion rate optimisation", "Reporting & analytics"],
  },
  {
    icon: Settings,
    title: "Systems & Automation",
    subtitle: "Connected systems that reduce friction",
    description: "We connect marketing and sales systems so they work together. This includes CRM setup, automation, and reporting that reduce manual effort and improve follow-up, visibility, and consistency. Automation and applied intelligence are delivered through AutomAi8.",
    items: ["CRM setup", "Lead workflows", "Marketing automation", "Reporting", "Conversion tracking", "System integrations"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8">
              What we <span className="text-accent">do.</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Kri8it works with businesses to plan and deliver digital work across strategy, design, development, and marketing, supported by AutomAi8, our applied intelligence and automation capability. Each service can be delivered independently. They are most effective when connected.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks */}
      {serviceBlocks.map((service, idx) => (
        <section key={service.title} className={`section-padding ${idx % 2 === 0 ? "bg-secondary" : ""}`}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <service.icon className="text-accent" size={22} />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold">{service.title}</h2>
              </div>
              <p className="text-xl text-accent font-semibold mb-6">{service.subtitle}</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.description}</p>
              <div>
                <p className="text-foreground font-bold mb-3">Services include:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Let's Talk */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Let's <span className="text-accent">Talk.</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              If you're looking for a digital partner to plan and deliver digital work across strategy, design, development, and marketing, we'd be happy to talk.
            </p>
            <a
              href="mailto:clint@kri8it.com"
              className="inline-flex items-center gap-4 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-foreground/10">
                <ArrowRight size={16} />
              </span>
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
