"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StepCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function StepCard({ icon: Icon, title, description, index }: StepCardProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -top-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
        {index + 1}
      </div>
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm font-open-sans">
        {description}
      </p>
    </motion.div>
  )
}