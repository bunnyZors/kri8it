import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Compass, TrendingUp, Settings, Wrench, Palette, Zap } from "lucide-react";

const serviceBlocks = [
  {
    icon: Monitor,
    category: "Convert Intent into Action",
    title: "Automotive Websites & Platforms",
    description: "We design and build mobile-first websites structured around inventory, services, and enquiries — making it easier for customers to act and teams to respond.",
    items: ["Inventory integrations", "Model and offer pages", "Trade-in and finance enquiry flows", "CRM handover and tracking"],
  },
  {
    icon: Compass,
    category: "Align Sales, Marketing & Systems",
    title: "Digital Strategy for Dealerships",
    description: "We plan digital work around how dealerships actually sell and service vehicles — connecting customer journeys, marketing channels, and internal workflows early.",
    items: ["Customer journey mapping", "Multi-channel planning", "Lead flow design", "Platform and integration scoping"],
  },
  {
    icon: TrendingUp,
    category: "Capture Demand at the Right Moment",
    title: "Search & Paid Media",
    description: "We drive high-intent traffic through organic and paid channels, with a strong focus on local visibility and enquiry quality.",
    items: ["Organic SEO", "Local and geo-targeted campaigns", "Paid media landing pages", "Ongoing optimisation and reporting"],
  },
  {
    icon: Wrench,
    category: "Keep Service Moving",
    title: "Service Booking & Workflow Automation",
    description: "We build and connect service booking systems that reduce administrative load and improve follow-up — helping teams operate with greater consistency.",
    items: ["Online booking tools", "Automated confirmations and reminders", "Integration with internal systems", "Reporting on booking activity"],
  },
  {
    icon: Settings,
    category: "Strengthen Follow-Through",
    title: "Lead Management & CRM Integration",
    description: "We connect lead capture, routing, follow-up, and reporting so automotive teams maintain visibility across every enquiry.",
    items: ["CRM setup and configuration", "Lead routing and tracking", "Automated follow-up workflows", "Sales and marketing reporting"],
  },
  {
    icon: Palette,
    category: "Reinforce the Brand at Every Touchpoint",
    title: "Brand & Visual Identity",
    description: "We support automotive brands with consistent visual systems that carry through digital platforms and in-dealership environments.",
    items: ["Brand and CI systems", "Digital design templates", "Website and campaign visuals"],
  },
];

export default function Automotive() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Automotive</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Accelerate What <span className="text-accent">Matters.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-semibold mb-8">
              Digital platforms and systems built for modern automotive businesses.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed space-y-4"
          >
            <p>The automotive sector moves quickly. Customers expect clarity, speed, and consistent follow-through. Digital platforms must support sales, servicing, and marketing at the same time — without creating friction for teams.</p>
            <p>Kri8it works with dealerships, automotive brands, and service centres to design and deliver digital systems that keep momentum moving. We focus on visibility, lead handling, service workflows, and the infrastructure that connects it all.</p>
            <p>With over 25 years of experience in the sector, we help automotive teams move forward with structure — from day one and over time.</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
              What We Do in <span className="text-accent">Automotive.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {serviceBlocks.map((block, idx) => (
        <section key={block.title} className={`section-padding ${idx % 2 === 0 ? "" : "bg-secondary"}`}>
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <block.icon className="text-accent" size={20} />
                </div>
                <p className="text-accent text-sm font-bold uppercase tracking-[0.15em]">{block.category}</p>
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold mb-4">{block.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{block.description}</p>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Proven Experience */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Proven Automotive <span className="text-accent">Experience.</span></h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>We've partnered with automotive groups and dealerships to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Modernise inventory-driven platforms</li>
                <li>Connect CRM and lead workflows</li>
                <li>Launch service booking systems with automation</li>
                <li>Standardise digital across multi-location networks</li>
              </ul>
              <p>Detailed case studies available on request.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automation */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-accent" size={24} />
              <h2 className="text-3xl md:text-5xl font-extrabold">Automation That Keeps <span className="text-accent">Pace.</span></h2>
            </div>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>Automotive sales and servicing rely on timely response and consistent communication.</p>
              <p>Through AutomAi8, we support automotive businesses with applied intelligence that connects lead handling, service reminders, and customer communication across the funnel. IntegrAi8 ensures systems and data move reliably across platforms.</p>
              <p>The result: stronger visibility, faster follow-through, and operational stability as the business grows.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Let's Talk */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Let's <span className="text-accent">Talk.</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              If you're ready to accelerate visibility, strengthen follow-through, and build digital systems that keep your dealership moving forward, we'd be happy to start the conversation.
            </p>
            <a
              href="mailto:clint@kri8it.com"
              className="inline-flex items-center gap-4 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-foreground/10">
                <ArrowRight size={16} />
              </span>
              Book a Discovery Call
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
