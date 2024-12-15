import { useState, useEffect } from 'react'
import { Event } from '@/types/event'

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchEvents() {
    try {
      const response = await fetch('/api/events')
      if (!response.ok) throw new Error('Falha ao carregar eventos')
      const data = await response.json()
      setEvents(data)
    } catch (error) {
      console.error('Erro ao carregar eventos:', error)
      setError('Não foi possível carregar os eventos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return {
    events,
    loading,
    error,
    refetch: fetchEvents
  }
}