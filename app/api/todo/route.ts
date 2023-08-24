import { NextResponse } from 'next/server'
import db from '@/utils/db'

export async function GET(req: Request) {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ data: todos })
}

export async function POST(req: Request) {
  const data = await req.json()
  const todo = await db.todo.create({ data })
  return NextResponse.json({ message: todo })
}
