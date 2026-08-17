import { motion } from "framer-motion";
import { Rose, Daisy, Lily } from "./icons/Flowers.jsx";
import "./WishCards.css";

const WISHES = [
  {
    Icon: Daisy,
    title: "Joy",
    text: "May your days be light, your laughter easy, and your heart full of little happy surprises.",
  },
  {
    Icon: Rose,
    title: "Love",
    text: "Surrounded always by people who cherish you exactly as you are, today and every day after.",
  },
  {
    Icon: Lily,
    title: "Magic",
    text: "A year that blooms with new beginnings, gentle wonder, and dreams that come sweetly true.",
  },
];

export default function WishCards() {
  return (
    <section className="wishes" id="wishes">
      <motion.p
        className="wishes-eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
      </motion.p>

      <div className="wishes-grid">
        {WISHES.map(({ Icon, title, text }, i) => (
          <motion.div
            className="wish-card"
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(200,130,160,0.25)" }}
          >
            <div className="wish-card__icon">
              <Icon size={46} />
            </div>
            <h3 className="wish-card__title">{title}</h3>
            <p className="wish-card__text">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
