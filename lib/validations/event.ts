import { z } from 'zod'

export const eventSchema = z.object({
  title: z.string().min(3, "Título deve ter no mínimo 3 caracteres"),
  date: z.string().min(1, "Data é obrigatória"),
  time: z.string().min(1, "Horário é obrigatório"),
  location: z.string().min(1, "Local é obrigatório"),
  capacity: z.string().min(1, "Capacidade é obrigatória"),
  description: z.string().min(10, "Descrição deve ter no mínimo 10 caracteres"),
  price: z.string().min(1, "Preço é obrigatório"),
  image: z.string().url("URL da imagem inválida")
})

export type EventFormData = z.infer<typeof eventSchema>