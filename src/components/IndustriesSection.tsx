import { motion } from "framer-motion";
import { Car, Plane, Building, ShoppingBag, Briefcase, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Car, label: "Automotive", link: "/automotive" },
  { icon: Plane, label: "Travel & Tourism", link: "/travel-tourism" },
  { icon: Building, label: "Property", link: null },
  { icon: ShoppingBag, label: "Retail & E-commerce", link: null },
  { icon: Briefcase, label: "Professional Services", link: null },
  { icon: Heart, label: "Non-profits", link: null },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Industries
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight">
            We work across a range of <span className="text-[#049AD9]">sectors.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, i) => {
            const content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glow-card p-6 text-center flex flex-col items-center gap-3 hover:border-accent/50 transition-colors"
              >
                <item.icon className="text-accent" size={28} />
                <span className="text-sm font-semibold">{item.label}</span>
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
