import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox, useTexture } from "@react-three/drei";
import { Group, SRGBColorSpace } from "three";
import screenAsset from "@/assets/automai8-mobile-conversations.png.asset.json";

type SceneProps = { paused: boolean; active: number; onSelect: (index: number) => void; onReady: () => void };
type Palette = { ink: string; paper: string; blue: string; metal: string };

function World({paused,onReady,palette}: SceneProps & {palette:Palette}) {
  const phone=useRef<Group>(null); const time=useRef(0); const ready=useRef(false);
  const {camera,size}=useThree();
  const compact = size.height < 500;
  useEffect(()=>{if("zoom" in camera) camera.zoom=compact?Math.min(size.width/3.7,size.height/5):Math.min(size.width/7.8,size.height/11.5);camera.updateProjectionMatrix();},[camera,size.width,size.height,compact]);
  const screen=useTexture(screenAsset.url);
  useEffect(()=>{screen.colorSpace=SRGBColorSpace;screen.needsUpdate=true;},[screen]);
  useFrame((_,delta)=>{
    if(!ready.current){ready.current=true;onReady();}
    if(!paused) time.current+=Math.min(delta,.05);
    if(phone.current){phone.current.rotation.y=-.24+Math.sin(time.current*.35)*.05;phone.current.position.y=Math.sin(time.current*.6)*.06;}
  });
  return <>
    <ambientLight intensity={1.1} /><directionalLight position={[3,5,7]} intensity={3} />
    <Environment resolution={64}><Lightformer intensity={3} position={[0,5,2]} scale={[8,3,1]} /><Lightformer intensity={2} position={[-4,0,4]} scale={[2,8,1]} /></Environment>
    <group ref={phone} rotation={[.22,-.24,.3]} scale={1.25}>
      <RoundedBox args={[1.72,3.5,.19]} radius={.18} smoothness={6}><meshStandardMaterial color={palette.metal} metalness={.95} roughness={.18} /></RoundedBox>
      <RoundedBox args={[1.64,3.42,.055]} radius={.16} position={[0,0,.12]} smoothness={6}><meshStandardMaterial color={palette.ink} roughness={.2} /></RoundedBox>
      <mesh position={[0,0,.166]}><planeGeometry args={[1.48,3.2]} /><meshBasicMaterial map={screen} toneMapped={false} /></mesh>
      <RoundedBox args={[.62,.15,.025]} radius={.07} position={[0,1.53,.18]} smoothness={4}><meshStandardMaterial color={palette.ink} roughness={.4} /></RoundedBox>
      <RoundedBox args={[.04,.36,.08]} radius={.015} position={[-.88,.56,0]}><meshStandardMaterial color={palette.metal} metalness={.9} roughness={.2} /></RoundedBox>
      <RoundedBox args={[.04,.23,.08]} radius={.015} position={[-.88,.1,0]}><meshStandardMaterial color={palette.metal} metalness={.9} roughness={.2} /></RoundedBox>
      <RoundedBox args={[.04,.4,.08]} radius={.015} position={[.88,.48,0]}><meshStandardMaterial color={palette.metal} metalness={.9} roughness={.2} /></RoundedBox>
    </group>
  </>;
}

export default function Automai8PhoneScene(props: SceneProps) {
  const [palette] = useState<Palette>(()=>{ const css=getComputedStyle(document.documentElement);return {ink:css.getPropertyValue("--site-ink").trim(),paper:css.getPropertyValue("--site-paper").trim(),blue:css.getPropertyValue("--site-blue").trim(),metal:css.getPropertyValue("--site-line-light").trim()}; });
  return <Canvas orthographic camera={{position:[0,0,10],zoom:80}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><Suspense fallback={null}><World {...props} palette={palette} /></Suspense></Canvas>;
}