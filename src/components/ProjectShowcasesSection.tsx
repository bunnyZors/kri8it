import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Latest", "Automotive", "Travel & Tourism", "Property", "Professional Services", "Ecommerce"];

const projects = [
  {
    name: "HeyTavcor",
    description: "Website design and development",
    category: "Automotive",
  },
  {
    name: "Wildlife Safari",
    description: "Website design and development",
    category: "Travel & Tourism",
  },
  {
    name: "Villa Concepts",
    description: "Website design and development",
    category: "Property",
  },
  {
    name: "SANI Car Rental",
    description: "Website design and development",
    category: "Automotive",
  },
  {
    name: "Springbok Atlas",
    description: "Digital marketing & website",
    category: "Travel & Tourism",
  },
  {
    name: "TaxTim",
    description: "Website design and development",
    category: "Professional Services",
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
            Explore Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold">Project Showcases</h2>
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
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
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

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors border-b-2 border-accent pb-1"
          >
            See All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
