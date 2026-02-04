import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface ValentineCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

export function ValentineCard({ title, description, imageUrl, delay = 0 }: ValentineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-4 border-pink-200 relative group"
    >
      <motion.div
        className="absolute top-4 right-4 text-pink-500 z-10"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart fill="currentColor" size={32} />
      </motion.div>

      <div className="h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover"
          />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl mb-3 text-pink-600">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}
