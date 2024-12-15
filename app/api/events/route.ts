import { NextResponse } from 'next/server'
import { eventModel } from '@/lib/db'

export async function GET() {
  try {
    const events = await eventModel.getAll()
    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: "Erro ao carregar eventos" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const validated = eventSchema.parse(data)
    
    const id = eventModel.create(validated)
    return NextResponse.json({ id })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: "Erro ao criar evento" },
      { status: 500 }
    )
  }
}