"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type AccordionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Accordion({ title, children, className }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border-b border-gray-200", className)}>
      <button
        className="w-full flex justify-between items-center py-4 text-lg font-medium focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2 text-xl">{open ? "-" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600 dark:text-gray-300">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 