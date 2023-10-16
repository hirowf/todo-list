import React, { useState } from 'react'
import { Todo, useTodo } from '../context/TodoContext'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)
  const { updateTodo, removeTodo } = useTodo()

  const handleSaveEdit = () => {
    updateTodo(todo.id, { ...todo, title: editedTitle })
    setIsEditing(false)
  }

  const handleCheckboxChange = () => updateTodo(todo.id, { ...todo, completed: !todo.completed })

  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-300">
      <div className="flex items-center space-x-4">
        <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} className="h-6 w-6 text-indigo-500" />
        {isEditing ? (
          <div className="flex items-center space-x-2">
            <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} className="border border-gray-300 rounded px-2 py-1" />
            <button onClick={handleSaveEdit} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
              Save
            </button>
          </div>
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
        )}
      </div>
      <div className="space-x-2">
        <button onClick={() => setIsEditing(!isEditing)} className="text-indigo-500 hover:underline">
          Edit
        </button>
        <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:underline">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
