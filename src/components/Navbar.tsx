import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import kri8itLogo from "@/assets/logos/kri8it-primary-logo-white.svg";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Travel", href: "/travel-tourism" },
  { label: "Automotive", href: "/automotive" },
  { label: "Portfolio", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={kri8itLogo} alt="Kri8it Digital" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 translate-y-[7px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-[11px] font-medium text-[#F2F2F2] hover:text-foreground transition-colors tracking-[0.18em] uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/about#contact"
            className="ml-2 bg-accent text-accent-foreground px-6 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-bold text-foreground uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/about#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
