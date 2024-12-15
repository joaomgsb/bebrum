import { db } from './connection'

export const eventQueries = {
  getAll: db.prepare(`
    SELECT * FROM events 
    ORDER BY date ASC
  `),
  
  getById: db.prepare(`
    SELECT * FROM events 
    WHERE id = ?
  `),
  
  create: db.prepare(`
    INSERT INTO events (id, title, date, time, location, capacity, description, price, image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),
  
  delete: db.prepare(`
    DELETE FROM events 
    WHERE id = ?
  `)
}

export const galleryQueries = {
  getAll: db.prepare(`
    SELECT * FROM gallery_images 
    ORDER BY created_at DESC
  `),
  
  create: db.prepare(`
    INSERT INTO gallery_images (id, title, image)
    VALUES (?, ?, ?)
  `),
  
  delete: db.prepare(`
    DELETE FROM gallery_images 
    WHERE id = ?
  `)
}