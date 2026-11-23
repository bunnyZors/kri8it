import { useState } from "react";
import { CalendarDays, ChartNoAxesCombined, MessagesSquare, Headset, Network, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { automai8Features } from "./automai8-features";
import handPhoneAsset from "@/assets/automai8-hand-grounded.webp.asset.json";

const featureIcons = [MessagesSquare, Headset, ChartNoAxesCombined, BadgeCheck, CalendarDays];

function FeaturePreview({ index }: { index: number }) {
  return <span className={`phone-card-preview phone-card-preview-${index}`} aria-hidden="true"><span className="phone-card-dots"><i /><i /><i /></span><span className="phone-card-lines"><i /><i /><i /></span></span>;
}

export default function Automai8Infographic() {
  const [active,setActive]=useState(0);
  return <figure className="automai8-infographic automai8-phone-infographic">
    <figcaption className="automai8-graphic-caption"><Network aria-hidden="true" /><span>Connected marketing + sales</span><span className="automai8-preview">automai8.digital</span></figcaption>
    <div className="automai8-phone-canvas" data-scene-ready="true">
      <img className="automai8-hand-phone" src={handPhoneAsset.url} alt="Hand holding an iPhone displaying AutomAi8’s connected conversations and unified inbox mobile page" width={1367} height={1348} />
      <div className="phone-callout-overlay">{automai8Features.map((f,i)=>{const Icon=featureIcons[i]??MessagesSquare;return <Button key={f.title} variant="ghost" className="phone-orbit-callout" aria-pressed={active===i} onClick={()=>setActive(i)}><FeaturePreview index={i} /><span className="phone-card-heading"><span className="phone-mobile-icon"><Icon aria-hidden="true" /></span><span className="phone-callout-title">{f.title}</span></span><span className="phone-callout-copy">{f.description}</span></Button>;})}</div>
    </div>
    <div className="phone-feature-list" aria-label="AutomAi8 features">{automai8Features.map((f,i)=>{const Icon=featureIcons[i]??MessagesSquare;return <Button key={f.title} variant="ghost" className="phone-mobile-callout" aria-pressed={active===i} onClick={()=>setActive(i)}><FeaturePreview index={i} /><span className="phone-mobile-icon"><Icon aria-hidden="true" /></span><span className="min-w-0"><span className="phone-callout-title">{f.title}</span><span className="phone-callout-copy">{f.description}</span></span></Button>;})}</div>
  </figure>;
}