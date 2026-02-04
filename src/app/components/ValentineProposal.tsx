import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export function ValentineProposal() {
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const noMessages = [
    "No",
    "Are you sure? 🥺",
    "Really? 💭",
    "Please reconsider! 🙏",
    "Don't break my heart! 💔",
    "Think of the chocolates! 🍫",
    "But I got you flowers! 🌹",
    "One more chance? 🥹",
    "Pretty please? ✨",
    "I'll be the best! 💝",
    "You're making me cry! 😢",
    "Catch me if you can! 😏"
  ];

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    
    // Move button to random position - EXCESSIVE JUMPS
    const randomX = (Math.random() - 0.5) * 600; // Much larger range
    const randomY = (Math.random() - 0.5) * 400;
    setNoPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  if (yesClicked) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15,
          duration: 0.8 
        }}
        className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-3xl p-12 text-center shadow-2xl border-4 border-pink-300 relative overflow-hidden"
      >
        {/* Explosive bursts from center */}
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i / 30) * Math.PI * 2;
          const distance = 400;
          const endX = Math.cos(angle) * distance;
          const endY = Math.sin(angle) * distance;
          
          return (
            <motion.div
              key={`burst-${i}`}
              className="absolute top-1/2 left-1/2 text-yellow-300"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{
                x: endX,
                y: endY,
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: i * 0.02,
              }}
            >
              <Sparkles size={20} fill="currentColor" />
            </motion.div>
          );
        })}

        {/* Firework hearts - multiple bursts */}
        {Array.from({ length: 40 }).map((_, i) => {
          const randomAngle = Math.random() * Math.PI * 2;
          const randomDistance = Math.random() * 300 + 100;
          const endX = Math.cos(randomAngle) * randomDistance;
          const endY = Math.sin(randomAngle) * randomDistance;
          
          return (
            <motion.div
              key={`heart-${i}`}
              className="absolute top-1/2 left-1/2"
              style={{
                color: i % 3 === 0 ? '#fff' : i % 3 === 1 ? '#ffc0cb' : '#ffb6c1'
              }}
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: endX,
                y: endY,
                scale: [0, 1.5, 1, 0],
                opacity: [0, 1, 1, 0],
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: 0.3 + (i * 0.03),
              }}
            >
              <Heart size={20} fill="currentColor" />
            </motion.div>
          );
        })}

        {/* Continuous sparkle rain */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            className="absolute text-white/70"
            style={{
              left: `${(i / 25) * 100}%`,
              top: 0,
            }}
            initial={{ y: -50, opacity: 0, scale: 0 }}
            animate={{
              y: 400,
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1 + (i * 0.1),
              ease: "linear",
            }}
          >
            <Sparkles size={12} fill="currentColor" />
          </motion.div>
        ))}

        {/* Center content with bounce */}
        <motion.div
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
            delay: 0.5,
          }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-white mb-6 flex justify-center"
          >
            <Heart size={100} fill="currentColor" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-5xl md:text-6xl text-white mb-4"
          >
            Hehe! 
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl md:text-3xl text-white mb-6"
          >
            I knew you'd say yes! 💕
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xl text-white/90"
          >
            Best Valentine's Day ever! ✨
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-12 text-center shadow-2xl border-4 border-pink-300 relative"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="text-white mb-6 flex justify-center"
      >
        <Heart size={80} fill="currentColor" />
      </motion.div>

      <h2 className="text-4xl md:text-5xl text-white mb-8">
        Will you be my Valentine? 💖
      </h2>

      <div className="flex gap-6 justify-center items-center flex-wrap relative min-h-[80px]">
        <motion.button
          onClick={handleYesClick}
          className="bg-white text-pink-600 px-12 py-4 rounded-full text-2xl shadow-lg z-10 font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            scale: {
              duration: 1.5,
              repeat: Infinity,
            },
          }}
        >
          Yes! 💕
        </motion.button>

        <motion.button
          onClick={handleNoClick}
          className="bg-pink-200 text-gray-700 px-8 py-4 rounded-full text-xl shadow-lg relative"
          animate={{
            x: noPosition.x,
            y: noPosition.y,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 50,
          }}
          
        >
          {noCount == 0 ? "No" : noMessages[Math.floor(Math.random() * noMessages.length)]}
        </motion.button>
      </div>
    </motion.div>
  );
}