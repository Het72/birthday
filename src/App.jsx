import { useCallback, useEffect, useMemo, useState } from "react";
import PetalField from "./components/PetalField.jsx";
import Hero from "./components/Hero.jsx";
import SurpriseReveal from "./components/SurpriseReveal.jsx";
import WishCards from "./components/WishCards.jsx";
import GardenFinale from "./components/GardenFinale.jsx";
import "./App.css";

const NAME = "Nirrrr";
const CONFETTI_COLORS = ["#f7a8c4", "#ffc79a", "#c9aef0", "#f1d27a", "#b6d7a8", "#ffffff"];

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: 4 + Math.random() * 92,
        delay: (index % 8) * 0.08 + Math.random() * 0.12,
        duration: 1.8 + Math.random() * 1.8,
        drift: -120 + Math.random() * 240,
        rotate: Math.random() * 360,
        color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
        size: 8 + Math.random() * 10,
      })),
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setShowConfetti(false), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenSurprise = useCallback(() => {
    setRevealed(true);
    requestAnimationFrame(() => {
      document.getElementById("surprise")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  return (
    <div className="app">
      <div className={`confetti-layer ${showConfetti ? "is-visible" : ""}`} aria-hidden="true">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.left}%`,
              width: `${piece.size}px`,
              height: `${piece.size * 1.55}px`,
              background: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              "--confetti-drift": `${piece.drift}px`,
              transform: `rotate(${piece.rotate}deg)`,
            }}
          />
        ))}
      </div>
      <PetalField />
      <main>
        <Hero name={NAME} onOpenSurprise={handleOpenSurprise} revealed={revealed} />
        <SurpriseReveal name={NAME} revealed={revealed} />
        <WishCards />
        <GardenFinale name={NAME} />
      </main>
    </div>
  );
}
