import { useState } from "react";
import { CalendarCheck, Megaphone, MessageCircle, Mic, Network, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { automai8Features } from "./automai8-features";

const featureIcons = [MessageCircle, Mic, Megaphone, Star, CalendarCheck];

function FeaturePreview({ index }: { index: number }) {
  return <span className={`phone-card-preview phone-card-preview-${index}`} aria-hidden="true"><span className="phone-card-dots"><i /><i /><i /></span><span className="phone-card-lines"><i /><i /><i /></span></span>;
}

export default function Automai8Infographic() {
  const [active,setActive]=useState(0);
  return <figure className="automai8-infographic automai8-phone-infographic">
    <figcaption className="automai8-graphic-caption"><Network aria-hidden="true" /><span>Connected marketing + sales</span><span className="automai8-preview">automai8.digital</span></figcaption>
    <div className="automai8-phone-canvas" data-scene-ready="true">
      <svg className="automai8-phone-keyline" viewBox="0 0 360 720" fill="none" aria-hidden="true">
        <rect x="12" y="12" width="336" height="696" rx="52" />
        <rect x="23" y="23" width="314" height="674" rx="43" />
        <path d="M118 23v15a15 15 0 0 0 15 15h94a15 15 0 0 0 15-15V23M146 36h56M142 677h76M7 142v38M7 207v58M7 283v58M353 205v94" />
        <circle cx="220" cy="36" r="3" />
      </svg>
      <div className="phone-callout-overlay">{automai8Features.map((f,i)=>{const Icon=featureIcons[i]??MessageCircle;return <Button key={f.title} variant="ghost" className="phone-orbit-callout" aria-pressed={active===i} onClick={()=>setActive(i)}><FeaturePreview index={i} /><span className="phone-card-heading"><span className="phone-mobile-icon"><Icon aria-hidden="true" /></span><span className="phone-callout-title">{f.title}</span></span><span className="phone-callout-copy">{f.description}</span></Button>;})}</div>
    </div>
    <div className="phone-feature-list" aria-label="AutomAi8 features">{automai8Features.map((f,i)=>{const Icon=featureIcons[i]??MessageCircle;return <Button key={f.title} variant="ghost" className="phone-mobile-callout" aria-pressed={active===i} onClick={()=>setActive(i)}><FeaturePreview index={i} /><span className="phone-mobile-icon"><Icon aria-hidden="true" /></span><span className="min-w-0"><span className="phone-callout-title">{f.title}</span><span className="phone-callout-copy">{f.description}</span></span></Button>;})}</div>
  </figure>;
}