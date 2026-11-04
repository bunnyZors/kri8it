import { ArrowDown, ArrowUpRight } from "lucide-react";
import { capabilities, engagement, hero, primaryContact, process, sectors, testimonials } from "@/data/site-content";
import ClientMarquee from "@/components/ClientMarquee";
import { Link } from "@/lib/router-compat";
import { Action, Eyebrow, OrbitalGraphic } from "./EditorialElements";

export function HomeHero() {
  return <><section className="site-hero" data-theme="dark" aria-labelledby="hero-heading"><div className="site-wrap hero-layout">
    <div className="hero-copy"><div data-hero-reveal><Eyebrow>{hero.eyebrow}</Eyebrow></div><h1 id="hero-heading" data-hero-reveal>Clearer direction<br />that moves business<br /><span>forward.</span></h1>
    <p className="hero-description" data-hero-reveal>{hero.description}</p>
    <div className="hero-actions" data-hero-reveal><Action to={primaryContact} primary>Talk through your business challenge</Action><Action to="/services">Let's shape your next step</Action></div>
    </div><OrbitalGraphic />
    <div className="hero-bottom"><p>{hero.experience}</p><ArrowDown aria-hidden="true" size={20} /></div>
  </div></section><section className="original-trust-bar site-dark" aria-label="Trusted by"><div className="site-wrap"><ClientMarquee delay={0} /></div></section></>;
}
export function StrategicPremise() {
  return <section className="site-section site-light premise" data-theme="light"><div className="site-wrap"><Eyebrow number="01">Start with the right question</Eyebrow>
    <h2 className="kinetic-heading">Start with a question your business needs to <span className="kinetic-word"><span>answer.</span><span aria-hidden="true" className="kinetic-fill">answer.</span></span></h2>
    <div className="premise-bottom"><span className="section-note">Business first.<br />People at the centre.</span><div className="site-prose"><p>We work with leaders and teams who want considered advice and are willing to contribute their knowledge to the work.</p><p>Fit depends on the question, the people involved and the help required. We begin by understanding the purpose of the work, the people it needs to serve and what is already in place.</p><p>That gives us a reason for the next step, whether it is strategic advice, creative work, a website improvement, a campaign or a systems change.</p></div></div>
  </div></section>;
}
export function CapabilityJourney() {
  return <section id="services" className="site-section site-dark capability-section" data-theme="dark"><div className="site-wrap capability-intro"><Eyebrow number="02">Consultancy & delivery</Eyebrow><div className="section-title-row"><h2>One direction.<br /><span className="site-subtle">The right capabilities.</span></h2><Action to="/services">Explore our services</Action></div></div>
  <div className="capability-viewport"><ol className="capability-track">{capabilities.map((item,i)=><li className="capability-panel" key={item.title}><div className="capability-top"><span>0{i+1} / 05</span><ArrowUpRight size={20} aria-hidden="true" /></div><CapabilityArt kind={item.kind} /><h3>{item.title}</h3><p>{item.text}</p><p className="capability-detail">{item.detail}</p></li>)}</ol></div>
  </section>;
}
export function SectorFocus() {
  return <section id="focus" className="site-section site-light" data-theme="light"><div className="site-wrap"><Eyebrow number="03">Sector focus</Eyebrow><div className="section-title-row"><h2>Context changes<br />the work.</h2><p className="section-intro">Considered direction, shaped around the business and the people it serves.</p></div><div className="sector-grid">{sectors.map((sector,i)=><article key={sector.title}><div className={`sector-placeholder sector-${i}`} role="img" aria-label={sector.placeholder}><div className="sector-geometry" aria-hidden="true">{i===0 ? <svg viewBox="0 0 600 350" fill="none"><path d="M-50 400L310 20M190 400L440 20M430 400L570 20" /><path d="M0 260H600M0 170H600M0 100H600" /></svg> : <svg viewBox="0 0 600 350" fill="none">{[45,70,100,135,175,220].map(r=><ellipse key={r} cx="300" cy="175" rx={r*1.7} ry={r} />)}<path d="M0 175H600" /></svg>}</div><span>{sector.placeholder}</span></div><p className="sector-category">{sector.category}</p><h3>{sector.title}</h3><p className="site-prose">{sector.text}</p><Action to={sector.to}>Explore {sector.title}</Action></article>)}</div></div></section>;
}
export function WorkingProcess() {
  return <section id="process" className="site-section site-light process-section" data-theme="light"><div className="site-wrap process-layout"><div className="process-heading"><Eyebrow number="04">How we work</Eyebrow><h2>Clear decisions.<br />Practical progress.</h2><p className="site-prose">A considered direction, brought into use with the people who need it.</p></div><div className="process-list"><svg className="process-line" preserveAspectRatio="none" viewBox="0 0 2 100" aria-hidden="true"><path d="M1 0V100" className="process-base" /><path d="M1 0V100" className="process-draw" pathLength="1" /></svg><ol>{process.map((step,i)=><li key={step.title}><span className="process-number">0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></div></section>;
}
export function Automai8Section() {
  return <section id="automai8" className="site-section site-dark automation-section" data-theme="dark"><div className="site-wrap"><Eyebrow number="05">Technology with purpose</Eyebrow><div className="automation-grid"><div><h2>Human judgement.<br /><span className="site-callout">Useful automation.</span></h2><div className="site-prose"><p>Kri8it is the agency and consulting partner. AutomAi8 is Kri8it's automation and AI brand.</p><p>AutomAi8 can support lead management, retention, attribution and workflows. AI's role, human decision points and fallback behaviour are defined during scoping.</p></div><Action to="/services#delivery">Explore AI & automation</Action></div><div className="system-diagram" role="img" aria-label="AutomAi8 sits within Kri8it’s consulting boundary, with human decisions and fallback behaviour defined during scoping."><div className="system-boundary-label">Kri8it <span>Agency & consulting partner</span></div><svg viewBox="0 0 480 360" fill="none" aria-hidden="true"><path className="system-flow" d="M30 85H140V180H240M30 275H140V180M240 180H340V85H450M340 180V275H450" pathLength="1" /><circle cx="240" cy="180" r="94" className="system-orbit" /><circle cx="240" cy="180" r="121" className="system-orbit system-outer" /><rect x="163" y="143" width="154" height="74" rx="4" /><text x="240" y="186" textAnchor="middle" className="system-title">AutomAi8</text><text x="30" y="64">Lead management</text><text x="30" y="307">Retention</text><text x="450" y="64" textAnchor="end">Attribution</text><text x="450" y="307" textAnchor="end">Workflows</text></svg><p>Human decisions / Clear boundaries / Fallback behaviour</p></div></div></div></section>;
}
export function ProofSection() {
  return <section id="proof" className="site-section site-light proof-section" data-theme="light"><div className="site-wrap"><Eyebrow number="06">In good company</Eyebrow><h2>Partnership, in our<br />clients' words.</h2><div className="quote-grid">{testimonials.map(item=><figure key={item.name}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote><figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption></figure>)}</div></div></section>;
}
export function EngagementSection() {
  return <section className="site-section site-dark" data-theme="dark"><div className="site-wrap engagement-grid"><div><Eyebrow number="07">A useful next step</Eyebrow><h2>Start with the question.<br /><span className="site-subtle">Shape what follows.</span></h2><Action to={primaryContact}>Talk through your business challenge</Action></div><ol className="engagement-list">{engagement.map((step,i)=><li key={step.title}><span>0{i+1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>;
}