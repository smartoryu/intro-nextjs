'use client'
import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

export default function Todo({ todo }: any) {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={`border border-black/20 cursor-pointer px-2 py-4 ${
        todo.completed ? 'line-through text-gray-400' : ''
      }`}
      onClick={() =>
        startTransition(() => completeTodo(todo.id, !todo.completed))
      }
    >
      {todo.content}
    </div>
  )
}
