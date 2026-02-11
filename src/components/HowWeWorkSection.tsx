import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import awarenessIcon from "@/assets/icons/awareness-icon.png";
import engagementIcon from "@/assets/icons/engagement-icon.png";
import conversionIcon from "@/assets/icons/conversion-icon.png";
import retentionIcon from "@/assets/icons/retention-icon.png";

const IconImg = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-20 h-20 object-contain" />
);

const AwarenessIcon = () => <IconImg src={awarenessIcon} alt="Awareness" />;
const EngagementIcon = () => <IconImg src={engagementIcon} alt="Engagement" />;
const ConversionIcon = () => <IconImg src={conversionIcon} alt="Conversion" />;
const RetentionIcon = () => <IconImg src={retentionIcon} alt="Retention" />;

const stages = [
  { label: "Awareness", Icon: AwarenessIcon },
  { label: "Engagement", Icon: EngagementIcon },
  { label: "Conversion", Icon: ConversionIcon },
  { label: "Retention", Icon: RetentionIcon },
];

export default function HowWeWorkSection() {
  return (
    <section className="section-padding" style={{ background: '#F7F7F8' }}>
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
