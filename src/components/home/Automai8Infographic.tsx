import { useState } from "react";
import { CalendarCheck, Check, MessageCircle, Mic, Network, Pause, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import interfaceAsset from "@/assets/automai8/social-planner.png.asset.json";

const whatsappFeatures = [
  "Browse products and offers in swipeable cards",
  "Tap, choose and explore with intelligent replies",
  "Make enquiries using forms within WhatsApp",
  "Book appointments without leaving the conversation",
  "Keep leads moving with connected follow-ups and records",
];

export default function Automai8Infographic() {
  const [paused, setPaused] = useState(false);
  return (
    <figure className="automai8-infographic" aria-label="AutomAi8 interface with Coversational AI, AI Front Desk, Smarter Marketing, Reputation management and Social Planner features">
      <figcaption className="automai8-graphic-caption"><Network aria-hidden="true" /><span>Connected marketing + sales</span><span className="automai8-preview">A look ahead / 2027</span><Button variant="ghost" size="icon" className="automai8-motion-toggle" aria-label={paused ? "Play infographic animation" : "Pause infographic animation"} title={paused ? "Play animation" : "Pause animation"} aria-pressed={paused} onClick={event => {
        const next = !paused;
        setPaused(next);
        event.currentTarget.closest("figure")?.dispatchEvent(new CustomEvent("automai8-motion-toggle", { detail: next }));
      }}>{paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}</Button></figcaption>
      <div className="automai8-scene">
      <svg className="automai8-connectors system-lines" viewBox="0 0 600 800" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M300 190V360" pathLength="1" />
        <path d="M300 490V610H145V680" pathLength="1" />
        <path d="M300 610H455V680" pathLength="1" />
      </svg>
      <div className="automai8-popout automai8-whatsapp">
        <div className="automai8-feature-title"><span className="automai8-feature-icon"><MessageCircle aria-hidden="true" /></span><h3>Coversational AI</h3></div>
        <ul>{whatsappFeatures.map(feature => <li key={feature}><Check aria-hidden="true" /><span>{feature}</span></li>)}</ul>
      </div>
      <div className="automai8-device-stage">
        <span className="automai8-floating-icon automai8-floating-message" aria-hidden="true"><MessageCircle /></span>
        <span className="automai8-floating-icon automai8-floating-voice" aria-hidden="true"><Mic /></span>
        <span className="automai8-floating-icon automai8-floating-calendar" aria-hidden="true"><CalendarCheck /></span>
        <div className="automai8-device-shadow" aria-hidden="true" />
        <div className="automai8-interface"><div className="automai8-device"><img src={interfaceAsset.url} width="621" height="420" alt="The approved AutomAi8 Social Planner interface, showing content, calendar and approvals alongside draft, scheduled, in-review and published posts." loading="lazy" /></div><span className="automai8-interface-caption">AutomAi8 / Social Planner</span></div>
      </div>
      <div className="automai8-feature-row">
        <div className="automai8-popout"><div className="automai8-feature-title"><span className="automai8-feature-icon"><Mic aria-hidden="true" /></span><h3>AI Front Desk</h3></div><p>An intelligent voice assistant that can answer calls, manage enquiries and help book appointments, even when your team is busy.</p></div>
        <div className="automai8-popout"><div className="automai8-feature-title"><span className="automai8-feature-icon"><CalendarCheck aria-hidden="true" /></span><h3>Smarter Marketing</h3></div><p>Plan, schedule and approve social content in one place. Less back-and-forth, with more time for your team to focus on the work that matters.</p></div>
        <div className="automai8-popout"><div className="automai8-feature-title"><span className="automai8-feature-icon"><Star aria-hidden="true" /></span><h3>Reputation management</h3></div><p>Helps businesses request, monitor and respond to customer reviews.</p></div>
        <div className="automai8-popout"><div className="automai8-feature-title"><span className="automai8-feature-icon"><CalendarCheck aria-hidden="true" /></span><h3>Social Planner</h3></div><p>A space within the CRM to plan, approve and schedule social content.</p></div>
      </div>
      </div>
    </figure>
  );
}