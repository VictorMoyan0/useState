import { useState } from 'react'
import './Style.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  return (
    <>
      <p>Sumar +2</p>
      <button onClick={() => setCount((count) => count + 2)}>{count} </button>
      <p>Sumar +3</p>
      <button onClick={() => setCount1((count1) => count1 + 3)}>{count1} </button>
      <div className='square'>.</div>      
    </>
  )
}

export default App;