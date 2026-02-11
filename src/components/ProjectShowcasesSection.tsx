import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Latest", "Automotive", "Travel & Tourism", "Property", "Professional Services", "Ecommerce"];

const projects = [
  {
    name: "HeyTavcor",
    description: "Digital platform, performance marketing, and systems integration",
    category: "Automotive",
  },
  {
    name: "Wildlife Safari",
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
    <section id="projects" className="section-padding" style={{ background: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[hsl(230,10%,60%)] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Latest Projects
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight text-[hsl(230,40%,15%)]">
            Project <span className="text-[#049AD9]">Showcases</span>
          </h2>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-[#049AD9] text-white shadow-md"
                  : "bg-white text-[hsl(230,10%,45%)] border border-[hsl(230,10%,85%)] hover:border-[#049AD9]/50 hover:text-[hsl(230,40%,15%)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="rounded-2xl overflow-hidden bg-white group">
                  <div className="aspect-[4/3] bg-[hsl(230,10%,90%)] flex items-center justify-center relative overflow-hidden">
                    <span className="text-[hsl(230,10%,65%)] text-sm">Project Preview</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5 px-1">
                  <h3 className="font-display font-bold text-lg md:text-xl text-[hsl(230,40%,15%)]">
                    {project.name}
                  </h3>
                  <span className="text-[#049AD9] text-xs font-bold uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="text-center mt-14 text-[hsl(230,10%,55%)] text-sm">
          Full case studies available on request.
        </p>
      </div>
    </section>
  );
}
