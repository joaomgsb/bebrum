"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function getGalleryImages() {
  try {
    const images = await db.galleryImage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return images
  } catch (error) {
    throw new Error("Failed to fetch gallery images")
  }
}

export async function createGalleryImage(data: any) {
  try {
    const image = await db.galleryImage.create({
      data
    })
    revalidatePath('/eventos')
    revalidatePath('/admin/eventos')
    return image
  } catch (error) {
    throw new Error("Failed to create gallery image")
  }
}

export async function deleteGalleryImage(id: string) {
  try {
    const image = await db.galleryImage.delete({
      where: { id }
    })
    revalidatePath('/eventos')
    revalidatePath('/admin/eventos')
    return image
  } catch (error) {
    throw new Error("Failed to delete gallery image")
  }
}