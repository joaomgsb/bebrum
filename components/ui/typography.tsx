import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-4xl md:text-6xl font-bold", className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-3xl font-bold", className)}>
      {children}
    </h2>
  )
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-lg text-gray-600 font-open-sans", className)}>
      {children}
    </p>
  )
}