"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  top: string;
  left: string;
  width: string;
  height: string;
  duration: number;
  delay: number;
}

export function StarryBackground({ count = 20 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(count)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, [count]);

  if (stars.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            height: star.height,
          }}
        />
      ))}
    </div>
  );
}
