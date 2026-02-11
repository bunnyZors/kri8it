import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import engagementIcon from "@/assets/icons/engagement-icon.png";
import conversionIcon from "@/assets/icons/conversion-icon.png";
import retentionIcon from "@/assets/icons/retention-icon.png";

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
  <img src={engagementIcon} alt="Engagement" className="w-20 h-20 object-contain" />
);

const ConversionIcon = () => (
  <img src={conversionIcon} alt="Conversion" className="w-20 h-20 object-contain" />
);

const RetentionIcon = () => (
  <img src={retentionIcon} alt="Retention" className="w-20 h-20 object-contain" />
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
