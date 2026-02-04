import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { FloatingHearts } from "@/app/components/FloatingHearts";
import { ValentineProposal } from "@/app/components/ValentineProposal";
import { MemoriesBackground } from "@/app/components/MemoriesBackground";
import { BackgroundMusic } from "@/app/components/BackgroundMusic";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 relative overflow-hidden flex items-center justify-center">
      <FloatingHearts />
      <MemoriesBackground />
      <BackgroundMusic />

      {/* Main Content */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={60} className="text-white mx-auto" fill="currentColor" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-white flex items-center justify-center gap-4 flex-wrap">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Happy
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-pink-100"
              >
                Valentine's
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Day
              </motion.span>
            </h1>
          </motion.div>

          {/* Valentine Proposal - Full Screen Focus */}
          <ValentineProposal />
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-0 right-0 z-10 text-center text-white"
      >
        <motion.p
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-sm md:text-base"
        >
          For My Cutest😩
        </motion.p>
      </motion.footer>
    </div>
  );
}