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

    const image = await db.galleryImage.delete({
      where: {
        id: params.id
      }
    })
    
    return NextResponse.json(image)
  } catch (error) {
    return NextResponse.json({ error: "Error deleting gallery image" }, { status: 500 })
  }
}