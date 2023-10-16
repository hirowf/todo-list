import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

type TodoContext = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (index: number) => void
  updateTodo: (index: number, updateTodo: Todo) => void
}

const TodoContext = createContext<TodoContext | undefined>(undefined)

type TodoProviderProps = {
  children: ReactNode
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (index: number) => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }

  const updateTodo = (index: number, updatedTodo: Todo) => {
    const newTodos = [...todos]
    newTodos[index] = updatedTodo
    setTodos(newTodos)
  }

  return <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>{children}</TodoContext.Provider>
}

const useTodo = () => {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}

export { TodoProvider, useTodo }
