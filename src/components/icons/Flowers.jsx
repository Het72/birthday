import { useId } from "react";

/* ---------- Rose ---------- */
export function Rose({ size = 40, className = "", style }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} style={style}>
      <defs>
        <radialGradient id={`rose-${id}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fff0f4" />
          <stop offset="55%" stopColor="#f7a8c4" />
          <stop offset="100%" stopColor="#e06a95" />
        </radialGradient>
      </defs>
      <g fill={`url(#rose-${id})`}>
        <circle cx="32" cy="30" r="17" />
      </g>
      <path
        d="M32 14c5 2 9 7 9 13 0 3-1 6-3 8 4-1 8-4 8-9 0-7-6-13-13-14-4 0-6 1-1 2z"
        fill="#fbcede"
        opacity="0.8"
      />
      <path
        d="M32 46c5-2 8-7 8-12-3 4-7 6-11 6-5 0-9-3-11-7 0 6 4 11 9 13 2 1 3 1 5 0z"
        fill="#d9628f"
        opacity="0.55"
      />
      <path
        d="M32 15c-6 1-11 6-12 12-1 4 0 8 3 11-5-2-9-7-9-13 0-8 7-14 15-14 2 0 3 2 3 4z"
        fill="#ffffff"
        opacity="0.35"
      />
      <path d="M23 44c-3 3-4 7-3 11 3-3 6-4 9-4-2-3-4-5-6-7z" fill="#8fb99a" />
      <path d="M41 44c3 3 4 7 3 11-3-3-6-4-9-4 2-3 4-5 6-7z" fill="#6a9c78" />
    </svg>
  );
}

/* ---------- Tulip ---------- */
export function Tulip({ size = 40, className = "", style }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 80" width={size} height={size} className={className} style={style}>
      <defs>
        <linearGradient id={`tulip-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="45%" stopColor="#ffc79a" />
          <stop offset="100%" stopColor="#f0895a" />
        </linearGradient>
      </defs>
      <path d="M32 74V38" stroke="#7fae8a" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M14 42c6 4 10 10 10 17H16c-3-6-3-12-2-17z" fill="#8fb99a" />
      <path d="M50 42c-6 4-10 10-10 17h8c3-6 3-12 2-17z" fill="#6a9c78" />
      <g fill={`url(#tulip-${id})`}>
        <path d="M32 14c-8 4-13 12-13 21 0 8 6 15 13 15s13-7 13-15c0-9-5-17-13-21z" />
      </g>
      <path d="M32 16c-5 5-8 12-8 19 0 5 2 9 5 12-6-2-10-9-10-16 0-8 5-14 13-15z" fill="#fff2e5" opacity="0.6" />
      <path d="M32 16c3 5 3 20-1 34 5-1 9-7 9-13 0-9-4-17-8-21z" fill="#e0693a" opacity="0.35" />
    </svg>
  );
}

/* ---------- Daisy ---------- */
export function Daisy({ size = 40, className = "", style }) {
  const petals = Array.from({ length: 8 });
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} style={style}>
      <g transform="translate(32,32)">
        {petals.map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-16"
            rx="6.5"
            ry="15"
            fill="#ffffff"
            stroke="#f3d3e2"
            strokeWidth="0.5"
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>
      <circle cx="32" cy="32" r="8.5" fill="#f0c15a" />
      <circle cx="32" cy="32" r="8.5" fill="url(#daisy-center)" />
      <defs>
        <radialGradient id="daisy-center" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffe9b0" />
          <stop offset="100%" stopColor="#e0ab4d" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ---------- Lily ---------- */
export function Lily({ size = 40, className = "", style }) {
  const id = useId();
  const petals = Array.from({ length: 6 });
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} style={style}>
      <defs>
        <linearGradient id={`lily-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbeeff" />
          <stop offset="100%" stopColor="#c9aef0" />
        </linearGradient>
      </defs>
      <g transform="translate(32,32)">
        {petals.map((_, i) => (
          <path
            key={i}
            d="M0 0 C 3 -10, 3 -20, 0 -26 C -3 -20, -3 -10, 0 0 Z"
            fill={`url(#lily-${id})`}
            stroke="#a887d6"
            strokeWidth="0.4"
            transform={`rotate(${i * 60})`}
          />
        ))}
      </g>
      <circle cx="32" cy="32" r="3.5" fill="#e0ab4d" />
    </svg>
  );
}

/* ---------- Leaf ---------- */
export function Leaf({ size = 30, className = "", style }) {
  return (
    <svg viewBox="0 0 40 60" width={size} height={size} className={className} style={style}>
      <path
        d="M20 2C34 14 34 46 20 58C6 46 6 14 20 2Z"
        fill="#8fb99a"
      />
      <path d="M20 4v52" stroke="#6a9c78" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

/* ---------- Petal (falling) ---------- */
export function Petal({ size = 16, className = "", style, color = "#f7a8c4" }) {
  return (
    <svg viewBox="0 0 20 24" width={size} height={size} className={className} style={style}>
      <path
        d="M10 0C16 6 18 14 10 24C2 14 4 6 10 0Z"
        fill={color}
      />
    </svg>
  );
}

/* ---------- Heart ---------- */
export function Heart({ size = 16, className = "", style, color = "#f0789f" }) {
  return (
    <svg viewBox="0 0 32 28" width={size} height={size} className={className} style={style}>
      <path
        d="M16 27C16 27 2 18 2 9.5C2 4.8 5.8 1 10.5 1C13 1 15 2.2 16 4.2C17 2.2 19 1 21.5 1C26.2 1 30 4.8 30 9.5C30 18 16 27 16 27Z"
        fill={color}
      />
    </svg>
  );
}

/* ---------- Sparkle ---------- */
export function Sparkle({ size = 12, className = "", style, color = "#e0ab4d" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style}>
      <path
        d="M12 0C12.5 6.5 13 11.5 24 12C13 12.5 12.5 17.5 12 24C11.5 17.5 11 12.5 0 12C11 11.5 11.5 6.5 12 0Z"
        fill={color}
      />
    </svg>
  );
}

/* ---------- Butterfly ---------- */
export function Butterfly({ size = 28, className = "", style, palette = "pink" }) {
  const id = useId();
  const colors =
    palette === "lavender"
      ? ["#e6d9f7", "#c9aef0"]
      : palette === "peach"
      ? ["#ffe2c6", "#ffc79a"]
      : ["#ffd6e6", "#f7a8c4"];
  return (
    <svg viewBox="0 0 60 44" width={size} height={size * (44 / 60)} className={className} style={style}>
      <defs>
        <linearGradient id={`bfly-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[1]} />
        </linearGradient>
      </defs>
      <line x1="30" y1="10" x2="30" y2="34" stroke="#b98a9e" strokeWidth="1.4" />
      <g fill={`url(#bfly-${id})`} stroke="#e0ab4d" strokeWidth="0.4">
        <path d="M30 12C24 2 8 0 4 8C0 16 10 22 30 16Z" />
        <path d="M30 32C24 42 8 44 4 36C0 28 10 22 30 28Z" />
        <path d="M30 12C36 2 52 0 56 8C60 16 50 22 30 16Z" />
        <path d="M30 32C36 42 52 44 56 36C60 28 50 22 30 28Z" />
      </g>
      <ellipse cx="30" cy="22" rx="2" ry="10" fill="#a35c78" />
    </svg>
  );
}
