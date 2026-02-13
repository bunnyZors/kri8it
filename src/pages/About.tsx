import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const values = [
  {
    num: "01",
    title: "Continuity over churn",
    description:
      "We build partnerships that last years, not projects that last weeks. This consistency creates better outcomes for both sides.",
  },
  {
    num: "02",
    title: "Care for the work and the people behind it",
    description:
      "We take pride in what we deliver and invest in the relationships that make it possible.",
  },
  {
    num: "03",
    title: "Responsibility to our partners",
    description:
      "We stay involved, take ownership of outcomes, and communicate clearly throughout.",
  },
];

const principles = [
  {
    num: "01",
    title: "Stay close to the business",
  },
  {
    num: "02",
    title: "Take responsibility for outcomes",
  },
  {
    num: "03",
    title: "Build work that holds up over time",
  },
];

const sectors = [
  "Automotive",
  "Travel & Tourism",
  "Property",
  "Retail",
  "Professional Services",
  "Non-Profits",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero - matches homepage hero exactly */}
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
            About Kri8it
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight mb-16 max-w-5xl"
          >
            The thinking behind<br />
            how we work.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed mb-6">
              Kri8it is a digital partner working with businesses to plan, build, and
              support digital work across brand, digital experience, marketing
              performance, and systems and automation.
            </p>
            <p className="text-foreground font-bold text-sm md:text-base">
              We work with organisations that need their digital presence to actively
              support how the business operates, sells, and grows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - White section with large intro heading */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-16 max-w-5xl text-[hsl(230,40%,15%)]"
          >
            Founded <span className="text-accent whitespace-nowrap">25 years ago</span> by
            Clint and Francesca — starting in South Africa, now operating globally.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                As the business grew, so did their lives. They built a family, expanded
                into new markets, and worked across industries and operating contexts
                that didn't exist when Kri8it began.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed mb-6">
                As customer behaviour, technology, and expectations have shifted, Kri8it
                has evolved alongside them — thinking more deeply about systems,
                automation, and where applied intelligence genuinely helps.
              </p>
              <p className="text-[hsl(230,40%,15%)] font-bold text-base md:text-lg">
                This thinking hasn't replaced the agency's foundations — it has extended them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Dark section with numbered items */}
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
                What Guides Us
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
                What has remained{" "}
                <span className="text-accent">constant</span>.
              </h2>
              <p className="text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed">
                Through every wave of change — platforms, customer behaviour, technology —
                our approach to the work has stayed the same.
              </p>
            </div>

            <div className="space-y-0">
              {values.map((value, i) => (
                <motion.div
                  key={value.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="py-8 border-b border-muted-foreground/15 last:border-b-0"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-accent text-xs font-medium tracking-[0.2em] tabular-nums">
                      {value.num}
                    </span>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[#F2F2F2]/60 text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Role - Light grey with split layout */}
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
                Our Role
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)] mb-8">
                Structure, direction, and{" "}
                <span className="text-accent">follow-through</span>.
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
                We help teams make decisions early, build what's needed, and stay
                involved long enough to ensure it works in practice. This reduces
                handovers and limits rework.
              </p>
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                The result is digital platforms and systems teams can rely on day to day.
              </p>
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                We don't operate as a production-only agency. We work alongside internal
                teams and stakeholders as a partner — taking shared responsibility
                rather than stepping away after delivery.
              </p>

              {/* Decorative divider */}
              <div className="pt-6">
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

              {/* Principles */}
              <div className="pt-4">
                <p className="text-[hsl(230,10%,55%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
                  Our Mindset
                </p>
                {principles.map((p, i) => (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-baseline gap-4 py-3"
                  >
                    <span className="text-accent text-xs font-medium tracking-[0.2em] tabular-nums">
                      {p.num}
                    </span>
                    <span className="text-[hsl(230,40%,15%)] font-bold text-base md:text-lg">
                      {p.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - White section */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-16"
          >
            <p className="text-[hsl(230,10%,60%)] text-sm font-medium uppercase tracking-[0.25em] mb-6">
              How We Work
            </p>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)] mb-8">
              Digital work as a{" "}
              <span className="text-accent">connected system</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Planned together",
                text: "Strategy, design, development, marketing, and automation are planned as one connected system.",
              },
              {
                title: "Complexity reduced",
                text: "We reduce complexity upfront rather than managing it later — fewer handovers, less rework.",
              },
              {
                title: "Growth through structure",
                text: "Growth is supported through structure, not patchwork — systems designed to evolve.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pt-8"
              >
                <div className="h-1 w-12 bg-accent mb-8 rounded-full" />
                <h3 className="font-display text-xl font-bold text-[hsl(230,40%,15%)] mb-4">
                  {card.title}
                </h3>
                <p className="text-[hsl(230,10%,45%)] text-base md:text-lg leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Systems - Dark section */}
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
                Technology &amp; Systems
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
                Built in, not{" "}
                <span className="text-accent">bolted on</span>.
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
                Customer discovery, engagement, and buying now happen across many
                channels and touchpoints. To support this, Kri8it works with automation
                and applied intelligence through AutomAi8, with IntegrAi8 connecting
                the systems underneath.
              </p>
              <p>Together, these:</p>
              <div className="space-y-3 pl-1">
                {[
                  "Support consistent customer experiences",
                  "Improve visibility and follow-through",
                  "Reduce operational strain across teams",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-[#F2F2F2]/80 text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-bold text-foreground">
                Automation is treated as part of the digital foundation we build for clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With - Light grey with sector tags */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
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
                Partnerships built on{" "}
                <span className="text-accent">trust</span>.
              </h2>
              <p className="text-[hsl(230,10%,40%)] text-base md:text-lg leading-relaxed">
                Our clients range from growing teams to established organisations. Many
                partnerships span years, reflecting a shared focus on trust,
                consistency, and long-term thinking.
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

      {/* Let's Talk CTA - matches homepage */}
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
              If you're looking for a digital partner that values{" "}
              <span className="text-accent">long-term partnership</span>,
              let's start a conversation.
            </h2>
            <a
              href="mailto:clint@kri8it.com"
              className="inline-flex items-center gap-4 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
                <ArrowRight size={18} />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                Start a Conversation
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}