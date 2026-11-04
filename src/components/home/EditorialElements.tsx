import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return <p className="site-eyebrow"><span>{number}</span>{children}</p>;
}
export function Action({ children, to, primary = false }: { children: ReactNode; to: string; primary?: boolean }) {
  const contents = <>{primary && <span className="editorial-action-icon" aria-hidden="true"><ArrowRight /></span>}<span className="editorial-action-label">{children}</span></>;
  return <Button asChild variant={primary ? "editorial" : "editorialLink"} className="site-action">{to.startsWith("mailto:") || to.startsWith("tel:") ? <a href={to}>{contents}</a> : <Link to={to}>{contents}</Link>}</Button>;
}
export function OrbitalGraphic() {
  return <svg className="hero-eight" viewBox="0 0 1474 1119" fill="none" aria-hidden="true">
    <g className="eight-scroll">
      <path className="eight-path" d="M.5,1118.81c7.16-197.99,130.53-379,317.92-456.35.22.84.54,2.06.93,3.55,6.13,22.92,28.6,86.14,62.22,143.23,41.07,69.74,93.26,113.16,91.02,113.72-4.21,1.06-.14.04-19.31,5.18-93.19,24.99-150,103.46-157.02,190.66" />
      <path className="eight-path" d="M1473.76,654.49c-10.93,1.19-21.9,3.23-32.85,6.17-35.47,9.51-67.67,30.81-67.67,30.81-49.61,34.17-88.1,82.15-110.68,138-6.51,19.28-13.02,38.55-19.52,57.83l-244.7-138.59-16.4-9.28,47.09-81.08.92.53c61.42-133.4,181.62-242.19,334.55-283.19,36.45-9.77,73.04-15.36,109.25-17.04" />
      <path className="eight-path" d="M903.48,1118.8l-163.55-93.48-81.08-47.09c-34.86-22.06-69.72-44.11-104.59-66.16-45.03-35.57-83.69-78.53-114.33-127.05,0,0-41.14-65.74-61.09-140.15C305.66,371.9,467.65,91.27,740.62,18.09c251.13-67.33,508.73,64.33,605.33,298.35-2.38.64-10.77,2.86-13.14,3.52-153.26,43.26-247.27,148.72-247.27,148.72,0,0-1.07-6.35-2.74-12.55-31.04-115.8-150.08-184.51-265.88-153.47-115.8,31.04-184.51,150.08-153.47,265.88v.02c9.52,35.48,28.48,65.46,28.48,65.46,16.6,24.66,38.44,45.34,63.97,60.57,25.38,13.04,50.76,26.08,76.17,39.11l55.71,30.52,381.88,218.26,81.08,47.09-.53.92c44.73,20.59,86.39,47.56,123.56,80.07" />
    </g>
  </svg>;
}