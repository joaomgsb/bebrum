import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { db } from "@/lib/db"
import { authOptions } from "@/lib/auth"

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const event = await db.event.delete({
      where: {
        id: params.id
      }
    })
    
    return NextResponse.json(event)
  } catch (error) {
    return NextResponse.json({ error: "Error deleting event" }, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const event = await db.event.update({
      where: {
        id: params.id
      },
      data
    })
    
    return NextResponse.json(event)
  } catch (error) {
    return NextResponse.json({ error: "Error updating event" }, { status: 500 })
  }
}