import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { CalendarCheck, Megaphone, MessageCircle, Mic, Network, Pause, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { automai8Features } from "./automai8-features";

const PhoneScene = lazy(()=>import("./Automai8PhoneScene"));
const featureIcons = [MessageCircle, Mic, Megaphone, Star, CalendarCheck];

function FeaturePreview({ index }: { index: number }) {
  return <span className={`phone-card-preview phone-card-preview-${index}`} aria-hidden="true"><span className="phone-card-dots"><i /><i /><i /></span><span className="phone-card-lines"><i /><i /><i /></span></span>;
}

export default function Automai8Infographic() {
  const root=useRef<HTMLElement>(null);
  const [mounted,setMounted]=useState(false);
  const [visible,setVisible]=useState(false);
  const [paused,setPaused]=useState(false);
  const [reduced,setReduced]=useState(false);
  const [ready,setReady]=useState(false);
  const [active,setActive]=useState(0);
  useEffect(()=>{
    setMounted(true);
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync=()=>setReduced(media.matches);sync();media.addEventListener("change",sync);
    const observer=new IntersectionObserver(entries=>setVisible(entries.some(e=>e.isIntersecting)),{rootMargin:"100px"});
    if(root.current)observer.observe(root.current);
    return ()=>{observer.disconnect();media.removeEventListener("change",sync);};
  },[]);
  return <figure ref={root} className="automai8-infographic automai8-phone-infographic">
    <figcaption className="automai8-graphic-caption"><Network aria-hidden="true" /><span>Connected marketing + sales</span><span className="automai8-preview">automai8.digital</span>{!reduced&&<Button variant="ghost" size="icon" className="automai8-motion-toggle" aria-label={paused?"Play infographic animation":"Pause infographic animation"} title={paused?"Play animation":"Pause animation"} onClick={()=>setPaused(!paused)}>{paused?<Play />:<Pause />}</Button>}</figcaption>
    <div className="automai8-phone-canvas" data-scene-ready={ready?"true":undefined}>
      {mounted&&<Suspense fallback={<span className="phone-loading">AutomAi8</span>}><PhoneScene paused={paused||reduced||!visible} active={active} onSelect={index=>{setActive(index);setPaused(true);}} onReady={()=>setReady(true)} /></Suspense>}
      <div className="phone-callout-overlay">{automai8Features.map((f,i)=>{const Icon=featureIcons[i]??MessageCircle;return <Button key={f.title} variant="ghost" className="phone-orbit-callout" aria-pressed={active===i} onClick={()=>{setActive(i);setPaused(true);}}><FeaturePreview index={i} /><span className="phone-card-heading"><span className="phone-mobile-icon"><Icon aria-hidden="true" /></span><span className="phone-callout-title">{f.title}</span></span><span className="phone-callout-copy">{f.description}</span></Button>;})}</div>
    </div>
    <div className={`phone-feature-list${mounted?"":" phone-feature-fallback"}`} aria-label="AutomAi8 features">{automai8Features.map((f,i)=>{const Icon=featureIcons[i]??MessageCircle;return <Button key={f.title} variant="ghost" className="phone-mobile-callout" aria-pressed={active===i} onClick={()=>{setActive(i);setPaused(true);}}><FeaturePreview index={i} /><span className="phone-mobile-icon"><Icon aria-hidden="true" /></span><span className="min-w-0"><span className="phone-callout-title">{f.title}</span><span className="phone-callout-copy">{f.description}</span></span></Button>;})}</div>
  </figure>;
}