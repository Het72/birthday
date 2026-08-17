import { useMemo } from "react";
import { motion } from "framer-motion";
import { Petal, Sparkle, Butterfly } from "./icons/Flowers.jsx";
import "./PetalField.css";

const PETAL_COLORS = ["#f7a8c4", "#ffc79a", "#c9aef0", "#ffd6e6"];

function useRandomized(count, factory) {
  return useMemo(() => Array.from({ length: count }, (_, i) => factory(i)), [count]);
}

export default function PetalField() {
  const petals = useRandomized(16, (i) => ({
    id: i,
    left: Math.random() * 100,
    size: 12 + Math.random() * 14,
    duration: 14 + Math.random() * 10,
    delay: Math.random() * 14,
    color: PETAL_COLORS[i % PETAL_COLORS.length],
    drift: (Math.random() - 0.5) * 120,
    spin: Math.random() > 0.5 ? 360 : -360,
  }));

  const sparkles = useRandomized(14, (i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 6 + Math.random() * 8,
    delay: Math.random() * 5,
    duration: 2.5 + Math.random() * 2.5,
  }));

  const butterflies = useRandomized(3, (i) => ({
    id: i,
    top: 15 + i * 28,
    duration: 26 + i * 6,
    delay: i * 3,
    palette: ["pink", "lavender", "peach"][i % 3],
    reverse: i % 2 === 1,
  }));

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((p) => (
        <motion.div
          key={`petal-${p.id}`}
          className="petal-item"
          style={{ left: `${p.left}%` }}
          initial={{ y: "-10vh", x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: [0, p.drift, 0],
            rotate: p.spin,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.08, 0.9, 1],
          }}
        >
          <Petal size={p.size} color={p.color} />
        </motion.div>
      ))}

      {sparkles.map((s) => (
        <motion.div
          key={`sparkle-${s.id}`}
          className="sparkle-item"
          style={{ left: `${s.left}%`, top: `${s.top}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.15, 0.5] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkle size={s.size} />
        </motion.div>
      ))}

      {butterflies.map((b) => (
        <motion.div
          key={`bfly-${b.id}`}
          className="butterfly-item"
          style={{ top: `${b.top}%` }}
          initial={{ x: b.reverse ? "110vw" : "-10vw" }}
          animate={{
            x: b.reverse ? "-10vw" : "110vw",
            y: [0, -24, 0, 24, 0],
          }}
          transition={{
            x: { duration: b.duration, delay: b.delay, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <motion.div
            animate={{ rotateY: [0, 40, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: b.reverse ? "scaleX(-1)" : "none" }}
          >
            <Butterfly size={30} palette={b.palette} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
