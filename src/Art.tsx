import type { CSSProperties } from "react";

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const style: CSSProperties = { transformOrigin: `${cx}px ${cy}px` };
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#1c2226" />
      <g className="animate-wheel" style={style} stroke="#f6f5f1" strokeWidth="2">
        <circle cx={cx} cy={cy} r={r - 5} fill="none" strokeWidth="3" />
        <line x1={cx - r + 6} y1={cy} x2={cx + r - 6} y2={cy} />
        <line x1={cx} y1={cy - r + 6} x2={cx} y2={cy + r - 6} />
        <line x1={cx - r * 0.65} y1={cy - r * 0.65} x2={cx + r * 0.65} y2={cy + r * 0.65} />
        <line x1={cx - r * 0.65} y1={cy + r * 0.65} x2={cx + r * 0.65} y2={cy - r * 0.65} />
      </g>
      <circle cx={cx} cy={cy} r="4" fill="#f2b705" />
    </g>
  );
}

export function Scooter({ color = "#ff5a36", moving = false, className = "" }: { color?: string; moving?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 240 144" className={className} role="img" aria-label="Scooter for rent in Nagercoil">
      <ellipse cx="120" cy="138" rx="100" ry="5" fill="#000" opacity=".12" />
      <g className={moving ? "animate-bob" : ""}>
        <path d="M176 28 L176 48 M164 28 L190 28" stroke="#1c2226" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M176 48 L184 112" stroke="#1c2226" strokeWidth="6" strokeLinecap="round" />
        <path d="M32 96 C30 66 52 56 82 56 L124 56 L130 96 Z" fill={color} />
        <rect x="28" y="70" width="6" height="12" rx="3" fill="#e11d48" />
        <path d="M48 56 Q50 44 76 44 L118 44 Q128 44 128 52 L128 58 L48 58 Z" fill="#1c2226" />
        <rect x="124" y="94" width="48" height="9" rx="4.5" fill="#2a3238" />
        <path d="M146 98 L154 54 Q155 48 162 48 L174 48 L180 72 L188 94 L172 100 Z" fill={color} />
        <circle cx="190" cy="36" r="7" fill="#fff6c8" stroke="#1c2226" strokeWidth="3" />
      </g>
      <path d="M162 92 Q184 76 208 92" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
      <Wheel cx={56} cy={112} r={22} />
      <Wheel cx={184} cy={112} r={22} />
    </svg>
  );
}

export function Bike({ color = "#0e9f7e", moving = false, className = "" }: { color?: string; moving?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 240 144" className={className} role="img" aria-label="Bike for rent in Nagercoil">
      <ellipse cx="120" cy="140" rx="104" ry="5" fill="#000" opacity=".12" />
      <g className={moving ? "animate-bob" : ""}>
        <path d="M50 108 L104 90" stroke="#1c2226" strokeWidth="6" strokeLinecap="round" />
        <path d="M96 100 L58 102" stroke="#8b949b" strokeWidth="5" strokeLinecap="round" />
        <rect x="92" y="78" width="52" height="30" rx="8" fill="#2a3238" />
        <path d="M90 70 Q94 48 128 50 L154 58 L148 78 L94 80 Z" fill={color} />
        <path d="M50 62 Q72 52 96 60 L96 76 L56 74 Z" fill="#1c2226" />
        <path d="M156 58 L192 108" stroke="#1c2226" strokeWidth="6" strokeLinecap="round" />
        <path d="M152 52 L166 46 L182 48" stroke="#1c2226" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="170" cy="64" r="7" fill="#fff6c8" stroke="#1c2226" strokeWidth="3" />
      </g>
      <Wheel cx={50} cy={108} r={28} />
      <Wheel cx={192} cy={108} r={28} />
    </svg>
  );
}

export function Palm({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 200" className={className} aria-hidden="true">
      <path d="M50 200 Q46 120 52 60" stroke="#10201f" strokeWidth="6" fill="none" />
      <g className="animate-sway" style={{ transformOrigin: "52px 60px" }} fill="#10201f">
        <path d="M52 60 Q20 40 0 62 Q30 48 52 60Z" /><path d="M52 60 Q84 38 100 60 Q74 46 52 60Z" />
        <path d="M52 60 Q30 20 8 22 Q34 28 52 60Z" /><path d="M52 60 Q74 20 96 24 Q70 30 52 60Z" />
        <path d="M52 60 Q50 20 52 6 Q58 30 52 60Z" />
      </g>
    </svg>
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 50" className={className} aria-hidden="true" fill="#fff" fillOpacity=".75">
      <ellipse cx="40" cy="32" rx="30" ry="14" /><ellipse cx="72" cy="26" rx="26" ry="16" /><ellipse cx="94" cy="34" rx="22" ry="11" />
    </svg>
  );
}
