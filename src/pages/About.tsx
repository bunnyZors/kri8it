import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">About Kri8it</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8">
              The thinking behind <span className="text-accent">how we work.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed space-y-4"
          >
            <p>Kri8it is a digital partner working with businesses to plan, build, and support digital work across:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Brand</li>
              <li>Digital experience</li>
              <li>Marketing performance</li>
              <li>Systems and automation</li>
            </ul>
            <p>We work with organisations that need their digital presence to actively support how the business operates, sells, and grows.</p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Who We <span className="text-accent">Are.</span></h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>Kri8it was founded 25 years ago by Clint and Francesca, starting in South Africa and now operating across South Africa and Ireland.</p>
              <p>As the business grew, so did their lives. They built a family, expanded into new markets, and worked across industries and operating contexts that didn't exist when Kri8it began.</p>
              <p>What has remained constant is their approach to the work:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Continuity over churn</li>
                <li>Care for the work and the people behind it</li>
                <li>A strong sense of responsibility to the partners they work with</li>
              </ul>
              <p>As customer behaviour, technology, and expectations have shifted, Kri8it has evolved alongside them. In recent years, that has meant thinking more deeply about systems, automation, and where applied intelligence genuinely helps rather than adds complexity. This thinking hasn't replaced the agency's foundations, it has extended them.</p>
              <p>Today, Kri8it brings together strategists, designers, developers, marketers, and system thinkers who share a common mindset:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Stay close to the business</li>
                <li>Take responsibility for outcomes</li>
                <li>Build work that holds up over time</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Role */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Our <span className="text-accent">Role.</span></h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>Our role is to bring structure, direction, and follow-through to digital work.</p>
              <p>We help teams make decisions early, build what's needed, and stay involved long enough to ensure it works in practice. This reduces handovers and limits rework. The result is digital platforms and systems teams can rely on day to day.</p>
              <p>We don't operate as a production-only agency. We work alongside internal teams and stakeholders as a partner, taking shared responsibility rather than stepping away after delivery.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Perspective */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Experience &amp; <span className="text-accent">Perspective.</span></h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>Kri8it has worked in the digital space for 25 years.</p>
              <p>During that time, we've lived through multiple waves of change:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Platforms</li>
                <li>Customer behaviour</li>
                <li>Technology</li>
              </ul>
              <p>That experience brings perspective. We understand what changes quickly and what needs to be built to last.</p>
              <p>It has also shown us the cost of short-term thinking. Much of our work today focuses on helping businesses build digital foundations that can evolve without constant rebuilds or disruption.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">How We <span className="text-accent">Work.</span></h2>
            <p className="text-xl text-accent font-semibold mb-8">Digital work as a connected system</p>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>We approach digital work as a connected system.</p>
              <p>That means:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Strategy, design, development, marketing, and automation are planned together</li>
                <li>Complexity is reduced rather than managed later</li>
                <li>Growth is supported through structure, not patchwork</li>
              </ul>
              <p>We work in close partnership with our clients:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Staying involved over time</li>
                <li>Communicating clearly</li>
                <li>Taking responsibility for what we deliver</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology, Systems & Automation */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Technology, Systems &amp; <span className="text-accent">Automation.</span></h2>
            <p className="text-xl text-accent font-semibold mb-8">Built in, not bolted on</p>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>Customer discovery, engagement, and buying now happen across many channels and touchpoints.</p>
              <p>To support this, Kri8it works with automation and applied intelligence through AutomAi8, with IntegrAi8 connecting the systems underneath.</p>
              <p>Together, these:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Support consistent customer experiences</li>
                <li>Improve visibility and follow-through</li>
                <li>Reduce operational strain across teams</li>
              </ul>
              <p>Automation is treated as part of the digital foundation we build for clients.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Who We <span className="text-accent">Work With.</span></h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>We work with businesses across sectors including:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Automotive</li>
                <li>Travel and tourism</li>
                <li>Property</li>
                <li>Retail</li>
                <li>Professional services</li>
                <li>Non-profits</li>
              </ul>
              <p>Our clients range from growing teams to established organisations. Many partnerships span years, reflecting a shared focus on trust, consistency, and long-term thinking.</p>
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
              If you're looking for a digital partner to help plan, deliver, and support digital work over time, we're happy to start a conversation.
            </p>
            <a
              href="mailto:clint@kri8it.com"
              className="inline-flex items-center gap-4 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-foreground/10">
                <ArrowRight size={16} />
              </span>
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
