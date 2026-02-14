import { motion } from "framer-motion";

export default function NextButton({ text, onClick }) {
  return (
    <motion.button
      className="next-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
