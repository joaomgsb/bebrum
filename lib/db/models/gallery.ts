import { db } from '../connection'
import { generateId } from '../utils'
import { GalleryImage } from '@/types/gallery'

export const galleryModel = {
  getAll: () => {
    return db.prepare(`
      SELECT * FROM gallery_images 
      ORDER BY created_at DESC
    `).all() as GalleryImage[]
  },

  create: (data: Omit<GalleryImage, 'id' | 'created_at' | 'updated_at'>) => {
    const id = generateId()
    db.prepare(`
      INSERT INTO gallery_images (id, title, image)
      VALUES (?, ?, ?)
    `).run(id, data.title, data.image)
    return id
  },

  delete: (id: string) => {
    return db.prepare(`
      DELETE FROM gallery_images 
      WHERE id = ?
    `).run(id)
  }
}