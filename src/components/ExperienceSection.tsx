import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Why Kri8it
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
            <span className="text-accent">25 years</span> of
            <br />
            continuity & partnership.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mt-6 leading-relaxed">
            Clients choose Kri8it for experience, continuity, and partnership. We bring together
            brand thinking, digital execution, marketing performance, and system design under one
            roof.
          </p>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-[1px] bg-gradient-to-br from-accent/50 via-primary/30 to-transparent max-w-3xl"
        >
          <div className="rounded-2xl bg-card p-8 md:p-12">
            <Quote className="text-accent mb-6" size={32} />
            <p className="text-foreground text-lg leading-relaxed mb-6">
              "We have partnered with Kri8it Digital for over 10 years, and they are, in my view,
              our most valued business partner. They are not just a service provider, but an
              integral part of our digital success."
            </p>
            <div className="border-t border-border pt-6">
              <p className="font-bold text-lg">Bertus Floor</p>
              <p className="text-accent text-sm">Group Digital Officer, The SAFY Group</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
