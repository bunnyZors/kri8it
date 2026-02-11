import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const industries = [
  { label: "Automotive", link: "/automotive" },
  { label: "Travel & Tourism", link: "/travel-tourism" },
  { label: "Property", link: null },
  { label: "Retail & E-commerce", link: null },
  { label: "Professional Services", link: null },
  { label: "Non-profits", link: null },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding" style={{ background: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[hsl(230,10%,60%)] text-sm font-medium uppercase tracking-[0.25em] mb-4">
            Industries
          </p>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)]">
            We work across a<br />
            <span className="text-[#049AD9]">range of sectors</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {industries.map((item, i) => {
            const content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="pb-4 border-b-2 border-[#049AD9]/30"
              >
                <span className="font-display font-bold text-lg md:text-xl text-[hsl(230,40%,15%)]">
                  <span className="font-bold">{String(i + 1).padStart(2, '0')}.</span>{" "}
                  <span className="font-normal">{item.label}</span>
                </span>
              </motion.div>
            );
            return item.link ? (
              <Link key={item.label} to={item.link} className="hover:opacity-80 transition-opacity">{content}</Link>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
