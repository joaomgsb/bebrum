import { z } from 'zod'

export const gallerySchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  image: z.string().min(1, "URL da imagem é obrigatória")
})

export type GalleryFormData = z.infer<typeof gallerySchema>