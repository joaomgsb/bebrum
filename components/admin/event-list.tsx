"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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
}

export function AdminEventList() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/admin/events")
      const data = await response.json()
      setEvents(data)
    } catch (error) {
      console.error("Erro ao carregar eventos:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este evento?")) return

    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "DELETE"
      })

      if (!response.ok) throw new Error("Falha ao excluir evento")

      setEvents(events.filter(event => event.id !== id))
    } catch (error) {
      console.error("Erro ao excluir evento:", error)
    }
  }

  if (loading) return <div>Carregando eventos...</div>

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Eventos Cadastrados</h3>
      
      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-600 mb-1">Data: {formatDate(event.date)}</p>
                <p className="text-gray-600 mb-1">Horário: {event.time}</p>
                <p className="text-gray-600 mb-1">Local: {event.location}</p>
                <p className="text-gray-600 mb-1">Capacidade: {event.capacity}</p>
                <p className="text-gray-600 mb-1">Preço: {event.price}</p>
              </div>
              <Button 
                variant="destructive" 
                onClick={() => handleDelete(event.id)}
              >
                Excluir
              </Button>
            </div>
          </div>
        ))}

        {events.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            Nenhum evento cadastrado
          </p>
        )}
      </div>
    </div>
  )
}