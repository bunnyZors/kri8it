import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/site-content";
import kri8itLogo from "@/assets/logos/kri8it-primary-logo-white.svg";
import kri8itLogoDark from "@/assets/logos/kri8it-primary-logo-dark.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      header.current?.style.setProperty("--page-progress", String(height > 0 ? window.scrollY / height : 0));
      const sections = document.querySelectorAll<HTMLElement>("[data-theme]");
      let theme = "dark";
      sections.forEach(section => { const box = section.getBoundingClientRect(); if (box.top <= 45 && box.bottom > 45) theme = section.dataset['theme'] ?? "dark"; });
      header.current?.setAttribute("data-header-theme", theme);
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => { window.removeEventListener("scroll", queue); window.removeEventListener("resize", queue); cancelAnimationFrame(frame); };
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (event.key !== "Tab") return;
      const links = menu.current?.querySelectorAll<HTMLAnchorElement>("a");
      const first = links?.[0];
      const last = links?.[links.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); toggle.current?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); toggle.current?.focus(); }
      else if (document.activeElement === toggle.current) { event.preventDefault(); (event.shiftKey ? last : first)?.focus(); }
    };
    document.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", keydown); };
  }, [open]);
  const close = () => { setOpen(false); toggle.current?.focus(); };
  return <header ref={header} className="site-header" data-open={open} data-header-theme="dark">
    <a className="skip-link" href="#main-content" onClick={(event) => { const target = document.getElementById("main-content") ?? document.querySelector<HTMLElement>("h1"); if (target) { event.preventDefault(); target.setAttribute("tabindex", "-1"); target.focus(); target.scrollIntoView(); } }}>Skip to content</a>
    <div className="site-progress" aria-hidden="true" />
    <nav className="site-wrap header-inner" aria-label="Main navigation"><Link to="/" aria-label="Kri8it home" className="site-brand"><img src={kri8itLogo} alt="Kri8it" width="125" height="40" className="brand-logo brand-logo-on-dark" /><img src={kri8itLogoDark} alt="" aria-hidden="true" width="125" height="40" className="brand-logo brand-logo-on-light" /></Link>
    <div className="desktop-nav">{navigation.map(link=><Button key={link.id} variant="ghost" asChild className="site-nav-link"><Link to={`/#${link.id}`}>{link.label}{link.id==="contact" && <ArrowUpRight aria-hidden="true" />}</Link></Button>)}</div>
    <Button ref={toggle} variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open ? <X /> : <Menu />}</Button></nav>
    {open && <div id="mobile-menu" ref={menu} className="mobile-menu"><nav aria-label="Mobile navigation">{navigation.map((link,i)=><Link key={link.id} to={`/#${link.id}`} onClick={close}><span>0{i+1}</span>{link.label}<ArrowUpRight aria-hidden="true" /></Link>)}</nav></div>}
  </header>;
}