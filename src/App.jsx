import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Sumar +2</p>
      <button onClick={() => setCount((count) => count + 2)}>{count} </button>
      <p>Sumar +3</p>
      <button onClick={() => setCount((count) => count + 3)}>{count} </button>
    </>
  )
}

export default App;