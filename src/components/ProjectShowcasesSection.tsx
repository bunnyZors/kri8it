import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lepasHero from "@/assets/projects/lepas-hero.png";
import lepasModels from "@/assets/projects/lepas-models.png";
import lepasInterior from "@/assets/projects/lepas-interior.png";

const categories = ["Latest", "Automotive", "Travel & Tourism", "Property", "Professional Services", "Ecommerce"];

type Project = {
  name: string;
  description: string;
  category: string;
  image?: string;
  size: "large" | "medium" | "small";
};

const projects: Project[] = [
  {
    name: "Lepas Motors",
    description: "Full digital platform, brand experience & model showcase",
    category: "Automotive",
    image: lepasHero,
    size: "large",
  },
  {
    name: "Lepas Models",
    description: "Vehicle model pages & interactive configurator",
    category: "Automotive",
    image: lepasModels,
    size: "medium",
  },
  {
    name: "Lepas Interior",
    description: "Interior showcase & specification comparison tool",
    category: "Automotive",
    image: lepasInterior,
    size: "medium",
  },
  {
    name: "Wildlife Safari",
    description: "Website rebuild, SEO & ongoing optimisation",
    category: "Travel & Tourism",
    size: "small",
  },
  {
    name: "Property business",
    description: "Brand refresh and digital experience",
    category: "Property",
    size: "small",
  },
  {
    name: "Professional services firm",
    description: "CRM setup and automation",
    category: "Professional Services",
    size: "small",
  },
  {
    name: "Retail brand",
    description: "E-commerce optimisation",
    category: "Ecommerce",
    size: "small",
  },
];

function BentoCard({ project, index }: { project: Project; index: number }) {
  const hasImage = !!project.image;

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  };

  const aspectClasses = {
    large: "aspect-[16/10]",
    medium: "aspect-[4/3]",
    small: "aspect-[4/3]",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`${sizeClasses[project.size]} group`}
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer">
        <div className={`relative w-full h-full ${!hasImage ? aspectClasses[project.size] : ""} overflow-hidden`}>
          {hasImage ? (
            <>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay that lifts on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />
              {/* Info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-[hsl(var(--primary))] text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 block">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-white text-lg md:text-xl leading-tight">
                  {project.name}
                </h3>
                <p className="text-white/70 text-sm mt-1 line-clamp-2 transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-end h-full p-5 md:p-6 bg-[hsl(230,10%,93%)]">
              <span className="text-[hsl(var(--primary))] text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5">
                {project.category}
              </span>
              <h3 className="font-display font-bold text-[hsl(230,40%,15%)] text-lg leading-tight">
                {project.name}
              </h3>
              <p className="text-[hsl(230,10%,50%)] text-sm mt-1">{project.description}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcasesSection() {
  const [active, setActive] = useState("Latest");

  const filtered = active === "Latest" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding" style={{ background: "#F5F5F5" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[hsl(230,10%,60%)] text-sm font-medium uppercase tracking-[0.25em] mb-4">
            Latest Projects
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight text-[hsl(230,40%,15%)]">
            Project <span className="text-[hsl(var(--primary))]">Showcases</span>
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
                  ? "bg-[hsl(var(--primary))] text-white shadow-md"
                  : "bg-white text-[hsl(230,10%,45%)] border border-[hsl(230,10%,85%)] hover:border-[hsl(var(--primary))]/50 hover:text-[hsl(230,40%,15%)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(200px,auto)]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <BentoCard key={project.name} project={project} index={i} />
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
