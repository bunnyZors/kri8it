import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { CanvasTexture, Group, SRGBColorSpace } from "three";
import { automai8Features } from "./automai8-features";

type SceneProps = { paused: boolean; active: number; onSelect: (index: number) => void; onReady: () => void };
type Palette = { ink: string; paper: string; blue: string; metal: string };

function iconTexture(index: number, color: string) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.strokeStyle = color; ctx.lineWidth = 7; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath();
    if (index === 0) { ctx.roundRect(25, 25, 78, 60, 16); ctx.moveTo(44, 85); ctx.lineTo(34, 103); ctx.lineTo(66, 85); }
    else if (index === 1) { ctx.roundRect(47, 20, 34, 60, 17); ctx.moveTo(33, 60); ctx.bezierCurveTo(33, 105, 95, 105, 95, 60); ctx.moveTo(64, 95); ctx.lineTo(64, 112); ctx.moveTo(47, 112); ctx.lineTo(81, 112); }
    else if (index === 2) { ctx.moveTo(30, 75); ctx.lineTo(30, 47); ctx.lineTo(95, 24); ctx.lineTo(95, 98); ctx.lineTo(30, 75); ctx.moveTo(42, 80); ctx.lineTo(50, 107); ctx.lineTo(65, 107); ctx.lineTo(57, 85); }
    else if (index === 3) { for(let i=0;i<10;i++) { const a=-Math.PI/2+i*Math.PI/5; const r=i%2===0?46:22; const x=64+Math.cos(a)*r,y=64+Math.sin(a)*r; if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y); } ctx.closePath(); }
    else { ctx.roundRect(24, 29, 80, 77, 9); ctx.moveTo(24, 50); ctx.lineTo(104, 50); ctx.moveTo(44, 20); ctx.lineTo(44, 38); ctx.moveTo(84, 20); ctx.lineTo(84, 38); ctx.moveTo(44, 78); ctx.lineTo(58, 91); ctx.lineTo(85, 64); }
    ctx.stroke();
  }
  const texture = new CanvasTexture(canvas); texture.colorSpace = SRGBColorSpace;
  return texture;
}

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

function labelTexture(title:string,color:string){
  const canvas=document.createElement("canvas");canvas.width=512;canvas.height=128;const ctx=canvas.getContext("2d");
  if(ctx){ctx.fillStyle=color;ctx.font="600 38px Arial";ctx.textAlign="center";ctx.fillText(title,256,70,490);}
  const texture=new CanvasTexture(canvas);texture.colorSpace=SRGBColorSpace;return texture;
}

function OrbitIcon({ index, paused, active, onSelect, palette }: { index: number; paused: boolean; active: number; onSelect: (i:number)=>void; palette: Palette }) {
  const group = useRef<Group>(null);
  const time = useRef(0);
  const texture = useMemo(()=>iconTexture(index,palette.blue),[index,palette.blue]);
  const label=useMemo(()=>labelTexture(automai8Features[index]?.title??"",palette.paper),[index,palette.paper]);
  useEffect(()=>()=>texture.dispose(),[texture]);
  useEffect(()=>()=>label.dispose(),[label]);
  const feature = automai8Features[index];
  useFrame((_, delta)=>{
    if(!group.current) return;
    if(!paused) time.current += Math.min(delta,.05)*.12;
    const angle = Math.PI/2-index*Math.PI*2/5+time.current;
    group.current.position.set(Math.cos(angle)*2.55,Math.sin(angle)*2.15,Math.cos(angle)*.6+.8);
  });
  if(!feature) return null;
  return <group ref={group}>
    <mesh rotation={[Math.PI/2,0,0]} onClick={()=>onSelect(index)}>
      <cylinderGeometry args={[.37,.37,.16,40]} />
      <meshStandardMaterial color={active===index?palette.blue:palette.metal} metalness={.65} roughness={.26} />
    </mesh>
    <mesh position={[0,0,.11]}><planeGeometry args={[.52,.52]} /><meshBasicMaterial map={texture} transparent depthWrite={false} /></mesh>
    <sprite position={[0,index===0?.58:-.59,.12]} scale={[1.7,.42,1]} onClick={()=>onSelect(index)}><spriteMaterial map={label} transparent depthTest={false} /></sprite>
  </group>;
}

function World({paused,active,onSelect,onReady,palette}: SceneProps & {palette:Palette}) {
  const phone=useRef<Group>(null); const time=useRef(0); const ready=useRef(false);
  const {camera,size}=useThree();
  useEffect(()=>{camera.position.z=size.width/size.height<1?12:10;camera.updateProjectionMatrix();},[camera,size.width,size.height]);
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
    {automai8Features.map((f,i)=><OrbitIcon key={f.title} index={i} paused={paused} active={active} onSelect={onSelect} palette={palette} />)}
  </>;
}

export default function Automai8PhoneScene(props: SceneProps) {
  const [palette] = useState<Palette>(()=>{ const css=getComputedStyle(document.documentElement);return {ink:css.getPropertyValue("--site-ink").trim(),paper:css.getPropertyValue("--site-paper").trim(),blue:css.getPropertyValue("--site-blue").trim(),metal:css.getPropertyValue("--site-line-light").trim()}; });
  return <Canvas camera={{position:[0,0,10],fov:40}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><Suspense fallback={null}><World {...props} palette={palette} /></Suspense></Canvas>;
}