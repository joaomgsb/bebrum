"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

type GalleryFormData = {
  title: string
  image: string
}

export function AdminGalleryForm() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<GalleryFormData>()
  const router = useRouter()

  const onSubmit = async (data: GalleryFormData) => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error("Falha ao adicionar imagem")
      
      reset()
      router.refresh()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Título</label>
        <Input {...register("title", { required: true })} />
        {errors.title && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL da Imagem</label>
        <Input {...register("image", { required: true })} />
        {errors.image && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Adicionar à Galeria"}
      </Button>
    </form>
  )
}