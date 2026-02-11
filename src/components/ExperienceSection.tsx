import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding py-32 md:py-40 lg:py-48">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left column */}
          <div>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.25em] mb-4">
              Why Kri8it
            </p>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
              Built for businesses ready to move forward with{" "}
              <span className="text-[#049AD9]">confidence.</span>
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center gap-4 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
                <ArrowRight size={18} />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                Find Out More
              </span>
            </Link>
          </div>

          {/* Right column */}
          <div className="space-y-6 text-[#F2F2F2] leading-relaxed">
            <p>
              Clients choose Kri8it for experience, continuity, and partnership built over more
              than 25 years. We bring together brand thinking, digital execution, marketing
              performance, and system design under one roof, allowing strategy and
              delivery to move forward together.
            </p>
            <p>
              Over time, we've evolved beyond a traditional agency model. Today, our work
              connects brand foundations with the digital systems that support growth. We
              don't just define direction; we help build, connect, and operate the platforms
              and workflows that carry it through the business.
            </p>
            <p>
              This experience shapes how we partner: clear planning, informed decisions,
              and systems designed to support the business as it grows and changes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
