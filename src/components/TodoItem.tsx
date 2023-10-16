import React from 'react'
import { Todo } from '../context/TodoContext'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.title}</span>
    </li>
  )
}

export default TodoItem
