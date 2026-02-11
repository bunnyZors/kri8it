import { Facebook, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#experience" },
  { label: "Automotive", href: "#industries" },
  { label: "Travel", href: "#industries" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="section-padding pb-0">
      <div className="max-w-7xl mx-auto">
        {/* Say hello heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-12">
          Say <span className="text-accent">hello.</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-16">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8 max-w-xl"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                How Can We Help? <span className="text-accent">*</span>
              </label>
              <textarea
                required
                rows={3}
                className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:border-accent outline-none transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="shimmer-btn bg-accent text-accent-foreground px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Submit Your Message
            </button>
          </form>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">Cape Town, South Africa</p>
                <p className="text-muted-foreground">+27 82 559 9903</p>
                <p className="text-muted-foreground">clint@kri8it.com</p>
                <p className="text-muted-foreground">francesca@kri8it.com</p>
              </div>
              <div>
                <p className="font-bold">Dublin, Ireland</p>
                <p className="text-muted-foreground">+353 83 317 4599</p>
                <p className="text-muted-foreground">charl@kri8it.ie</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:opacity-80 transition-opacity"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
          </div>
          <p>© {new Date().getFullYear()} Kri8it Digital</p>
        </div>
      </div>
    </footer>
  );
}
