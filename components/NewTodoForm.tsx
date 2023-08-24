import { newTodo } from '@/utils/actions'

export default function NewTodoForm() {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-black/24 mr-4"
        />
        <button type="submit" className="border border-black px-4 rounded-md">
          new todo
        </button>
      </form>
    </div>
  )
}
