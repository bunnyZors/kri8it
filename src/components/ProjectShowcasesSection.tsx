import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Latest", "Automotive", "Travel & Tourism", "Property", "Professional Services", "Ecommerce"];

const projects = [
  {
    name: "Automotive group",
    description: "Digital platform, performance marketing, and systems integration",
    category: "Automotive",
  },
  {
    name: "Travel brand",
    description: "Website rebuild, SEO, and ongoing optimisation",
    category: "Travel & Tourism",
  },
  {
    name: "Property business",
    description: "Brand refresh and digital experience",
    category: "Property",
  },
  {
    name: "Professional services firm",
    description: "CRM setup and automation",
    category: "Professional Services",
  },
  {
    name: "Retail brand",
    description: "E-commerce optimisation",
    category: "Ecommerce",
  },
];

export default function ProjectShowcasesSection() {
  const [active, setActive] = useState("Latest");

  const filtered = active === "Latest" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4">
            Latest Projects
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight">
            A snapshot of recent work across strategy, digital, marketing, and systems.
          </h2>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                active === cat
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="rounded-2xl overflow-hidden bg-card border border-border group">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Project Preview</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="font-bold text-foreground">{project.name}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
                <span className="text-accent text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-12 text-muted-foreground text-sm">
          Full case studies available on request.
        </p>
      </div>
    </section>
  );
}
