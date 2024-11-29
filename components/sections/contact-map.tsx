"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

export function ContactMap() {
  const handleOpenGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/2ocfog6WP1yhhALj6", "_blank")
  }

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={handleOpenGoogleMaps}
            variant="secondary"
            size="lg"
            className="bg-white/90 hover:bg-white text-primary hover:text-primary/90 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Ver no Google Maps
          </Button>
        </div>
      </div>
    </div>
  )
}