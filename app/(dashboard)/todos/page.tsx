import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(''), 250))
  const todos = await db.todo.findMany({})
  console.log(todos)
  return todos
}

export default async function TodosPage() {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
