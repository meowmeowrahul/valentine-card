import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useState } from "react";

interface HeartButtonProps {
  children: React.ReactNode;
}

export function HeartButton({ children }: HeartButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.button
      onClick={() => setIsLiked(!isLiked)}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg flex items-center gap-3 shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        animate={isLiked ? {
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        <Heart
          size={24}
          fill={isLiked ? "white" : "none"}
        />
      </motion.div>
    </motion.button>
  );
}
