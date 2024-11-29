"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Workshop de Harmonização",
    date: "27 de Abril, 2024",
    time: "16:00 - 19:00",
    location: "Cervejaria Bebrum",
    capacity: "20 pessoas",
    description: "Aprenda a harmonizar diferentes estilos de cerveja com pratos específicos. Inclui degustação de 6 cervejas e petiscos.",
    price: "R$ 120,00",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Tour Cervejeiro",
    date: "Todo Sábado",
    time: "14:00 - 16:00",
    location: "Cervejaria Bebrum",
    capacity: "15 pessoas",
    description: "Conheça todo o processo de fabricação das nossas cervejas artesanais, desde a seleção dos ingredientes até a degustação.",
    price: "R$ 80,00",
    image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Festival de Cerveja Artesanal",
    date: "18 de Maio, 2024",
    time: "12:00 - 22:00",
    location: "Cervejaria Bebrum",
    capacity: "200 pessoas",
    description: "Um dia inteiro dedicado à cerveja artesanal, com música ao vivo, food trucks e mais de 20 tipos de cerveja.",
    price: "R$ 150,00",
    image: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&q=80"
  }
]

export function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState(events[0])

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
              className={`group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                selectedEvent.id === event.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedEvent(event)}
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
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-white/90 text-sm font-open-sans">{event.date}</p>
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