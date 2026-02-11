import { Facebook, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#experience" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const products = [
  { label: "Kri8it", href: "#ecosystem" },
  { label: "AutomAi8", href: "#ecosystem" },
  { label: "IntegrAi8", href: "#ecosystem" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border section-padding pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 text-foreground font-extrabold text-xl mb-4">
              <span className="text-accent">⊛</span>
              <span>KRI</span>
              <span className="text-accent">8</span>
              <span>IT</span>
              <span className="text-muted-foreground font-normal text-sm">.digital</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-service digital agency and long-term digital partner with over 25 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-foreground hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-foreground hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Cape Town, South Africa</p>
                <p className="text-muted-foreground">+27 82 559 9903</p>
                <p className="text-muted-foreground">clint@kri8it.com</p>
              </div>
              <div>
                <p className="font-bold">Dublin, Ireland</p>
                <p className="text-muted-foreground">+353 83 317 4599</p>
                <p className="text-muted-foreground">charl@kri8it.ie</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:opacity-80 transition-opacity"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>Founded in South Africa. Operating Globally.</p>
          <p>© {new Date().getFullYear()} Kri8it Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
