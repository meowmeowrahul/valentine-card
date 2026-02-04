import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute text-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            rotate: [0, 10, -10, 0],
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}