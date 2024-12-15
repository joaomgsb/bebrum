"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  capacity: string
  description: string
  price: string
  image: string
  createdAt: string
  updatedAt: string
}

export function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events")
      if (!response.ok) throw new Error("Falha ao carregar eventos")
      
      const data = await response.json()
      
      if (!Array.isArray(data)) {
        throw new Error("Formato de dados inválido")
      }
      
      setEvents(data)
      setError(null)
    } catch (error) {
      console.error("Erro ao carregar eventos:", error)
      setError("Não foi possível carregar os eventos")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  // Rest of the component remains the same...
  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-20 w-full" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-10 w-28" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button 
            onClick={() => {
              setError(null)
              setLoading(true)
              fetchEvents()
            }}
          >
            Tentar novamente
          </Button>
        </div>
      </section>
    )
  }

  if (events.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            Nenhum evento programado no momento.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Próximos Eventos
          </h2>
          <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
            Participe das nossas experiências cervejeiras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-sm font-open-sans">
                    {formatDate(event.date)}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-open-sans">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-open-sans">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-open-sans">{event.capacity}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 font-open-sans text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {event.price}
                    </span>
                    <Button>Reservar</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

