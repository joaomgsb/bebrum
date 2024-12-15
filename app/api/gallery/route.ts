import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { gallerySchema } from '@/lib/validations/gallery'

export async function GET() {
  try {
    const images = await db.galleryImage.findMany()
    return NextResponse.json(images)
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json(
      { error: "Erro ao carregar galeria" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const validated = gallerySchema.parse(data)
    
    const image = await db.galleryImage.create({
      data: validated
    })
    return NextResponse.json(image)
  } catch (error) {
    console.error('Error creating gallery image:', error)
    return NextResponse.json(
      { error: "Erro ao adicionar imagem" },
      { status: 500 }
    )
  }
}