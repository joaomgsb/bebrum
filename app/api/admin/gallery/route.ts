import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { db } from "@/lib/db"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const images = await db.galleryImage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(images)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching gallery" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const image = await db.galleryImage.create({
      data
    })
    
    return NextResponse.json(image)
  } catch (error) {
    return NextResponse.json({ error: "Error creating gallery image" }, { status: 500 })
  }
}