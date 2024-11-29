"use client"

import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string
}

export function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
  return (
    <Image
      className={cn("object-cover", className)}
      alt={alt}
      quality={90}
      {...props}
    />
  )
}