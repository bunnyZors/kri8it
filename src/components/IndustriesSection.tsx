import { motion } from "framer-motion";
import { Car, Plane, Building, ShoppingBag, Briefcase, Heart } from "lucide-react";

const industries = [
  { icon: Car, label: "Automotive" },
  { icon: Plane, label: "Travel & Tourism" },
  { icon: Building, label: "Property" },
  { icon: ShoppingBag, label: "Retail & E-commerce" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: Heart, label: "Non-profits" },
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
          <h2 className="text-3xl md:text-5xl font-extrabold">
            We work across <span className="text-accent">sectors.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glow-card p-6 text-center flex flex-col items-center gap-3"
            >
              <item.icon className="text-accent" size={28} />
              <span className="text-sm font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
