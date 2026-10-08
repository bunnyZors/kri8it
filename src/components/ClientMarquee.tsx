import { motion } from "framer-motion";

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

export default function ClientMarquee({ delay = 1.2 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
      className="relative z-10 mt-20 md:mt-28"
    >
      <div className="relative mb-6 overflow-visible">
        <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-visible">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] whitespace-nowrap">Trusted By</p>
          <div className="flex-1 h-px bg-border relative overflow-visible">
            <div className="absolute top-0 left-0 right-0 h-px bg-border" style={{ width: "200vw" }} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto overflow-visible">
        <div
          className="overflow-hidden -mr-[calc(50vw-50%)]"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%)",
          }}
        >
          <div className="flex gap-16 items-center animate-marquee w-fit">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <img
                key={`${logo.alt}-${i}`}
                src={logo.src}
                alt={logo.alt}
                className={`w-auto opacity-50 hover:opacity-90 transition-opacity grayscale brightness-200 flex-shrink-0 ${
                  logo.alt === "Mahindra" ? "h-12 md:h-16" : "h-16 md:h-24"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
