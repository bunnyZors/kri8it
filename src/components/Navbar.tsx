import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import kri8itIcon from "@/assets/logos/kri8it-icon.png";
import kri8itLogomark from "@/assets/logos/kri8it-logomark-white.png";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Strategy", href: "/services" },
      { label: "Design", href: "/services" },
      { label: "Development", href: "/services" },
      { label: "Performance Marketing", href: "/services" },
      { label: "Systems & Automation", href: "/services" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "AutomAi8", href: "/#ecosystem" },
      { label: "IntegrAi8", href: "/#ecosystem" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Industries",
    children: [
      { label: "Automotive", href: "/automotive" },
      { label: "Travel & Tourism", href: "/travel-tourism" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={kri8itIcon} alt="Kri8it icon" className="h-8 w-8" />
          <img src={kri8itLogomark} alt="Kri8it Digital" className="h-8 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-card border border-border p-2 shadow-2xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href!}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/about"
            className="shimmer-btn bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase"
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
                <div key={link.label}>
                  {link.children ? (
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-foreground uppercase tracking-wider">
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-4 py-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm font-bold text-foreground uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block text-center shimmer-btn bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase"
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
