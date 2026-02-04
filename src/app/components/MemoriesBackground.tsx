import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const memories = [
  {
    imageUrl: "https://images.unsplash.com/photo-1644331417290-3c1148af795b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWxlbnRpbmUlMjBoZWFydHMlMjByb21hbnRpYyUyMHBpbmt8ZW58MXx8fHwxNzcwMDQwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    position: "top-20 left-10",
    rotation: -12,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1514846528774-8de9d4a07023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzcwMDU3MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    position: "top-40 right-10",
    rotation: 15,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1696613755401-dac200797436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlcyUyMHBpbmslMjBmbG93ZXJzfGVufDF8fHx8MTc3MDA1NzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    position: "bottom-32 left-20",
    rotation: 8,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1696613755401-dac200797436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlcyUyMHBpbmslMjBmbG93ZXJzfGVufDF8fHx8MTc3MDA1NzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    position: "bottom-32 right-20",
    rotation: -5,
  },
];

export function MemoriesBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {memories.map((memory, index) => (
        <motion.div
          key={index}
          className={`absolute ${memory.position} hidden md:block`}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: 0.15,
            scale: 1.5,
            rotate: memory.rotation,
          }}
          transition={{
            duration: 1,
            delay: index * 0.3,
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [memory.rotation, memory.rotation + 5, memory.rotation],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
            }}
            className="w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30"
          >
            <ImageWithFallback
              src={memory.imageUrl}
              alt="Memory"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
