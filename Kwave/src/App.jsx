import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './store/todosSlice'

function App() {
  const dispatch = useDispatch()
  const { status, error, items } = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <>
        <h1>Error: {error}</h1>
      </>
    )
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  )
}

export default App
