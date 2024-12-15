import { db } from '../connection'
import { generateId } from '../utils'
import { Event } from '@/types/event'

export const eventModel = {
  getAll: () => {
    return db.prepare(`
      SELECT * FROM events 
      ORDER BY date ASC
    `).all() as Event[]
  },

  getById: (id: string) => {
    return db.prepare(`
      SELECT * FROM events 
      WHERE id = ?
    `).get(id) as Event | undefined
  },

  create: (data: Omit<Event, 'id' | 'created_at' | 'updated_at'>) => {
    const id = generateId()
    db.prepare(`
      INSERT INTO events (id, title, date, time, location, capacity, description, price, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      data.title,
      data.date,
      data.time,
      data.location,
      data.capacity,
      data.description,
      data.price,
      data.image
    )
    return id
  },

  delete: (id: string) => {
    return db.prepare(`
      DELETE FROM events 
      WHERE id = ?
    `).run(id)
  }
}