"use client"

import { motion, AnimatePresence } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}