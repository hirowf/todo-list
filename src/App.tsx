import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

function App() {
  return (
    <TodoProvider>
      <div className="max-w-5xl m-auto w-full px-4">
        <h1 className="text-5xl font-medium text-sky-300 mb-5 text-">Todo List</h1>

        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
