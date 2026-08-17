import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Petal, Heart, Sparkle } from "./icons/Flowers.jsx";
import "./SurpriseReveal.css";

function BurstParticle({ angle, distance, delay, kind }) {
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  const rotate = (Math.random() - 0.5) * 360;

  return (
    <motion.div
      className="burst-particle"
      initial={{ x: 0, y: 0, opacity: 1, scale: 0.4, rotate: 0 }}
      animate={{ x, y, opacity: 0, scale: 1, rotate }}
      transition={{ duration: 1.5 + Math.random() * 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {kind}
    </motion.div>
  );
}

function Burst() {
  const particles = useMemo(() => {
    const kinds = [
      <Petal key="p1" size={18} color="#f7a8c4" />,
      <Petal key="p2" size={16} color="#ffc79a" />,
      <Petal key="p3" size={17} color="#c9aef0" />,
      <Heart key="h1" size={16} color="#f0789f" />,
      <Sparkle key="s1" size={14} />,
    ];
    return Array.from({ length: 26 }, (_, i) => ({
      id: i,
      angle: (Math.PI * 2 * i) / 26 + Math.random() * 0.3,
      distance: 90 + Math.random() * 140,
      delay: Math.random() * 0.25,
      kind: kinds[i % kinds.length],
    }));
  }, []);

  return (
    <div className="burst-wrap" aria-hidden="true">
      {particles.map((p) => (
        <BurstParticle key={p.id} {...p} />
      ))}
    </div>
  );
}

export default function SurpriseReveal({ name, revealed }) {
  return (
    <section className="surprise" id="surprise">
      <AnimatePresence>{revealed && <Burst />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="waiting"
            className="surprise-waiting"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkle size={22} />
            <p>your surprise is waiting above ✿</p>
          </motion.div>
        ) : (
          <motion.div
            key="card"
            className="surprise-card"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="surprise-card__ring" />
            <p className="surprise-card__eyebrow">✿ A little wish, wrapped in petals ✿</p>
            <h2 className="surprise-card__title">{name},</h2>
            <p className="surprise-card__body">
              I hope your day is filled with everything that makes you smile… although I’d like to contribute at least
              one of those smiles. May this year bloom with soft mornings, so many laughs and blushes, a little 
              less clumsy😂 and be a full idiot around me.
            </p>
            {/* <p className="surprise-card__signoff" >~ Het</p> */}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
