import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "success" | "error" | "warning" | "info"
  onClose?: () => void
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
  default: Info
}

const variants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
}

export function Toast({
  title,
  description,
  variant = "default",
  onClose
}: ToastProps) {
  const Icon = icons[variant]

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "pointer-events-auto flex w-full max-w-md rounded-lg shadow-lg",
        "bg-white p-4 items-start space-x-4",
        variant === "success" && "border-l-4 border-green-500",
        variant === "error" && "border-l-4 border-red-500",
        variant === "warning" && "border-l-4 border-yellow-500",
        variant === "info" && "border-l-4 border-blue-500"
      )}
    >
      <div className={cn(
        variant === "success" && "text-green-500",
        variant === "error" && "text-red-500",
        variant === "warning" && "text-yellow-500",
        variant === "info" && "text-blue-500",
        variant === "default" && "text-gray-500"
      )}>
        <Icon className="h-5 w-5" />
      </div>
      
      <div className="flex-1">
        {title && (
          <h3 className="font-medium text-gray-900">{title}</h3>
        )}
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>

      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-500"
      >
        <XCircle className="h-5 w-5" />
      </button>
    </motion.div>
  )
}