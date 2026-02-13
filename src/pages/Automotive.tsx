import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const serviceBlocks = [
  {
    num: "01",
    category: "Convert Intent into Action",
    title: "Automotive Websites & Platforms",
    description:
      "We design and build mobile-first websites structured around inventory, services, and enquiries — making it easier for customers to act and teams to respond.",
    items: [
      "Inventory integrations",
      "Model and offer pages",
      "Trade-in and finance enquiry flows",
      "CRM handover and tracking",
    ],
  },
  {
    num: "02",
    category: "Align Sales, Marketing & Systems",
    title: "Digital Strategy for Dealerships",
    description:
      "We plan digital work around how dealerships actually sell and service vehicles — connecting customer journeys, marketing channels, and internal workflows early.",
    items: [
      "Customer journey mapping",
      "Multi-channel planning",
      "Lead flow design",
      "Platform and integration scoping",
    ],
  },
  {
    num: "03",
    category: "Capture Demand at the Right Moment",
    title: "Search & Paid Media",
    description:
      "We drive high-intent traffic through organic and paid channels, with a strong focus on local visibility and enquiry quality.",
    items: [
      "Organic SEO",
      "Local and geo-targeted campaigns",
      "Paid media landing pages",
      "Ongoing optimisation and reporting",
    ],
  },
  {
    num: "04",
    category: "Keep Service Moving",
    title: "Service Booking & Workflow Automation",
    description:
      "We build and connect service booking systems that reduce administrative load and improve follow-up — helping teams operate with greater consistency.",
    items: [
      "Online booking tools",
      "Automated confirmations and reminders",
      "Integration with internal systems",
      "Reporting on booking activity",
    ],
  },
  {
    num: "05",
    category: "Strengthen Follow-Through",
    title: "Lead Management & CRM Integration",
    description:
      "We connect lead capture, routing, follow-up, and reporting so automotive teams maintain visibility across every enquiry.",
    items: [
      "CRM setup and configuration",
      "Lead routing and tracking",
      "Automated follow-up workflows",
      "Sales and marketing reporting",
    ],
  },
  {
    num: "06",
    category: "Reinforce the Brand at Every Touchpoint",
    title: "Brand & Visual Identity",
    description:
      "We support automotive brands with consistent visual systems that carry through digital platforms and in-dealership environments.",
    items: [
      "Brand and CI systems",
      "Digital design templates",
      "Website and campaign visuals",
    ],
  },
];

const experience = [
  "Modernise inventory-driven platforms",
  "Connect CRM and lead workflows",
  "Launch service booking systems with automation",
  "Standardise digital across multi-location networks",
];

export default function Automotive() {
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
            Automotive
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight mb-16 max-w-5xl"
          >
            Accelerate what<br />
            matters.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed mb-6">
              Digital platforms and systems built for modern automotive
              businesses — supporting sales, servicing, and marketing without
              creating friction for teams.
            </p>
            <p className="text-foreground font-bold text-sm md:text-base">
              Over 25 years of experience helping automotive teams move forward
              with structure — from day one and over time.
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
            The automotive sector moves quickly. Customers expect{" "}
            <span className="text-accent">clarity, speed</span>, and consistent
            follow-through.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                Digital platforms must support sales, servicing, and marketing at
                the same time — without creating friction for teams. Visibility,
                lead handling, and service workflows need to work together.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed mb-6">
                Kri8it works with dealerships, automotive brands, and service
                centres to design and deliver digital systems that keep momentum
                moving.
              </p>
              <p className="text-[hsl(230,40%,15%)] font-bold text-base md:text-lg">
                We focus on visibility, lead handling, service workflows, and the
                infrastructure that connects it all.
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
                <span className="text-accent">automotive</span>.
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
                            <p className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed mb-6">
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

      {/* Proven Experience - Light grey */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-[hsl(230,10%,55%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
                Track Record
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)]">
                Proven automotive{" "}
                <span className="text-accent">experience</span>.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                We've partnered with automotive groups and dealerships to:
              </p>

              {experience.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-baseline gap-4 py-3"
                >
                  <span className="text-accent text-xs font-medium tracking-[0.2em] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[hsl(230,40%,15%)] font-bold text-base md:text-lg">
                    {item}
                  </span>
                </motion.div>
              ))}

              <div className="pt-4">
                <div className="h-px w-full bg-[hsl(230,10%,80%)] relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </div>

              <p className="text-[hsl(230,10%,55%)] text-sm italic pt-2">
                Detailed case studies available on request.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation - Dark section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 md:gap-24"
          >
            <div>
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.25em] mb-4">
                Automation & Intelligence
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
                Automation that keeps{" "}
                <span className="text-accent">pace</span>.
              </h2>
              <a
                href="/services"
                className="inline-flex items-center gap-4 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
                  <ArrowRight size={18} />
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                  Explore Our Services
                </span>
              </a>
            </div>

            <div className="space-y-6 text-[#F2F2F2] text-base md:text-lg leading-relaxed">
              <p>
                Automotive sales and servicing rely on timely response and
                consistent communication.
              </p>
              <p>
                Through AutomAi8, we support automotive businesses with applied
                intelligence that connects lead handling, service reminders, and
                customer communication across the funnel. IntegrAi8 ensures
                systems and data move reliably across platforms.
              </p>
              <div className="space-y-3 pl-1">
                {[
                  "Stronger visibility across channels",
                  "Faster follow-through on enquiries",
                  "Operational stability as the business grows",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-[#F2F2F2]/80 text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-bold text-foreground">
                The result: digital systems that support growth without adding
                operational strain.
              </p>
            </div>
          </motion.div>
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
              Ready to accelerate visibility and build digital systems that{" "}
              <span className="text-accent">keep your dealership moving</span>?
              Let's start the conversation.
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
