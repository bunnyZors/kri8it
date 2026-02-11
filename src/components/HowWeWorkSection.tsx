import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AwarenessIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dashed circle */}
    <circle cx="30" cy="28" r="18" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
    {/* Head silhouette */}
    <path d="M22 50V44c0-2 1-4 3-5.5a14 14 0 0 1 3-12.5 12 12 0 0 1 17 0 14 14 0 0 1 3 12.5c2 1.5 3 3.5 3 5.5v4" stroke="hsl(230,40%,15%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Exclamation */}
    <line x1="33" y1="30" x2="33" y2="38" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
    <circle cx="33" cy="42" r="1.2" fill="hsl(var(--accent))" />
  </svg>
);

const EngagementIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Checkmark circle */}
    <circle cx="48" cy="18" r="10" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
    <path d="M43 18l3 3 7-7" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Hand pointer */}
    <path d="M30 28v16l-4 6h18l2-8 6-4V32a2 2 0 0 0-2-2h-2v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6" stroke="hsl(230,40%,15%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Index finger */}
    <path d="M36 28V18a4 4 0 0 1 8 0v10" stroke="hsl(230,40%,15%)" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const ConversionIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* People */}
    <circle cx="30" cy="14" r="4" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
    <circle cx="44" cy="14" r="4" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
    <circle cx="58" cy="14" r="4" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
    <path d="M24 26a6 6 0 0 1 12 0M38 26a6 6 0 0 1 12 0M52 26a6 6 0 0 1 12 0" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
    {/* Funnel */}
    <path d="M22 34h44l-12 16v12h-8V50L22 34z" stroke="hsl(230,40%,15%)" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <line x1="26" y1="40" x2="62" y2="40" stroke="hsl(230,40%,15%)" strokeWidth="1" opacity="0.3" />
  </svg>
);

const RetentionIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person */}
    <circle cx="54" cy="16" r="5" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
    <path d="M48 28a6 6 0 0 1 12 0" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
    {/* Hand */}
    <path d="M16 42c4-6 10-8 16-8h12c4 0 6 2 6 5s-2 5-6 5H34" stroke="hsl(230,40%,15%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M16 42c0 8 4 14 10 18h24c6-2 10-4 14-8" stroke="hsl(230,40%,15%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M26 60l-10 4" stroke="hsl(230,40%,15%)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const stages = [
  { label: "Awareness", Icon: AwarenessIcon },
  { label: "Engagement", Icon: EngagementIcon },
  { label: "Conversion", Icon: ConversionIcon },
  { label: "Retention", Icon: RetentionIcon },
];

export default function HowWeWorkSection() {
  return (
    <section className="section-padding" style={{ background: 'hsl(220 20% 95%)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-[900] leading-[1.05] mb-6 text-[hsl(230,40%,15%)]"
        >
          How we <span className="text-accent italic">work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-20 text-[hsl(230,10%,45%)]"
        >
          We approach digital work as a connected system. Every engagement
          is designed around the full customer journey:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-0 mb-20"
        >
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center">
              <div className="flex flex-col items-center gap-5 px-6 md:px-10">
                <stage.Icon />
                <span className="font-display font-bold text-lg md:text-xl text-[hsl(230,40%,15%)]">
                  {stage.label}
                </span>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 hidden md:block" strokeWidth={1.5} />
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-[hsl(230,20%,25%)]"
        >
          Strategy, creative, digital, marketing, and systems all play a role. When they work together,
          customers move more easily and teams spend less time fixing gaps.
        </motion.p>
      </div>
    </section>
  );
}
