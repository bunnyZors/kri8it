import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Palette, Globe, Settings, Zap, TrendingUp, Search } from "lucide-react";

const serviceBlocks = [
  {
    icon: Compass,
    category: "Shape the Journey Early",
    title: "Brand Strategy & Digital Planning",
    description: "We help travel brands define how they show up and how customers move from discovery to decision — aligning marketing, messaging, and systems from the outset.",
    items: ["Brand positioning", "Customer journey planning", "Channel and campaign planning", "Platform and integration scoping"],
  },
  {
    icon: Palette,
    category: "Make Exploration Effortless",
    title: "Digital Design",
    description: "We design clear, mobile-first experiences that support research, comparison, and confident booking decisions.",
    items: ["UX and UI design", "Content structure", "Mobile-first layouts", "Conversion-focused page design"],
  },
  {
    icon: Globe,
    category: "Build Platforms That Convert",
    title: "Website & Platform Development",
    description: "We build fast, stable digital platforms that support content depth, enquiry flow, and booking confidence.",
    items: ["Website design and development", "Custom itinerary structures", "Booking and enquiry flows", "CRM integration"],
  },
  {
    icon: Settings,
    category: "Strengthen Enquiry & Booking Flow",
    title: "Lead Management & Booking Systems",
    description: "We reduce friction across enquiry and booking journeys — improving follow-up, clarity, and internal visibility.",
    items: ["CRM setup", "Lead capture and routing", "Email workflows", "Booking and enquiry tracking"],
  },
  {
    icon: Zap,
    category: "Maintain Momentum Across the Funnel",
    title: "Systems & Automation",
    description: "Travel relies on consistent communication across longer journeys. Through AutomAi8, we support enquiry handling, booking follow-ups, pre-trip communication, and post-travel engagement. IntegrAi8 ensures systems and data remain aligned behind the scenes.",
    items: [],
  },
  {
    icon: Search,
    category: "Increase Visibility Where It Matters",
    title: "Content & Search",
    description: "We support travel brands with content and search strategies that improve discoverability and support informed decision-making.",
    items: ["SEO strategy", "Destination and experience content", "Campaign landing pages", "Performance reporting"],
  },
];

const results = [
  { title: "Direct booking optimisation", detail: "Visual identity refresh and booking UX improvements. 40% increase in direct bookings within three months." },
  { title: "International visibility growth", detail: "Mobile-first redesign with integrated media and SEO improvements. Improved organic visibility and broader international reach." },
  { title: "Campaign-led demand generation", detail: "Multi-channel campaign using paid social and targeted landing pages. Reached over 200,000 high-intent travellers." },
];

export default function TravelTourism() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Travel &amp; Tourism</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Turn Interest into <span className="text-accent">Bookings.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-semibold mb-8">
              Digital platforms built for how travel businesses grow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed space-y-4"
          >
            <p>Travel decisions unfold over time. Customers explore, compare, return, and ask questions before committing. Digital platforms must support that journey — while keeping enquiries, bookings, and follow-up moving behind the scenes.</p>
            <p>Kri8it works with travel and tourism businesses to design and deliver digital systems that support both demand generation and operational flow. Our work strengthens visibility, sharpens booking journeys, and connects the systems that keep momentum moving across seasons.</p>
            <p>With 25 years of experience in travel and tourism, we understand the commercial pressures, timing realities, and operational complexity behind every booking.</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
              What We Do in <span className="text-accent">Travel &amp; Tourism.</span>
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
              {block.items.length > 0 && (
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Who We Work With */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Who We <span className="text-accent">Work With.</span></h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>We work with travel and tourism businesses across the spectrum — from boutique lodges and operators to global travel brands.</p>
              <p>Our experience spans safari, eco-tourism, luxury travel, adventure travel, and destination-led businesses. We build digital foundations that support both storytelling and operational precision.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Results */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-10">Selected <span className="text-accent">Results.</span></h2>
            <div className="grid gap-8">
              {results.map((r) => (
                <div key={r.title} className="glow-card p-6 md:p-8">
                  <h3 className="text-xl font-extrabold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.detail}</p>
                </div>
              ))}
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
              If you're looking to strengthen visibility, sharpen booking journeys, and build digital systems that support growth across seasons, we'd be happy to start the conversation.
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
