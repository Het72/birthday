import { useMemo } from "react";
import { motion } from "framer-motion";
import { Rose, Tulip, Daisy, Lily, Leaf, Butterfly, Sparkle } from "./icons/Flowers.jsx";
import "./GardenFinale.css";

const FLOWER_TYPES = [Rose, Tulip, Daisy, Lily];

export default function GardenFinale({ name }) {
  const stems = useMemo(() => {
    const count = 16;
    return Array.from({ length: count }, (_, i) => {
      const Flower = FLOWER_TYPES[i % FLOWER_TYPES.length];
      return {
        id: i,
        Flower,
        left: (i / (count - 1)) * 100,
        size: 46 + ((i * 37) % 30),
        offsetY: i % 3 === 0 ? 0 : i % 3 === 1 ? 14 : 26,
        swayDuration: 4 + (i % 5),
        swayDelay: (i % 6) * 0.3,
        swayDir: i % 2 === 0 ? 1 : -1,
      };
    });
  }, []);

  return (
    <section className="garden" id="garden">
      <div className="garden-sky" aria-hidden="true">
        <motion.div
          className="garden-fly garden-fly--a"
          animate={{ x: ["-10%", "110%"], y: [0, -16, 0, 16, 0] }}
          transition={{ x: { duration: 22, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Butterfly size={30} palette="lavender" />
        </motion.div>
        <motion.div
          className="garden-fly garden-fly--b"
          animate={{ x: ["110%", "-10%"], y: [0, 18, 0, -18, 0] }}
          transition={{ x: { duration: 26, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Butterfly size={26} palette="peach" />
        </motion.div>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="garden-sparkle"
            style={{ left: `${(i * 13) % 100}%`, top: `${(i * 17) % 60}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          >
            <Sparkle size={10 + (i % 3) * 4} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="garden-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="garden-title">
          Happy Birthday, <span>Idiot</span> ❤️
        </h2>
      </motion.div>

      <div className="garden-bed">
        <div className="garden-bed__glow" aria-hidden="true" />
        {stems.map((s) => (
          <motion.div
            key={s.id}
            className="garden-stem"
            style={{ left: `${s.left}%`, bottom: `${s.offsetY}px` }}
            initial={{ opacity: 0, y: 60, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (s.id % 8) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ rotate: [0, 4 * s.swayDir, 0, -4 * s.swayDir, 0] }}
              transition={{ duration: s.swayDuration, delay: s.swayDelay, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "bottom center" }}
            >
              <s.Flower size={s.size} />
            </motion.div>
            <Leaf size={s.size * 0.5} className="garden-stem__leaf" />
          </motion.div>
        ))}
        <div className="garden-bed__ground" aria-hidden="true" />
      </div>

      <motion.p
        className="garden-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
      </motion.p>
    </section>
  );
}
