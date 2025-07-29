"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  items: ReactNode[];
  className?: string;
}

export function Carousel({ items, className }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className={"relative w-full max-w-xl mx-auto " + (className || "") }>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-4">
        <button onClick={prev} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Prev</button>
        <button onClick={next} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Next</button>
      </div>
    </div>
  );
} 