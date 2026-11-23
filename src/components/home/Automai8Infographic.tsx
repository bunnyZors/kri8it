import { CalendarCheck, Check, MessageCircle, Mic, Network } from "lucide-react";
import interfaceAsset from "@/assets/automai8/social-planner.png.asset.json";

const whatsappFeatures = [
  "Browse products and offers in swipeable cards",
  "Tap, choose and explore with intelligent replies",
  "Make enquiries using forms within WhatsApp",
  "Book appointments without leaving the conversation",
  "Keep leads moving with connected follow-ups and records",
];

export default function Automai8Infographic() {
  return (
    <figure className="automai8-infographic" aria-label="AutomAi8 interface with upcoming WhatsApp, AI Front Desk and social marketing capabilities">
      <figcaption className="automai8-graphic-caption"><Network aria-hidden="true" /><span>Connected marketing + sales</span><span className="automai8-preview">A look ahead / 2027</span></figcaption>
      <svg className="automai8-connectors system-lines" viewBox="0 0 600 800" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M300 190V360" pathLength="1" />
        <path d="M300 490V610H145V680" pathLength="1" />
        <path d="M300 610H455V680" pathLength="1" />
      </svg>
      <div className="automai8-popout automai8-whatsapp">
        <div className="automai8-feature-title"><span className="automai8-feature-icon"><MessageCircle aria-hidden="true" /></span><h3>WhatsApp journeys</h3></div>
        <ul>{whatsappFeatures.map(feature => <li key={feature}><Check aria-hidden="true" /><span>{feature}</span></li>)}</ul>
      </div>
      <div className="automai8-interface"><img src={interfaceAsset.url} width="621" height="420" alt="The approved AutomAi8 Social Planner interface, showing content, calendar and approvals alongside draft, scheduled, in-review and published posts." loading="lazy" /><span className="automai8-interface-caption">AutomAi8 / Social Planner</span></div>
      <div className="automai8-feature-row">
        <div className="automai8-popout"><div className="automai8-feature-title"><span className="automai8-feature-icon"><Mic aria-hidden="true" /></span><h3>AI Front Desk</h3></div><p>An intelligent voice assistant that can answer calls, manage enquiries and help book appointments, even when your team is busy.</p></div>
        <div className="automai8-popout"><div className="automai8-feature-title"><span className="automai8-feature-icon"><CalendarCheck aria-hidden="true" /></span><h3>Smarter Marketing</h3></div><p>Plan, schedule and approve social content in one place. Less back-and-forth, with more time for your team to focus on the work that matters.</p></div>
      </div>
    </figure>
  );
}