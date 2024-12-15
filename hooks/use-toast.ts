import { useState } from "react"

type ToastVariant = "default" | "success" | "error" | "warning" | "info"

interface ToastOptions {
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastOptions[]>([])

  const toast = (options: ToastOptions) => {
    const id = Math.random().toString(36).slice(2)
    const newToast = { ...options, id }
    
    setToasts((current) => [...current, newToast])

    if (options.duration !== Infinity) {
      setTimeout(() => {
        setToasts((current) => current.filter((t) => t.id !== id))
      }, options.duration || 5000)
    }
  }

  return { toast, toasts }
}