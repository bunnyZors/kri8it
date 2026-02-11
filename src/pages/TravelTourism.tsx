import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const serviceBlocks = [
  {
    num: "01",
    category: "Shape the Journey Early",
    title: "Brand Strategy & Digital Planning",
    description:
      "We help travel brands define how they show up and how customers move from discovery to decision — aligning marketing, messaging, and systems from the outset.",
    items: [
      "Brand positioning",
      "Customer journey planning",
      "Channel and campaign planning",
      "Platform and integration scoping",
    ],
  },
  {
    num: "02",
    category: "Make Exploration Effortless",
    title: "Digital Design",
    description:
      "We design clear, mobile-first experiences that support research, comparison, and confident booking decisions.",
    items: [
      "UX and UI design",
      "Content structure",
      "Mobile-first layouts",
      "Conversion-focused page design",
    ],
  },
  {
    num: "03",
    category: "Build Platforms That Convert",
    title: "Website & Platform Development",
    description:
      "We build fast, stable digital platforms that support content depth, enquiry flow, and booking confidence.",
    items: [
      "Website design and development",
      "Custom itinerary structures",
      "Booking and enquiry flows",
      "CRM integration",
    ],
  },
  {
    num: "04",
    category: "Strengthen Enquiry & Booking Flow",
    title: "Lead Management & Booking Systems",
    description:
      "We reduce friction across enquiry and booking journeys — improving follow-up, clarity, and internal visibility.",
    items: [
      "CRM setup",
      "Lead capture and routing",
      "Email workflows",
      "Booking and enquiry tracking",
    ],
  },
  {
    num: "05",
    category: "Maintain Momentum Across the Funnel",
    title: "Systems & Automation",
    description:
      "Travel relies on consistent communication across longer journeys. Through AutomAi8, we support enquiry handling, booking follow-ups, pre-trip communication, and post-travel engagement. IntegrAi8 ensures systems and data remain aligned behind the scenes.",
    items: [],
  },
  {
    num: "06",
    category: "Increase Visibility Where It Matters",
    title: "Content & Search",
    description:
      "We support travel brands with content and search strategies that improve discoverability and support informed decision-making.",
    items: [
      "SEO strategy",
      "Destination and experience content",
      "Campaign landing pages",
      "Performance reporting",
    ],
  },
];

const results = [
  {
    title: "Direct booking optimisation",
    detail:
      "Visual identity refresh and booking UX improvements. 40% increase in direct bookings within three months.",
  },
  {
    title: "International visibility growth",
    detail:
      "Mobile-first redesign with integrated media and SEO improvements. Improved organic visibility and broader international reach.",
  },
  {
    title: "Campaign-led demand generation",
    detail:
      "Multi-channel campaign using paid social and targeted landing pages. Reached over 200,000 high-intent travellers.",
  },
];

const sectors = [
  "Safari & Eco-Tourism",
  "Luxury Travel",
  "Adventure Travel",
  "Destination Marketing",
  "Boutique Lodges",
  "Tour Operators",
];

export default function TravelTourism() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero - matches homepage/about hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
        <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1474 1119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 bottom-0 w-[55%] h-auto opacity-40"
          >
            <path
              d="M.5,1118.81c7.16-197.99,130.53-379,317.92-456.35.22.84.54,2.06.93,3.55,6.13,22.92,28.6,86.14,62.22,143.23,41.07,69.74,93.26,113.16,91.02,113.72-4.21,1.06-.14.04-19.31,5.18-93.19,24.99-150,103.46-157.02,190.66"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              fill="none"
              className="hero-svg-path"
              style={{ strokeDasharray: 1178, strokeDashoffset: 1178 }}
            />
            <path
              d="M1473.76,654.49c-10.93,1.19-21.9,3.23-32.85,6.17-35.47,9.51-67.67,30.81-67.67,30.81-49.61,34.17-88.1,82.15-110.68,138-6.51,19.28-13.02,38.55-19.52,57.83l-244.7-138.59-16.4-9.28,47.09-81.08.92.53c61.42-133.4,181.62-242.19,334.55-283.19,36.45-9.77,73.04-15.36,109.25-17.04"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              fill="none"
              className="hero-svg-path"
              style={{ strokeDasharray: 1307, strokeDashoffset: 1307, animationDelay: "0.5s" }}
            />
            <path
              d="M903.48,1118.8l-163.55-93.48-81.08-47.09c-34.86-22.06-69.72-44.11-104.59-66.16-45.03-35.57-83.69-78.53-114.33-127.05,0,0-41.14-65.74-61.09-140.15C305.66,371.9,467.65,91.27,740.62,18.09c251.13-67.33,508.73,64.33,605.33,298.35-2.38.64-10.77,2.86-13.14,3.52-153.26,43.26-247.27,148.72-247.27,148.72,0,0-1.07-6.35-2.74-12.55-31.04-115.8-150.08-184.51-265.88-153.47-115.8,31.04-184.51,150.08-153.47,265.88v.02c9.52,35.48,28.48,65.46,28.48,65.46,16.6,24.66,38.44,45.34,63.97,60.57,25.38,13.04,50.76,26.08,76.17,39.11l55.71,30.52,381.88,218.26,81.08,47.09-.53.92c44.73,20.59,86.39,47.56,123.56,80.07"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              fill="none"
              className="hero-svg-path"
              style={{ strokeDasharray: 4265, strokeDashoffset: 4265, animationDelay: "1s" }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-xs font-medium uppercase tracking-[0.3em] mb-8"
          >
            Travel & Tourism
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight mb-16 max-w-5xl"
          >
            Turn interest into<br />
            bookings.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed mb-6">
              Digital platforms built for how travel businesses grow — supporting
              visibility, sharpening booking journeys, and connecting the systems
              that keep momentum moving across seasons.
            </p>
            <p className="text-foreground font-bold text-sm md:text-base">
              25 years of experience in travel and tourism, understanding the
              commercial pressures, timing realities, and operational complexity
              behind every booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro - White section */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-16 max-w-5xl text-[hsl(230,40%,15%)]"
          >
            Travel decisions unfold over time. Digital platforms must{" "}
            <span className="text-accent">support that journey</span> — while
            keeping enquiries, bookings, and follow-up moving behind the scenes.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                Customers explore, compare, return, and ask questions before
                committing. The platforms they interact with need to handle research
                depth, conversion clarity, and operational follow-through simultaneously.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed mb-6">
                Kri8it works with travel and tourism businesses to design and
                deliver digital systems that support both demand generation and
                operational flow.
              </p>
              <p className="text-[hsl(230,40%,15%)] font-bold text-base md:text-lg">
                We strengthen visibility, sharpen booking journeys, and connect
                the systems that keep momentum moving.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Accordion - Dark section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.25em] mb-6">
                What We Deliver
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                Connected services for{" "}
                <span className="text-accent">travel</span>.
              </h2>
            </motion.div>

            <div>
              {serviceBlocks.map((service, i) => {
                const isOpen = expandedIndex === i;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => setExpandedIndex(isOpen ? null : i)}
                      className="w-full flex items-start justify-between py-8 text-left group"
                    >
                      <div className="flex items-baseline gap-5 flex-1">
                        <span className="text-accent text-xs font-medium tracking-[0.2em] tabular-nums">
                          {service.num}
                        </span>
                        <div>
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-xs uppercase tracking-[0.15em] mt-1">
                            {service.category}
                          </p>
                        </div>
                      </div>
                      <div className="mt-1 text-muted-foreground group-hover:text-accent transition-colors">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-10 md:pl-12">
                            <p className="text-[#F2F2F2]/70 text-base leading-relaxed mb-6">
                              {service.description}
                            </p>
                            {service.items.length > 0 && (
                              <div className="grid sm:grid-cols-2 gap-2">
                                {service.items.map((item) => (
                                  <div key={item} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    <span className="text-[#F2F2F2]/60 text-sm">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="h-px w-full bg-muted-foreground/15 relative overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-accent"
                        animate={{ width: isOpen ? "100%" : "0%" }}
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

      {/* Selected Results - Light grey */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-16"
          >
            <p className="text-[hsl(230,10%,55%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
              Proven Results
            </p>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)]">
              Selected <span className="text-accent">outcomes</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pt-8"
              >
                <div className="h-1 w-12 bg-accent mb-8 rounded-full" />
                <h3 className="font-display text-xl font-bold text-[hsl(230,40%,15%)] mb-4">
                  {r.title}
                </h3>
                <p className="text-[hsl(230,10%,45%)] text-base leading-relaxed">
                  {r.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With - White section with sector tags */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[hsl(230,10%,55%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
                Who We Work With
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)] mb-8">
                From boutique lodges to{" "}
                <span className="text-accent">global brands</span>.
              </h2>
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                Our experience spans safari, eco-tourism, luxury travel, adventure
                travel, and destination-led businesses. We build digital
                foundations that support both storytelling and operational
                precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              {sectors.map((sector, i) => (
                <motion.div
                  key={sector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="px-6 py-4 rounded-2xl border border-[hsl(230,10%,80%)] bg-white text-[hsl(230,40%,15%)] font-bold text-sm md:text-base hover:border-accent hover:shadow-[0_0_20px_-8px_hsl(var(--accent)/0.3)] transition-all duration-300 cursor-default"
                >
                  {sector}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - matches homepage */}
      <section className="relative section-padding overflow-hidden">
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
              Ready to strengthen visibility and build digital systems that{" "}
              <span className="text-accent">support growth</span> across
              seasons? Let's start the conversation.
            </h2>
            <a
              href="mailto:clint@kri8it.com"
              className="inline-flex items-center gap-4 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
                <ArrowRight size={18} />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                Book a Discovery Call
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
