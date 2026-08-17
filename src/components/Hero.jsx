import { motion } from "framer-motion";
import { Rose, Tulip, Daisy, Lily, Leaf } from "./icons/Flowers.jsx";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22, delayChildren: 0.2 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ name, onOpenSurprise, revealed }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-frame" aria-hidden="true">
        <motion.div
          className="hero-deco hero-deco--tl"
          animate={{ rotate: [0, -6, 0], y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rose size={64} />
          <Leaf size={30} style={{ position: "absolute", top: 30, left: -14, transform: "rotate(-35deg)" }} />
        </motion.div>

        <motion.div
          className="hero-deco hero-deco--tr"
          animate={{ rotate: [0, 6, 0], y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Tulip size={56} />
        </motion.div>

        <motion.div
          className="hero-deco hero-deco--bl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <Daisy size={44} />
        </motion.div>

        <motion.div
          className="hero-deco hero-deco--br"
          animate={{ rotate: [0, -8, 0], y: [0, -8, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        >
          <Lily size={50} />
        </motion.div>
      </div>

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">

        <motion.h1 className="hero-title" variants={rise}>
          <span className="hero-title__line">Happy Birthday,</span>
          <span className="hero-title__name">{name}</span>
          <span className="hero-title__emoji">🌸 💗</span>
        </motion.h1>

        <motion.p className="hero-message" variants={rise}>
          Some people make life brighter simply by being in it. You’re one of those people.
          Wishing you a day as sweet, soft, and radiant as you are.
        </motion.p>

        <motion.div variants={rise}>
          <motion.button
            className="hero-cta"
            onClick={onOpenSurprise}
            whileHover={{ scale: 1.05, boxShadow: "0 14px 30px rgba(217,98,143,0.35)" }}
            whileTap={{ scale: 0.96 }}
            animate={revealed ? {} : { scale: [1, 1.035, 1] }}
            transition={revealed ? {} : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Open Your Surprise 💝
          </motion.button>
        </motion.div>

        <motion.div className="hero-scroll-hint" variants={rise}>
          <span>scroll to wander through</span>
          <motion.span
            className="hero-scroll-arrow"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
