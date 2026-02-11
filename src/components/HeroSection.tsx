import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

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

const words = ["connected system", "growth engine", "competitive edge", "digital foundation"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 120);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 60);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Decorative arcs */}
      <div className="absolute top-20 right-0 w-[700px] h-[700px] opacity-15 pointer-events-none">
        <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="350" r="300" stroke="hsl(var(--accent))" strokeWidth="1" />
          <circle cx="350" cy="350" r="220" stroke="hsl(var(--accent))" strokeWidth="1" />
          <circle cx="350" cy="350" r="140" stroke="hsl(var(--accent))" strokeWidth="1" />
          <path d="M350 50 A300 300 0 0 1 650 350" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-6"
        >
          Digital Systems Partner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 max-w-5xl min-h-[2.2em]"
        >
          Digital work as a{" "}
          <span className="text-accent border-r-2 border-accent animate-typewriter-cursor pr-1">
            {displayed}
          </span>
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-bold text-foreground max-w-2xl mb-4"
        >
          Break down the barriers between brand and bottom line
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Strategy, Creative, and Systems built to support how your business operates — not just how it looks. We help brands transform bold ideas into decisive action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-3 shimmer-btn bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
          >
            Explore Our Services
            <ChevronRight size={16} />
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors border-b-2 border-accent pb-1"
          >
            Check out our tech
            <ChevronRight size={14} />
          </a>
        </motion.div>

        {/* Trusted By - marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 border-t border-border pt-8"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-6">Trusted By</p>
          <div className="overflow-hidden relative">
            <div className="flex gap-12 items-center animate-marquee w-max">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto opacity-40 hover:opacity-100 transition-opacity grayscale brightness-200 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
