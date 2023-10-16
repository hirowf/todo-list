import { useState } from 'react'
import { Todo, useTodo } from '../context/TodoContext'

const TodoForm = () => {
  const { addTodo } = useTodo()
  const [newTodo, setNewTodo] = useState<Todo>({ id: 0, title: '', completed: false })

  const handleAddTodo = () => {
    if (newTodo.title) {
      const uuid = Math.random()
      addTodo({
        ...newTodo,
        id: uuid,
      })
      setNewTodo({ id: 0, title: '', completed: false })
      console.log('Todo added:', { ...newTodo, id: uuid })
    }
  }

  return (
    <>
      <input
        type="text"
        name="newTodo"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Add a new task"
      />

      <div className="flex space-x-3 my-5">
        <div>
          <button
            type="submit"
            onClick={handleAddTodo}
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Save
          </button>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => setNewTodo({ id: 0, title: '', completed: false })}
            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoForm
