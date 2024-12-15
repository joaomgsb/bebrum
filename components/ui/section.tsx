import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ 
  children, 
  className,
  containerClassName 
}: SectionProps) {
  return (
    <section className={cn("py-24", className)}>
      <div className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        containerClassName
      )}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ 
  children, 
  className 
}: SectionProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      {children}
    </div>
  )
}