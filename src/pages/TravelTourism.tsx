import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import travelHero from "@/assets/heroes/travel-tourism-hero.png";

gsap.registerPlugin(ScrollTrigger);

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
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 20,
          scale: 1.1,
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
      if (heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          yPercent: -25,
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "70% top", scrub: true },
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero - matches homepage/about hero */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
        {/* Hero background image with left fade */}
        <div ref={heroBgRef} className="absolute inset-0 pointer-events-none">
          <img
            src={travelHero}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient fade to dark on the left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 via-40% to-transparent" />
          {/* Subtle top/bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
        </div>

        <div ref={heroContentRef} className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
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
                <p className="text-[hsl(230,10%,45%)] text-base md:text-lg leading-relaxed">
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

      {/* Video Showcase */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/travel-bg.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-background/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            Where every journey becomes <span className="text-accent">unforgettable</span>.
          </h2>
        </motion.div>
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

        <div className="max-w-7xl mx-auto relative z-10">
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
