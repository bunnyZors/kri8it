import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { offices, primaryContact } from "@/data/site-content";
import { Action, Eyebrow } from "@/components/home/EditorialElements";
import kri8itLogo from "@/assets/logos/kri8it-primary-logo-white.svg";

export default function Footer() {
  const composeMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = ["First Name: " + fields.get("firstName"), "Last Name: " + fields.get("lastName"), "Email Address: " + fields.get("email"), "Contact Number: " + fields.get("phone"), "", fields.get("message")].join("\n");
    window.location.assign(`${primaryContact}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`);
  };
  return <footer className="site-footer site-dark" id="contact" data-theme="dark"><div className="site-wrap">
    <div className="contact-intro"><Eyebrow number="11">Contact</Eyebrow><h2>Say <span>hello.</span></h2></div>
    <form className="footer-enquiry" onSubmit={composeMessage}>
      {[{name:"firstName",label:"First Name",type:"text",required:true},{name:"lastName",label:"Last Name",type:"text",required:false},{name:"email",label:"Email Address",type:"email",required:true},{name:"phone",label:"Contact Number",type:"tel",required:false}].map(field => <label key={field.name} htmlFor={`footer-${field.name}`}>{field.label}{field.required && " *"}<input id={`footer-${field.name}`} name={field.name} type={field.type} required={field.required} /></label>)}
      <label className="footer-enquiry-message" htmlFor="footer-message">How Can We Help? *<textarea id="footer-message" name="message" rows={3} required /></label>
      <Button variant="editorial" type="submit" className="footer-enquiry-message" title="Open your email app with your message"><span className="editorial-action-icon" aria-hidden="true"><ArrowRight /></span><span className="editorial-action-label">Submit Your Message</span></Button>
    </form>
    <div className="footer-details"><div className="footer-brand"><Link to="/" aria-label="Kri8it home"><img src={kri8itLogo} alt="Kri8it" width="125" height="40" /></Link><h3>Quick Links</h3><nav aria-label="Quick Links">{[{label:"Home",to:"/"},{label:"Services",to:"/services"},{label:"About",to:"/about"},{label:"Automotive",to:"/automotive"},{label:"Travel",to:"/travel-tourism"},{label:"Contact",to:"/#contact"}].map(link=><Link key={link.label} to={link.to}>{link.label}</Link>)}<span>Blog</span></nav></div>{offices.map(office=><address key={office.city}><h3>{office.city === "Cape Town" ? "Get in Touch" : office.city}</h3><p>{office.city}, {office.country}</p><a href={office.telephone}>{office.phone}</a>{office.emails.map(email=><a key={email} href={`mailto:${email}`}>{email}</a>)}</address>)}</div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Kri8it Digital</p><div>Privacy Policy <span aria-hidden="true">|</span> Terms &amp; Conditions</div><Action to={primaryContact}>Talk through your business challenge</Action></div>
  </div></footer>;
}