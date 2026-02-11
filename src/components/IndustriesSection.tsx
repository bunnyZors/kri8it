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
    <section id="industries" className="section-padding pb-36 md:pb-44" style={{ background: '#F5F5F5' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2">
          {industries.map((item, i) => {
            const content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group cursor-pointer py-10"
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-display font-bold text-lg md:text-xl text-[hsl(230,40%,15%)] transition-colors duration-300 group-hover:text-[#049AD9]">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <motion.span
                    className="font-display font-medium text-lg md:text-xl text-[hsl(230,40%,15%)] transition-colors duration-300 group-hover:text-[#049AD9]"
                  >
                    {item.label}
                  </motion.span>
                </div>
                <div className="h-px w-full bg-[hsl(230,10%,85%)] relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#049AD9] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            );
            return item.link ? (
              <Link key={item.label} to={item.link}>{content}</Link>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
