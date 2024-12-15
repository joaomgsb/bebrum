import { useState, useEffect } from 'react'
import { GalleryImage } from '@/types/gallery'

export function useGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchGallery() {
    try {
      const response = await fetch('/api/gallery')
      if (!response.ok) throw new Error('Falha ao carregar galeria')
      const data = await response.json()
      setImages(data)
    } catch (error) {
      console.error('Erro ao carregar galeria:', error)
      setError('Não foi possível carregar a galeria')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  return {
    images,
    loading,
    error,
    refetch: fetchGallery
  }
}