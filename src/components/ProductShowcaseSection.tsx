import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductShowcaseSection() {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Autom<span className="text-accent">Ai8</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - mock dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background overflow-hidden"
          >
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-accent/40" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <span className="text-xs text-muted-foreground ml-2">AutomAi8 Dashboard</span>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Leads", value: "2,847", change: "+18%" },
                  { label: "Conversions", value: "412", change: "+24%" },
                  { label: "Revenue", value: "R1.2M", change: "+31%" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <span className="text-xs text-accent font-bold">{stat.change}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-end gap-2 h-32 pt-4">
                {[40, 55, 35, 65, 80, 60, 90, 75, 95, 70, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-accent/20 rounded-t transition-all hover:bg-accent/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
              Sales and marketing automation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sales and marketing automation that brings together customer conversations, reputation signals, and attribution, from first contact through to follow-up.
            </p>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-3 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
            >
              Learn More About Our Tech
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
