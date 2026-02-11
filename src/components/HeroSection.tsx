import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import logoNaturalSelection from "@/assets/logos/natural-selection.png";
import logoSpringbok from "@/assets/logos/springbok-atlas.png";
import logoPembroke from "@/assets/logos/pembroke.png";
import logoSafariOnline from "@/assets/logos/safari-online.png";
import logoNissan from "@/assets/logos/nissan.png";
import logoArtOfSafari from "@/assets/logos/art-of-safari.png";
import logoExclusiveBooks from "@/assets/logos/exclusive-books.png";
import logoCrystalsCo from "@/assets/logos/crystals-co.png";
import logoOim from "@/assets/logos/oim.png";
import logoWildlifeSafari from "@/assets/logos/wildlife-safari.png";
import logoMitsubishi from "@/assets/logos/mitsubishi.png";
import logoMahindra from "@/assets/logos/mahindra.png";
import logoJetour from "@/assets/logos/jetour.png";
import logoHarley from "@/assets/logos/harley.png";
import logoKia from "@/assets/logos/kia.png";
import logoTfg from "@/assets/logos/tfg.png";
import logoVw from "@/assets/logos/vw.png";
import logoSimplyAsia from "@/assets/logos/simply-asia.png";
import logoLeatt from "@/assets/logos/leatt.png";

const clientLogos = [
  { src: logoNaturalSelection, alt: "Natural Selection" },
  { src: logoSpringbok, alt: "Springbok Atlas" },
  { src: logoPembroke, alt: "Pembroke Privacy" },
  { src: logoNissan, alt: "Nissan" },
  { src: logoSafariOnline, alt: "Safari Online" },
  { src: logoArtOfSafari, alt: "Art of Safari" },
  { src: logoExclusiveBooks, alt: "Exclusive Books" },
  { src: logoCrystalsCo, alt: "Crystals & Co" },
  { src: logoOim, alt: "OIM Consulting" },
  { src: logoWildlifeSafari, alt: "Wildlife Safari" },
  { src: logoMitsubishi, alt: "Mitsubishi" },
  { src: logoMahindra, alt: "Mahindra" },
  { src: logoJetour, alt: "Jetour" },
  { src: logoHarley, alt: "Harley-Davidson" },
  { src: logoKia, alt: "Kia" },
  { src: logoTfg, alt: "The Foschini Group" },
  { src: logoVw, alt: "Volkswagen" },
  { src: logoSimplyAsia, alt: "Simply Asia" },
  { src: logoLeatt, alt: "Leatt" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding pt-32 pb-8 overflow-hidden">
      {/* SVG Draw Animation - Kri8it brand lines */}
      <div className="absolute left-0 right-0 top-0 pointer-events-none overflow-hidden" style={{ bottom: '225px' }}>
        <svg
          viewBox="0 0 1474 1119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[5%] bottom-0 w-[55%] h-auto opacity-20"
        >
          <path
            d="M.5,1118.81c7.16-197.99,130.53-379,317.92-456.35.22.84.54,2.06.93,3.55,6.13,22.92,28.6,86.14,62.22,143.23,41.07,69.74,93.26,113.16,91.02,113.72-4.21,1.06-.14.04-19.31,5.18-93.19,24.99-150,103.46-157.02,190.66"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            className="hero-svg-path"
            style={{ strokeDasharray: 1178, strokeDashoffset: 1178 }}
          />
          <path
            d="M1473.76,654.49c-10.93,1.19-21.9,3.23-32.85,6.17-35.47,9.51-67.67,30.81-67.67,30.81-49.61,34.17-88.1,82.15-110.68,138-6.51,19.28-13.02,38.55-19.52,57.83l-244.7-138.59-16.4-9.28,47.09-81.08.92.53c61.42-133.4,181.62-242.19,334.55-283.19,36.45-9.77,73.04-15.36,109.25-17.04"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            className="hero-svg-path"
            style={{ strokeDasharray: 1307, strokeDashoffset: 1307, animationDelay: '0.5s' }}
          />
          <path
            d="M903.48,1118.8l-163.55-93.48-81.08-47.09c-34.86-22.06-69.72-44.11-104.59-66.16-45.03-35.57-83.69-78.53-114.33-127.05,0,0-41.14-65.74-61.09-140.15C305.66,371.9,467.65,91.27,740.62,18.09c251.13-67.33,508.73,64.33,605.33,298.35-2.38.64-10.77,2.86-13.14,3.52-153.26,43.26-247.27,148.72-247.27,148.72,0,0-1.07-6.35-2.74-12.55-31.04-115.8-150.08-184.51-265.88-153.47-115.8,31.04-184.51,150.08-153.47,265.88v.02c9.52,35.48,28.48,65.46,28.48,65.46,16.6,24.66,38.44,45.34,63.97,60.57,25.38,13.04,50.76,26.08,76.17,39.11l55.71,30.52,381.88,218.26,81.08,47.09-.53.92c44.73,20.59,86.39,47.56,123.56,80.07"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            className="hero-svg-path"
            style={{ strokeDasharray: 4265, strokeDashoffset: 4265, animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent text-xs font-medium uppercase tracking-[0.3em] mb-8"
        >
          We Build The Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-[clamp(3rem,6.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight mb-16 max-w-5xl"
        >
          Brand. Digital.<br />
          Systems.
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          href="#contact"
          className="inline-flex items-center gap-5 group w-fit"
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
            <ArrowRight size={22} />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Start Your Journey
          </span>
        </motion.a>
      </div>

      {/* Trusted By */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mt-auto"
      >
        <div className="max-w-7xl mx-auto">
          {/* Label + line */}
          <div className="flex items-center gap-6 mb-6">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] whitespace-nowrap">Trusted By</p>
            <div className="flex-1 h-px bg-border" />
          </div>
          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="flex gap-16 items-center animate-marquee">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto opacity-50 hover:opacity-100 transition-opacity grayscale brightness-200 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
