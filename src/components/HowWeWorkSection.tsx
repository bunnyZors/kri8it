import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AwarenessIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Radiating lines */}
    <line x1="40" y1="6" x2="40" y2="13" stroke="#049AD9" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="28" y1="10" x2="31" y2="16" stroke="#049AD9" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="52" y1="10" x2="49" y2="16" stroke="#049AD9" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="19" y1="20" x2="24" y2="24" stroke="#049AD9" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="61" y1="20" x2="56" y2="24" stroke="#049AD9" strokeWidth="2.5" strokeLinecap="round" />
    {/* Head profile outline */}
    <path d="M50 68H30v-6c0-3-1-6-3-9l-2-3c-2-3-3-7-3-11a18 18 0 0 1 36 0c0 4-1 8-3 11l-2 3c-2 3-3 6-3 9v6z" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Jaw / chin notch */}
    <path d="M30 68c5 0 9-3 11-7" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Exclamation mark */}
    <line x1="40" y1="32" x2="40" y2="48" stroke="#049AD9" strokeWidth="3" strokeLinecap="round" />
    <circle cx="40" cy="54" r="2" fill="#049AD9" />
  </svg>
);

const EngagementIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Checkmark circle */}
    <circle cx="44" cy="18" r="12" stroke="#049AD9" strokeWidth="2.5" fill="none" />
    <path d="M38 18l4 4 8-8" stroke="#049AD9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Hand pointer */}
    <path d="M26 38v-8a3 3 0 0 1 6 0v8" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M32 36v-4a3 3 0 0 1 6 0v4" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M38 36v-3a3 3 0 0 1 6 0v3" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M44 38v-2a3 3 0 0 1 6 0v8c0 8-4 14-12 16H30c-4-2-6-6-6-12v-6a3 3 0 0 1 6 0" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="29" y1="30" x2="29" y2="50" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

const ConversionIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Three people */}
    <circle cx="26" cy="14" r="5" stroke="#049AD9" strokeWidth="2.5" fill="none" />
    <path d="M20 26a6 6 0 0 1 12 0" stroke="#049AD9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="40" cy="10" r="5" stroke="#049AD9" strokeWidth="2.5" fill="none" />
    <path d="M34 22a6 6 0 0 1 12 0" stroke="#049AD9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="54" cy="14" r="5" stroke="#049AD9" strokeWidth="2.5" fill="none" />
    <path d="M48 26a6 6 0 0 1 12 0" stroke="#049AD9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Funnel */}
    <path d="M18 34h44l-14 18v14h-8V52L18 34z" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinejoin="round" fill="none" />
    <rect x="38" y="66" width="4" height="4" fill="hsl(230,40%,15%)" />
  </svg>
);

const RetentionIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person */}
    <circle cx="48" cy="12" r="6" stroke="#049AD9" strokeWidth="2.5" fill="none" />
    <path d="M40 24a8 8 0 0 1 16 0" stroke="#049AD9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Open hand / palm */}
    <path d="M18 50c2-4 6-8 12-10h14c4 0 7 2 7 6s-3 6-7 6H34" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M18 50c0 8 4 14 10 18h20c6-2 12-6 16-12" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Wrist */}
    <path d="M14 56l8-2" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M12 48l8 2" stroke="hsl(230,40%,15%)" strokeWidth="2.8" strokeLinecap="round" />
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
    <section className="section-padding" style={{ background: '#E8E9ED' }}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-[900] leading-[1.05] mb-6 text-[hsl(230,40%,15%)]"
        >
          How we <span className="text-[#049AD9] italic">work</span>
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
