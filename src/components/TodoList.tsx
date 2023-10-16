import { useTodo } from '../context/TodoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useTodo()
  return (
    <div>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
