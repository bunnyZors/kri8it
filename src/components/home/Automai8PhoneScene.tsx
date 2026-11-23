import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { CanvasTexture, Group, SRGBColorSpace } from "three";

type SceneProps = { paused: boolean; active: number; onSelect: (index: number) => void; onReady: () => void };
type Palette = { ink: string; paper: string; blue: string; metal: string };

function screenTexture(palette: Palette) {
  const canvas=document.createElement("canvas");canvas.width=420;canvas.height=870;
  const ctx=canvas.getContext("2d");
  if(ctx){
    ctx.fillStyle=palette.paper;ctx.fillRect(0,0,420,870);ctx.fillStyle=palette.ink;
    ctx.font="600 20px Arial";ctx.fillText("9:41",30,42);ctx.beginPath();ctx.roundRect(166,22,88,20,10);ctx.fill();
    ctx.font="bold 52px Arial";ctx.fillText("AutomAi8",42,220);ctx.font="24px Arial";ctx.fillText("Welcome back",42,266);
    ctx.strokeStyle=palette.metal;ctx.lineWidth=2;
    for(const [label,y] of [["Email address",334],["Password",432]] as const){ctx.beginPath();ctx.roundRect(38,y,344,74,10);ctx.stroke();ctx.font="20px Arial";ctx.fillText(label,54,y+44);}
    ctx.fillStyle=palette.blue;ctx.beginPath();ctx.roundRect(38,540,344,74,10);ctx.fill();ctx.fillStyle=palette.paper;ctx.font="bold 24px Arial";ctx.textAlign="center";ctx.fillText("Sign in",210,586);
    ctx.fillStyle=palette.ink;ctx.font="18px Arial";ctx.fillText("Forgot your password?",210,654);ctx.font="18px Arial";ctx.fillText("Automation and AI",210,813);
  }
  const texture=new CanvasTexture(canvas);texture.colorSpace=SRGBColorSpace;return texture;
}

function World({paused,onReady,palette}: SceneProps & {palette:Palette}) {
  const phone=useRef<Group>(null); const time=useRef(0); const ready=useRef(false);
  const {camera,size}=useThree();
  const compact = size.height < 500;
  useEffect(()=>{if("zoom" in camera) camera.zoom=compact?Math.min(size.width/3.7,size.height/5):Math.min(size.width/7.8,size.height/11.5);camera.updateProjectionMatrix();},[camera,size.width,size.height,compact]);
  const screen=useMemo(()=>screenTexture(palette),[palette]);
  useEffect(()=>()=>screen.dispose(),[screen]);
  useFrame((_,delta)=>{
    if(!ready.current){ready.current=true;onReady();}
    if(!paused) time.current+=Math.min(delta,.05);
    if(phone.current){phone.current.rotation.y=-.12+Math.sin(time.current*.35)*.08;phone.current.position.y=Math.sin(time.current*.6)*.06;}
  });
  return <>
    <ambientLight intensity={1.1} /><directionalLight position={[3,5,7]} intensity={3} />
    <Environment resolution={64}><Lightformer intensity={3} position={[0,5,2]} scale={[8,3,1]} /><Lightformer intensity={2} position={[-4,0,4]} scale={[2,8,1]} /></Environment>
    <group ref={phone} rotation={[.02,-.12,-.04]}>
      <RoundedBox args={[1.72,3.5,.19]} radius={.18} smoothness={4}><meshStandardMaterial color={palette.metal} metalness={.9} roughness={.2} /></RoundedBox>
      <RoundedBox args={[1.6,3.36,.05]} radius={.16} position={[0,0,.12]} smoothness={4}><meshStandardMaterial color={palette.ink} roughness={.25} /></RoundedBox>
      <mesh position={[0,0,.151]}><planeGeometry args={[1.45,3.05]} /><meshBasicMaterial map={screen} toneMapped={false} /></mesh>
    </group>
  </>;
}

export default function Automai8PhoneScene(props: SceneProps) {
  const [palette] = useState<Palette>(()=>{ const css=getComputedStyle(document.documentElement);return {ink:css.getPropertyValue("--site-ink").trim(),paper:css.getPropertyValue("--site-paper").trim(),blue:css.getPropertyValue("--site-blue").trim(),metal:css.getPropertyValue("--site-line-light").trim()}; });
  return <Canvas orthographic camera={{position:[0,0,10],zoom:80}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><Suspense fallback={null}><World {...props} palette={palette} /></Suspense></Canvas>;
}