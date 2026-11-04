import { Link } from "@/lib/router-compat";
import { offices, primaryContact } from "@/data/site-content";
import { Action, Eyebrow } from "@/components/home/EditorialElements";
import kri8itLogo from "@/assets/logos/kri8it-primary-logo-white.svg";

export default function Footer() {
  return <footer className="site-footer site-dark" id="contact" data-theme="dark"><div className="site-wrap">
    <div className="contact-intro"><Eyebrow number="09">Let's talk</Eyebrow><h2>Tell us what you want<br />the work to <span>achieve.</span></h2><div className="contact-message"><p className="site-prose">Bring us the context, what you have already tried and the question you need to answer. We can talk through what a useful next step would involve.</p><Action to={primaryContact} primary>Talk through your business challenge</Action></div></div>
    <div className="footer-details"><div className="footer-brand"><Link to="/" aria-label="Kri8it home"><img src={kri8itLogo} alt="Kri8it" width="125" height="40" /></Link><p>Digital consultancy<br />and delivery.</p></div>{offices.map(office=><address key={office.city}><h3>{office.city}</h3><p>{office.country}</p><a href={office.telephone}>{office.phone}</a>{office.emails.map(email=><a key={email} href={`mailto:${email}`}>{email}</a>)}</address>)}</div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Kri8it</p><nav aria-label="Explore Kri8it">{[{label:"Services",to:"/services"},{label:"About",to:"/about"},{label:"Automotive",to:"/automotive"},{label:"Travel & tourism",to:"/travel-tourism"}].map(link=><Link key={link.to} to={link.to}>{link.label}</Link>)}</nav><Link to="/#main-content">Back to top ↑</Link></div>
  </div></footer>;
}