import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Network, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { automai8Features } from "./automai8-features";

const PhoneScene = lazy(()=>import("./Automai8PhoneScene"));

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
  const feature=automai8Features[active] ?? automai8Features[0];
  return <figure ref={root} className="automai8-infographic automai8-phone-infographic">
    <figcaption className="automai8-graphic-caption"><Network aria-hidden="true" /><span>Connected marketing + sales</span><span className="automai8-preview">Login screen preview</span>{!reduced&&<Button variant="ghost" size="icon" className="automai8-motion-toggle" aria-label={paused?"Play infographic animation":"Pause infographic animation"} title={paused?"Play animation":"Pause animation"} onClick={()=>setPaused(!paused)}>{paused?<Play />:<Pause />}</Button>}</figcaption>
    <div className="automai8-phone-canvas" data-scene-ready={ready?"true":undefined}>
      {mounted&&<Suspense fallback={<span className="phone-loading">AutomAi8</span>}><PhoneScene paused={paused||reduced||!visible} active={active} onSelect={index=>{setActive(index);setPaused(true);}} onReady={()=>setReady(true)} /></Suspense>}
    </div>
    <div className="phone-feature-tabs" role="group" aria-label="AutomAi8 features">{automai8Features.map((f,i)=><Button key={f.title} variant="ghost" className="phone-feature-tab" aria-pressed={active===i} onClick={()=>{setActive(i);setPaused(true);}}>{f.title}</Button>)}</div>
    <div className="phone-feature-description" aria-live="polite"><h3>{feature.title}</h3><p>{feature.description}</p></div>
  </figure>;
}