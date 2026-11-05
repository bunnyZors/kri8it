import { Fragment } from "react";
import { ArrowDown, ArrowUpRight, Compass, Handshake, LayoutList, RefreshCw, Rocket } from "lucide-react";
import { automation, capabilities, context, engagement, fit, hero, invitation, primaryContact, process, response, testimonials } from "@/data/site-content";
import ClientMarquee from "@/components/ClientMarquee";
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
    <h2 className="kinetic-heading">What does the work <span className="kinetic-word"><span>need to do?</span><span aria-hidden="true" className="kinetic-fill">need to do?</span></span></h2>
    <div className="premise-bottom"><span className="section-note">{"\n"}</span><div className="site-prose"><p>Your brand may need to explain a business that has changed. Your website may need to make the offer easier to understand. Your marketing may need a clearer audience, message or path to enquiry. A repeated task may be worth automating.</p><p>These are different questions. We begin by understanding the purpose of the work, the people it needs to serve and what is already in place.&nbsp;</p><p>This context gives us a reason for the next step, whether it is strategic advice, creative work, a website improvement, a campaign or a systems change.&nbsp;</p></div></div>
  </div></section>;
}
export function ResponseSection() {
  return <section className="site-section site-light response-section" data-theme="light"><div className="site-wrap response-grid">
    <div><Eyebrow number="02">{response.eyebrow}</Eyebrow><h2 className="kinetic-heading">Make the important decisions before committing to the work.</h2></div>
    <div className="site-prose">{response.paragraphs.map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}</div>
  </div></section>;
}
export function CapabilityJourney() {
  return <section id="services" className="site-section site-dark capability-section" data-theme="dark"><div className="site-wrap capability-intro"><Eyebrow number="03">CAPABILITY JOURNEY</Eyebrow><div className="section-title-row"><h2>Advice and delivery across <span className="site-callout">the work that matters.</span></h2><Action to="/services">See our consultancy and delivery capabilities</Action></div></div>
  <div className="capability-viewport"><ol className="capability-track">{capabilities.map((item,i)=><li className="capability-panel" key={item.title}><span className="capability-number">0{i+1}</span><svg className="capability-arcs" viewBox="0 0 300 300" fill="none" aria-hidden="true"><circle cx="200" cy="100" r="170" /><circle cx="200" cy="100" r="120" /><circle cx="200" cy="100" r="70" /></svg><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol></div>
  </section>;
}
export function UseInContext() {
  return <section className="site-section site-light" data-theme="light"><div className="site-wrap response-grid"><div><Eyebrow number="04">Use in context</Eyebrow><h2>A finished piece of work still <span className="site-callout">has a job to do.</span></h2></div><div className="site-prose">{context.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div></section>;
}
export function WorkingProcess() {
  return <section id="process" className="site-section site-light process-section" data-theme="light"><div className="site-wrap"><Eyebrow number="05">How we work</Eyebrow><div className="section-title-row process-heading-row"><h2><span className="site-callout">We will</span> map, build, test, hand over and support.</h2></div><div className="process-track"><div className="process-progress" aria-hidden="true"><span className="process-progress-fill" /></div><ol className="process-columns">{process.map((step,i)=><li key={step.title}><span className="process-number">0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></div></section>;
}
export function Automai8Section() {
  return <section id="automai8" className="site-section site-dark automation-section" data-theme="dark"><div className="site-wrap automation-grid"><div><Eyebrow number="06">Kri8it · AutomAi8</Eyebrow><h2>Where <span className="site-callout">AutomAi8</span> fits.</h2><div className="site-prose">{automation.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div><div className="system-panel" role="img" aria-label="AutomAi8 sits within the Kri8it system, supporting lead management, retention, attribution and workflows."><span className="system-panel-label">Kri8it</span><svg className="system-lines" viewBox="0 0 600 760" fill="none" aria-hidden="true"><path d="M-20 430C150 424 230 425 262 427" pathLength="1" /><path d="M620 505C470 496 400 492 338 490" pathLength="1" /><path d="M472 -20L472 288" pathLength="1" /></svg><div className="system-module"><strong>AutomAi8</strong><span>Automation and AI</span></div></div></div></section>;
}
export function FitSection() {
  const sectors = [
    { title: "Automotive", eyebrow: "Deep sector experience", to: "/automotive", action: "Discuss an automotive challenge", copy: "Strategic, digital and marketing experience shaped around complex journeys, dealer networks, changing technologies and measurable performance." },
    { title: "Travel & tourism", eyebrow: "Destination to decision", to: "/travel-tourism", action: "Discuss a travel challenge", copy: "Brand, content and digital experiences that help remarkable places and travel businesses turn inspiration into an informed next step." },
  ];
  return <section id="focus"><div className="site-section site-light sector-intro" data-theme="light"><div className="site-wrap response-grid"><div><Eyebrow number="07">SECTOR FOCUS</Eyebrow><h2>Start with a question <span className="site-callout">your business</span> needs to answer.</h2></div><div className="site-prose">{fit.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div></div>
    <div className="site-section site-light sector-band" data-theme="light"><div className="site-wrap sector-list">{sectors.map((sector, index) => <Fragment key={sector.to}>
      {index > 0 && <hr className="sector-divider" aria-hidden="true" />}
      <article className={index % 2 === 1 ? "sector-card sector-card-flip" : "sector-card"}>
      <div className="sector-media" aria-hidden="true"><div className="sector-geometry"><svg viewBox="0 0 600 760" fill="none"><circle className="sector-ring-outer" cx="300" cy="290" r="290" /><circle cx="300" cy="290" r="184" /></svg></div><span>{sector.title}</span></div>
      <div className="sector-copy"><Eyebrow>{sector.eyebrow}</Eyebrow><h3>{sector.title}</h3><div className="site-prose"><p>{sector.copy}</p></div><div className="sector-action"><Action to={sector.to} trailing>{sector.action}</Action></div></div>
    </article></Fragment>)}</div></div>
  </section>;
}
export function EngagementTimeline() {
  const stepIcons = [Compass, LayoutList, Handshake, Rocket, RefreshCw] as const;
  return <section id="engagement" className="site-section site-light engagement-section" data-theme="light"><div className="site-wrap">
    <div className="engagement-head"><Eyebrow number="08">{engagement.eyebrow}</Eyebrow><h2><span className="site-callout">How</span> we work together.</h2><p className="engagement-intro">{engagement.intro}</p></div>
    <ol className="timeline">{engagement.steps.map((step, i) => {
      const Icon = stepIcons[i] ?? Compass;
      return <li key={step.title}><span className="timeline-icon" aria-hidden="true"><Icon /></span><span className="timeline-number" aria-hidden="true">0{i + 1}</span><div className="timeline-body"><h3>{step.title}</h3><p>{step.text}</p></div></li>;
    })}</ol>
  </div></section>;
}
export function ProofSection() {
  return <section id="proof" className="site-section site-dark proof-section" data-theme="dark"><div className="proof-rings" aria-hidden="true"><svg viewBox="0 0 1200 1200" fill="none"><circle cx="600" cy="600" r="420" /><circle cx="600" cy="600" r="585" /></svg></div><div className="site-wrap proof-inner"><Eyebrow number="09">Partnership proof</Eyebrow><h2 className="proof-statement">Partnership, <span>in our clients' words.</span></h2><div className="quote-viewport"><div className="quote-track">{[false, true].map(duplicate => <div key={String(duplicate)} className="quote-set" aria-hidden={duplicate || undefined}>{testimonials.map(item=><figure key={item.name} className="quote-card"><span className="quote-mark" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote><figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption></figure>)}</div>)}</div></div></div></section>;
}
export function EngagementSection() {
  return <section className="site-section site-light conversation-section" data-theme="light"><div className="site-wrap"><Eyebrow number="10">Let's talk</Eyebrow><h2 className="conversation-heading">Tell us what you want the work to <span>achieve.</span></h2><div className="conversation-row"><a href={primaryContact} className="conversation-cta">Talk through your business challenge<ArrowUpRight aria-hidden="true" /></a><div className="site-prose">{invitation.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div></div></section>;
}