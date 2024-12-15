import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const prismaClientSingleton = () => {
  return new PrismaClient()
}

export const db = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db
}

export const eventModel = {
  getAll: async () => {
    try {
      const events = await db.event.findMany()
      
      const formatted = events.map(event => ({
        id: event.id,
        title: event.title,
        date: event.date.toISOString(),
        time: event.time,
        location: event.location,
        capacity: event.capacity,
        description: event.description,
        price: event.price,
        image: event.image
      }))
      
      return formatted
    } catch (error) {
      console.error('Erro ao buscar eventos:', error)
      throw error
    }
  },
  create: (data: any) => db.event.create({ data }),
}

export const galleryModel = {
  getAll: () => db.galleryImage.findMany(),
  create: (data: any) => db.galleryImage.create({ data }),
}

