import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return <p className="site-eyebrow"><span>{number}</span>{children}</p>;
}
export function Action({ children, to, primary = false }: { children: ReactNode; to: string; primary?: boolean }) {
  const contents = <>{children}<ArrowUpRight aria-hidden="true" /></>;
  return <Button asChild variant={primary ? "editorial" : "editorialLink"} className="site-action h-auto min-h-12 px-0 py-4">{to.startsWith("mailto:") || to.startsWith("tel:") ? <a href={to}>{contents}</a> : <Link to={to}>{contents}</Link>}</Button>;
}
export function OrbitalGraphic() {
  return <svg className="hero-orbit" viewBox="0 0 800 800" fill="none" aria-hidden="true">
    <g className="orbit-scroll">
      <circle cx="400" cy="400" r="318" className="orbit-guide" />
      <ellipse cx="400" cy="400" rx="318" ry="142" transform="rotate(-38 400 400)" className="orbit-path" pathLength="1" />
      <ellipse cx="400" cy="400" rx="318" ry="142" transform="rotate(38 400 400)" className="orbit-path orbit-violet" pathLength="1" />
      <ellipse cx="400" cy="400" rx="160" ry="318" className="orbit-guide" />
      <path d="M82 400H718M400 82V718" className="orbit-guide" />
      <circle cx="400" cy="400" r="64" className="orbit-core" />
      <circle cx="662" cy="223" r="7" className="orbit-node" />
      <circle cx="142" cy="586" r="7" className="orbit-node orbit-violet" />
    </g>
    <text x="400" y="405" textAnchor="middle" className="orbit-label">DIRECTION</text>
    <text x="620" y="704" className="orbit-caption">BUSINESS / PEOPLE / PURPOSE</text>
  </svg>;
}
export function CapabilityArt({ kind }: { kind: string }) {
  return <svg className={`capability-art art-${kind}`} viewBox="0 0 400 240" fill="none" aria-hidden="true">
    {kind === "strategy" && <><path d="M30 190L110 130L180 150L260 65L360 45" /><path d="M30 210H370M30 25V210" className="art-muted" />{[[110,130],[180,150],[260,65]].map(([x,y])=><circle key={x} cx={x} cy={y} r="8" />)}</>}
    {kind === "brand" && <><circle cx="160" cy="120" r="78" /><rect x="180" y="42" width="156" height="156" /><path d="M82 120H338M258 42V198" className="art-muted" /></>}
    {kind === "web" && <><rect x="45" y="35" width="310" height="175" rx="4" /><path d="M45 65H355M180 65V210" /><path d="M70 93H152M70 115H135M70 137H145" className="art-muted" /><rect x="205" y="92" width="122" height="88" /></>}
    {kind === "marketing" && <>{[35,70,105].map(r=><circle key={r} cx="200" cy="120" r={r} />)}<path d="M200 120L340 40M320 40H340V60" /></>}
    {kind === "automation" && <><rect x="154" y="77" width="92" height="86" rx="4" /><path d="M45 120H154M246 120H355M200 25V77M200 163V215" />{[[45,120],[355,120],[200,25],[200,215]].map(([x,y])=><circle key={`${x}${y}`} cx={x} cy={y} r="10" />)}</>}
  </svg>;
}