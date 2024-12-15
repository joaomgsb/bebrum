"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function getEvents() {
  try {
    const events = await db.event.findMany({
      orderBy: {
        date: 'asc'
      }
    })
    return events
  } catch (error) {
    throw new Error("Failed to fetch events")
  }
}

export async function createEvent(data: any) {
  try {
    const event = await db.event.create({
      data
    })
    revalidatePath('/eventos')
    revalidatePath('/admin/eventos')
    return event
  } catch (error) {
    throw new Error("Failed to create event")
  }
}

export async function updateEvent(id: string, data: any) {
  try {
    const event = await db.event.update({
      where: { id },
      data
    })
    revalidatePath('/eventos')
    revalidatePath('/admin/eventos')
    return event
  } catch (error) {
    throw new Error("Failed to update event")
  }
}

export async function deleteEvent(id: string) {
  try {
    const event = await db.event.delete({
      where: { id }
    })
    revalidatePath('/eventos')
    revalidatePath('/admin/eventos')
    return event
  } catch (error) {
    throw new Error("Failed to delete event")
  }
}