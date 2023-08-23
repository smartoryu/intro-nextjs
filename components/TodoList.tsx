import Todo from './Todo'

export default function TodoList({ todos }: any) {
  return (
    <div>
      {todos.map((todo: any) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
