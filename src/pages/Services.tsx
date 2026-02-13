import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

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
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero - matches homepage hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
        {/* SVG Draw Animation */}
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
              style={{ strokeDasharray: 1307, strokeDashoffset: 1307, animationDelay: '0.5s' }}
            />
            <path
              d="M903.48,1118.8l-163.55-93.48-81.08-47.09c-34.86-22.06-69.72-44.11-104.59-66.16-45.03-35.57-83.69-78.53-114.33-127.05,0,0-41.14-65.74-61.09-140.15C305.66,371.9,467.65,91.27,740.62,18.09c251.13-67.33,508.73,64.33,605.33,298.35-2.38.64-10.77,2.86-13.14,3.52-153.26,43.26-247.27,148.72-247.27,148.72,0,0-1.07-6.35-2.74-12.55-31.04-115.8-150.08-184.51-265.88-153.47-115.8,31.04-184.51,150.08-153.47,265.88v.02c9.52,35.48,28.48,65.46,28.48,65.46,16.6,24.66,38.44,45.34,63.97,60.57,25.38,13.04,50.76,26.08,76.17,39.11l55.71,30.52,381.88,218.26,81.08,47.09-.53.92c44.73,20.59,86.39,47.56,123.56,80.07"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              fill="none"
              className="hero-svg-path"
              style={{ strokeDasharray: 4265, strokeDashoffset: 4265, animationDelay: '1s' }}
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
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight mb-16 max-w-5xl"
          >
            What we do.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed mb-6">
              Kri8it works with businesses to plan and deliver digital work across
              strategy, design, development, and marketing — supported by AutomAi8, our
              applied intelligence and automation capability.
            </p>
            <p className="text-foreground font-bold text-sm md:text-base">
              Each service can be delivered independently. They are most effective when connected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail - White section with sticky heading + interactive accordion */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - sticky */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-[hsl(230,10%,60%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
                Services
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)] pr-8 lg:pr-16 mb-8">
                A focused set of services that work best when{" "}
                <span className="text-accent">connected</span>.
              </h2>
              <p className="text-[hsl(230,10%,45%)] text-base md:text-lg leading-relaxed">
                We approach digital work as a connected system. Strategy, creative, 
                digital, marketing, and systems all play a role — and when they work 
                together, customers move more easily and teams spend less time fixing gaps.
              </p>
            </motion.div>

            {/* Right column - expandable service items */}
            <div className="flex flex-col">
              {serviceBlocks.map((service, i) => {
                const isOpen = expandedIndex === i;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {/* Clickable header */}
                    <button
                      onClick={() => setExpandedIndex(isOpen ? null : i)}
                      className="w-full text-left py-8 flex items-start justify-between gap-6 group cursor-pointer"
                    >
                      <div className="flex items-baseline gap-5 flex-1">
                        <span className="text-accent text-xs font-medium tracking-[0.2em] tabular-nums">
                          {service.num}
                        </span>
                        <div>
                          <h3
                            className={`font-display text-xl md:text-2xl font-bold transition-colors duration-300 ${
                              isOpen ? "text-accent" : "text-[hsl(230,40%,15%)]"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p className="text-[hsl(230,10%,55%)] text-sm mt-1">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="mt-1 flex-shrink-0 text-[hsl(230,10%,55%)] group-hover:text-accent transition-colors">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-[52px]">
                            <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed mb-6">
                              {service.description}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                              {service.items.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                  <span className="text-sm text-[hsl(230,10%,45%)]">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Divider with animated accent line */}
                    <div className="h-px w-full bg-[hsl(230,10%,85%)] relative overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-accent"
                        initial={{ width: 0 }}
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

      {/* Connected System Statement - Light grey */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[hsl(230,10%,55%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
                How It Connects
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)] mb-8">
                Digital work as a{" "}
                <span className="text-accent">connected system</span>.
              </h2>
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed mb-6">
                Most businesses don't need more tools or more content. They need their
                existing efforts to work together — strategy informing creative, creative
                driving development, development supporting marketing, and marketing
                feeding back into strategy.
              </p>
              <p className="text-[hsl(230,40%,15%)] font-bold text-base md:text-lg">
                That's what we build. That's how we work.
              </p>
            </motion.div>

            {/* Right column - Animated Connection Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex items-center justify-center relative h-[400px]"
            >
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Center point */}
                <circle cx="150" cy="150" r="40" fill="hsl(var(--accent))" opacity="0.15" />
                
                {/* Circular connection line - animated */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="100"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  opacity="0.3"
                  strokeDasharray="628"
                  strokeDashoffset="628"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                />

                {/* Connection nodes - 5 services */}
                {[
                  { angle: 0, label: "Strategy" },
                  { angle: 72, label: "Design" },
                  { angle: 144, label: "Development" },
                  { angle: 216, label: "Marketing" },
                  { angle: 288, label: "Systems" },
                ].map((node, idx) => {
                  const radian = (node.angle * Math.PI) / 180;
                  const x = 150 + 100 * Math.cos(radian);
                  const y = 150 + 100 * Math.sin(radian);

                  return (
                    <motion.g key={node.label}>
                      {/* Animated pulse circle */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill="hsl(var(--accent))"
                        animate={{
                          r: [8, 12, 8],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: idx * 0.2,
                          repeat: Infinity,
                        }}
                      />
                      {/* Outer ring */}
                      <circle
                        cx={x}
                        cy={y}
                        r="14"
                        stroke="hsl(var(--accent))"
                        strokeWidth="1.5"
                        opacity="0.4"
                      />
                    </motion.g>
                  );
                })}

                {/* Center label */}
                <text
                  x="150"
                  y="155"
                  textAnchor="middle"
                  className="fill-[hsl(230,40%,15%)] text-xs font-bold"
                  opacity="0.7"
                >
                  Connected
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Let's Talk CTA */}
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
              Ready to build a{" "}
              <span className="text-accent">digital system</span> that actually
              works for your business?
            </h2>
            <a
              href="mailto:clint@kri8it.com"
              className="inline-flex items-center gap-5 group"
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
