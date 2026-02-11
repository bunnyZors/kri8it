import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lepasHero from "@/assets/projects/lepas-hero.png";
import lepasModels from "@/assets/projects/lepas-models.png";
import lepasInterior from "@/assets/projects/lepas-interior.png";

const categories = ["Latest", "Automotive", "Travel & Tourism", "Property", "Professional Services", "Ecommerce"];

const projects = [
  {
    name: "Lepas Motors",
    description: "Full digital platform including website design, brand experience, and model showcase",
    category: "Automotive",
    images: [lepasHero, lepasModels, lepasInterior],
  },
  {
    name: "Wildlife Safari",
    description: "Website rebuild, SEO, and ongoing optimisation",
    category: "Travel & Tourism",
    images: [],
  },
  {
    name: "Property business",
    description: "Brand refresh and digital experience",
    category: "Property",
    images: [],
  },
  {
    name: "Professional services firm",
    description: "CRM setup and automation",
    category: "Professional Services",
    images: [],
  },
  {
    name: "Retail brand",
    description: "E-commerce optimisation",
    category: "Ecommerce",
    images: [],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [activeImg, setActiveImg] = useState(0);
  const hasImages = project.images.length > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.05 }}
      className={hasImages ? "md:col-span-2" : ""}
    >
      <div className="rounded-2xl overflow-hidden bg-white group shadow-sm hover:shadow-xl transition-shadow duration-500">
        {hasImages ? (
          <div className="relative">
            {/* Main featured image */}
            <div className="aspect-[16/8] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={project.images[activeImg]}
                  alt={`${project.name} showcase ${activeImg + 1}`}
                  className="w-full h-full object-cover object-top"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Thumbnail strip */}
            {project.images.length > 1 && (
              <div className="flex gap-2 p-4 bg-white">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative flex-1 aspect-[16/9] rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImg === i
                        ? "ring-2 ring-[hsl(var(--primary))] ring-offset-2 scale-[1.02]"
                        : "opacity-60 hover:opacity-90 grayscale-[30%] hover:grayscale-0"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-[4/3] bg-[hsl(230,10%,90%)] flex items-center justify-center relative overflow-hidden">
            <span className="text-[hsl(230,10%,65%)] text-sm">Project Preview</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-5 px-1">
        <div>
          <h3 className="font-display font-bold text-lg md:text-xl text-[hsl(230,40%,15%)]">
            {project.name}
          </h3>
          {hasImages && (
            <p className="text-[hsl(230,10%,50%)] text-sm mt-1">{project.description}</p>
          )}
        </div>
        <span className="text-[hsl(var(--primary))] text-xs font-bold uppercase tracking-[0.15em] shrink-0 ml-4">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
}

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

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
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
