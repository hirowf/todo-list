import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

type TodoContext = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (index: string) => void
  updateTodo: (index: string, updateTodo: Todo) => void
}

const LOCAL_STORAGE_KEY = 'todos'

const TodoContext = createContext<TodoContext | undefined>(undefined)

type TodoProviderProps = {
  children: ReactNode
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    return storedTodos ? JSON.parse(storedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const updateTodo = (id: string, updatedTodo: Todo) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo))
    setTodos(updatedTodos)
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
