"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Skeleton } from "@/components/ui/skeleton"
import { OptimizedImage } from "@/components/ui/optimized-image"

type GalleryImage = {
  id: string
  title: string
  image: string
}

export function EventsGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchGallery() {
    try {
      const response = await fetch("/api/gallery")
      if (!response.ok) throw new Error("Falha ao carregar galeria")
      const data = await response.json()
      setImages(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Erro ao carregar galeria:", error)
      setError("Não foi possível carregar a galeria")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative h-64 overflow-hidden rounded-lg"
              >
                <Skeleton className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button 
            onClick={() => {
              setError(null)
              setLoading(true)
              fetchGallery()
            }}
          >
            Tentar novamente
          </Button>
        </div>
      </section>
    )
  }

  if (images.length === 0) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            Nenhuma imagem na galeria.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Galeria de Eventos
          </h2>
          <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
            Momentos memoráveis dos nossos eventos anteriores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <OptimizedImage
                src={image.image}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/80 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}