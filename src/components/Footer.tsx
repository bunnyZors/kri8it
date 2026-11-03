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
    <footer id="contact" style={{ background: "#ffffff" }}>
      <div className="section-padding pb-0 max-w-7xl mx-auto">
        {/* Say hello heading */}
        <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[hsl(230,40%,15%)] mb-12">
          Say <span className="text-[#049AD9]">hello.</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-24">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8 w-full"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(230,10%,45%)] mb-2 block">
                  First Name <span className="text-[#049AD9]">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-[hsl(230,10%,85%)] pb-2 text-[hsl(230,40%,15%)] focus:border-[#049AD9] outline-hidden transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(230,10%,45%)] mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[hsl(230,10%,85%)] pb-2 text-[hsl(230,40%,15%)] focus:border-[#049AD9] outline-hidden transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(230,10%,45%)] mb-2 block">
                  Email Address <span className="text-[#049AD9]">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-[hsl(230,10%,85%)] pb-2 text-[hsl(230,40%,15%)] focus:border-[#049AD9] outline-hidden transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(230,10%,45%)] mb-2 block">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-[hsl(230,10%,85%)] pb-2 text-[hsl(230,40%,15%)] focus:border-[#049AD9] outline-hidden transition-colors"
                />
              </div>
            </div>
            <div>
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(230,10%,45%)] mb-2 block">
                How Can We Help? <span className="text-[#049AD9]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-[hsl(230,10%,85%)] pb-2 text-[hsl(230,40%,15%)] focus:border-[#049AD9] outline-hidden transition-colors resize-y"
                />
            </div>
            <button
              type="submit"
              className="shimmer-btn bg-[#049AD9] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Submit Your Message
            </button>
          </form>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-[hsl(230,10%,60%)] mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-[hsl(230,40%,15%)] hover:text-[#049AD9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-[hsl(230,10%,60%)] mb-8">
              Get in Touch
            </h4>
            <div className="space-y-6 text-base">
              <div className="space-y-1.5">
                <p className="font-bold text-[hsl(230,40%,15%)]">Cape Town, South Africa</p>
                <p className="text-[hsl(230,10%,45%)]">+27 82 559 9903</p>
                <p className="text-[hsl(230,10%,45%)]">clint@kri8it.com</p>
                <p className="text-[hsl(230,10%,45%)]">francesca@kri8it.com</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold text-[hsl(230,40%,15%)]">Dublin, Ireland</p>
                <p className="text-[hsl(230,10%,45%)]">+353 83 317 4599</p>
                <p className="text-[hsl(230,10%,45%)]">charl@kri8it.ie</p>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#049AD9] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - full width */}
      <div className="border-t border-[hsl(230,10%,85%)] mt-12 py-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[hsl(230,10%,45%)]">
          <div className="flex gap-4">
            <a href="#" className="hover:text-[hsl(230,40%,15%)] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[hsl(230,40%,15%)] transition-colors">Terms & Conditions</a>
          </div>
          <p>© {new Date().getFullYear()} Kri8it Digital</p>
        </div>
      </div>
    </footer>
  );
}
