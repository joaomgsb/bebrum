"use client"

import { useToast } from "@/hooks/use-toast"
import { Toast } from "./toast"
import { AnimatePresence } from "framer-motion"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}