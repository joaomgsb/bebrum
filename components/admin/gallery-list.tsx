"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

type GalleryImage = {
  id: string
  title: string
  image: string
}

export function AdminGalleryList() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/admin/gallery")
      const data = await response.json()
      setImages(data)
    } catch (error) {
      console.error("Erro ao carregar imagens:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta imagem?")) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE"
      })

      if (!response.ok) throw new Error("Falha ao excluir imagem")

      setImages(images.filter(img => img.id !== id))
      router.refresh()
    } catch (error) {
      console.error("Erro ao excluir imagem:", error)
    }
  }

  if (loading) return <div>Carregando galeria...</div>

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Imagens da Galeria</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-48 mb-4">
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h4 className="font-semibold mb-2">{image.title}</h4>
            <Button 
              variant="destructive" 
              onClick={() => handleDelete(image.id)}
              className="w-full"
            >
              Excluir
            </Button>
          </div>
        ))}

        {images.length === 0 && (
          <p className="text-gray-500 text-center py-4 col-span-full">
            Nenhuma imagem cadastrada
          </p>
        )}
      </div>
    </div>
  )
}