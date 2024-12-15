"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

type EventFormData = {
  title: string
  date: string
  time: string
  location: string
  capacity: string
  description: string
  price: string
  image: string
}

export function AdminEventForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EventFormData>()

  const onSubmit = async (data: EventFormData) => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          date: new Date(data.date).toISOString()
        })
      })

      if (!response.ok) throw new Error("Falha ao criar evento")
      
      toast({
        title: "Sucesso!",
        description: "Evento criado com sucesso.",
        variant: "success"
      })
      
      reset()
    } catch (error) {
      console.error(error)
      toast({
        title: "Erro",
        description: "Não foi possível criar o evento. Tente novamente.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <Input {...register("title", { required: true })} />
          {errors.title && <span className="text-red-500 text-sm">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Data</label>
          <Input type="date" {...register("date", { required: true })} />
          {errors.date && <span className="text-red-500 text-sm">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Horário</label>
          <Input {...register("time", { required: true })} />
          {errors.time && <span className="text-red-500 text-sm">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Local</label>
          <Input {...register("location", { required: true })} />
          {errors.location && <span className="text-red-500 text-sm">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Capacidade</label>
          <Input {...register("capacity", { required: true })} />
          {errors.capacity && <span className="text-red-500 text-sm">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Preço</label>
          <Input {...register("price", { required: true })} />
          {errors.price && <span className="text-red-500 text-sm">Campo obrigatório</span>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL da Imagem</label>
        <Input {...register("image", { required: true })} />
        {errors.image && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descrição</label>
        <Textarea {...register("description", { required: true })} rows={4} />
        {errors.description && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <LoadingSpinner className="w-4 h-4" />
            Salvando...
          </span>
        ) : (
          "Criar Evento"
        )}
      </Button>
    </form>
  )
}