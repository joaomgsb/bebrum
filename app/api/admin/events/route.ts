import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { db } from "@/lib/db"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const events = await db.event.findMany({
      orderBy: {
        date: 'asc'
      }
    })
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching events" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const event = await db.event.create({
      data
    })
    
    return NextResponse.json(event)
  } catch (error) {
    return NextResponse.json({ error: "Error creating event" }, { status: 500 })
  }
}