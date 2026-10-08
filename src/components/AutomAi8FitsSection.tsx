import { motion, useReducedMotion } from "framer-motion";
import { darkBody, darkSectionHeading } from "@/components/EditorialPage";

const ENTRY_LINES = [
  { id: "af-line-a", d: "M24,150 C110,150 160,200 272,220", dur: "3.6s" },
  { id: "af-line-b", d: "M24,340 C120,340 180,300 272,286", dur: "4.4s" },
  { id: "af-line-c", d: "M300,24 C300,100 330,140 350,186", dur: "4.0s" },
  { id: "af-line-d", d: "M470,456 C470,400 440,380 420,334", dur: "4.8s" },
];

const GRID_X = [104, 184, 264, 344, 424];
const GRID_Y = [104, 184, 264, 344];

function FitsDiagram({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 560 480" className="w-full h-auto" role="img" aria-label="Diagram: AutomAi8 sits inside the Kri8it boundary.">
      <defs>
        <linearGradient id="af-module" x1="272" y1="186" x2="504" y2="334" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="hsl(var(--accent))" stopOpacity="0.20" />
          <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0.03" />
        </linearGradient>
        <radialGradient id="af-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="hsl(var(--accent))" stopOpacity="0.30" />
          <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
        <clipPath id="af-clip">
          <rect x="44" y="44" width="472" height="392" rx="26" />
        </clipPath>
      </defs>

      {/* corner brackets */}
      <g stroke="hsl(var(--accent))" strokeOpacity="0.5" strokeWidth="1.5" fill="none">
        <path d="M12,52 L12,12 L52,12" />
        <path d="M508,12 L548,12 L548,52" />
        <path d="M12,428 L12,468 L52,468" />
        <path d="M508,468 L548,468 L548,428" />
      </g>

      {/* Kri8it boundary */}
      <motion.rect
        x="24" y="24" width="512" height="432" rx="36"
        fill="none" stroke="hsl(var(--accent))" strokeOpacity="0.30" strokeWidth="1"
        initial={reduce ? false : { pathLength: 0 }} whileInView={reduce ? undefined : { pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <rect x="44" y="44" width="472" height="392" rx="26" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.07" />

      {/* interior grid */}
      <g clipPath="url(#af-clip)" stroke="hsl(var(--accent))" strokeOpacity="0.07">
        {GRID_X.map((x) => <line key={`x${x}`} x1={x} y1="44" x2={x} y2="436" />)}
        {GRID_Y.map((y) => <line key={`y${y}`} x1="44" y1={y} x2="516" y2={y} />)}
      </g>

      <text x="56" y="67" fill="hsl(var(--foreground))" fillOpacity="0.45" fontSize="12" fontWeight="600" letterSpacing="5">KRI8IT</text>

      {/* orbit */}
      {!reduce && (
        <g className="orbit-ring" opacity="0.5">
          <circle cx="388" cy="260" r="140" fill="none" stroke="hsl(var(--accent))" strokeOpacity="0.22" strokeDasharray="3 9" />
          <circle cx="388" cy="120" r="3" fill="hsl(var(--accent))" fillOpacity="0.8" />
          <circle cx="528" cy="260" r="2" fill="hsl(var(--accent))" fillOpacity="0.5" />
        </g>
      )}

      {/* flowing work lines */}
      {ENTRY_LINES.map((line, i) => (
        <g key={line.id}>
          <motion.path
            id={line.id} d={line.d} fill="none" stroke="hsl(var(--accent))" strokeOpacity="0.22" strokeWidth="1"
            initial={reduce ? false : { pathLength: 0 }} whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease: "easeOut" }}
          />
          <path d={line.d} fill="none" stroke="hsl(var(--accent))" strokeOpacity="0.75" strokeWidth="1.25" className="flow-dash" />
          <circle cx={line.d.startsWith("M24") ? 24 : line.d.startsWith("M300") ? 300 : 470}
            cy={line.d.startsWith("M24,150") ? 150 : line.d.startsWith("M24,340") ? 340 : line.d.startsWith("M300") ? 24 : 456}
            r="3.5" fill="hsl(var(--accent))" fillOpacity="0.9" />
          {!reduce && (
            <circle r="3" fill="hsl(var(--accent))">
              <animateMotion dur={line.dur} repeatCount="indefinite"><mpath href={`#${line.id}`} /></animateMotion>
            </circle>
          )}
        </g>
      ))}

      {/* AutomAi8 module */}
      <ellipse cx="388" cy="260" rx="150" ry="110" fill="url(#af-glow)" />
      <motion.g
        initial={reduce ? false : { opacity: 0, scale: 0.94 }} whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
        style={{ transformBox: "view-box", transformOrigin: "388px 260px" }}
      >
        <rect x="272" y="186" width="232" height="148" rx="24" fill="url(#af-module)" stroke="hsl(var(--accent))" strokeOpacity="0.85" strokeWidth="1.25" />
        <text x="388" y="252" textAnchor="middle" fill="hsl(var(--accent))" fontSize="21" fontWeight="700" letterSpacing="3">AUTOMAI8</text>
        <line x1="316" y1="270" x2="460" y2="270" stroke="hsl(var(--accent))" strokeOpacity="0.35" />
        <text x="388" y="294" textAnchor="middle" fill="hsl(var(--foreground))" fillOpacity="0.55" fontSize="11" fontWeight="500" letterSpacing="2.5">AUTOMATION AND AI</text>
      </motion.g>
    </svg>
  );
}

export default function AutomAi8FitsSection() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--accent) / 0.16) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 68% 58% at 74% 46%, black, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse 68% 58% at 74% 46%, black, transparent 78%)",
          }}
        />
        <div
          className="absolute w-[640px] h-[640px] rounded-full blur-[130px] opacity-25 top-1/2 right-[2%] -translate-y-1/2"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 68%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1fr_1.02fr] gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-9">
            <span className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">Kri8it · AutomAi8</span>
          </div>

          <h2 className={darkSectionHeading}>Where <span className="text-accent">AutomAi8</span> fits.</h2>

          <p className="mt-9 text-xl md:text-[1.65rem] leading-snug font-display font-medium text-foreground/90 max-w-xl">
            <span className="text-foreground font-bold">Kri8it</span> is the agency and consulting partner.{" "}
            <span className="text-accent font-bold">AutomAi8</span> is Kri8it's automation and AI brand.
          </p>

          <div className="mt-10 pt-8 border-t border-muted-foreground/20 max-w-xl space-y-5">
            <p className={darkBody}>AutomAi8 can support a wider engagement or a specific need around lead management, retention, attribution or workflows. Where AI is involved, we define its role, the decisions that need human judgement and what should happen when it cannot complete the task as intended.</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Specific connections, migrations, access requirements and third-party costs are assessed during scoping and testing.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="group relative"
        >
          <div
            className="absolute -inset-10 rounded-[48px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle at 70% 54%, hsl(var(--accent) / 0.16), transparent 62%)" }}
            aria-hidden="true"
          />
          <div className="relative rounded-[32px] border border-muted-foreground/12 bg-[hsl(240,50%,9%)]/60 p-6 md:p-10 backdrop-blur-sm transition-colors duration-700 group-hover:border-accent/30">
            <FitsDiagram reduce={reduce} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
