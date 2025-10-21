import { useState } from 'react'
import './Style.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [color, setColor] = useState('black')
  const cambiarColor = () => {
    if (color === 'black') setColor('green')
    else if (color === 'green') setColor('blue')
    else if (color === 'blue') setColor('red')
    else setColor('green')
  }

  return (
    <>
      <p>Sumar +2</p>
      <button onClick={() => setCount((count) => count + 2)}>{count} </button>
      <p>Sumar +3</p>
      <button onClick={() => setCount1((count1) => count1 + 3)}>{count1} </button>
      <button onClick={cambiarColor}>Cambiar color</button>
      <div style={{
        width: 100,
        height: 100,
        backgroundColor: color,
        marginTop: 10
      }}></div>
    </>
  )
}

export default App;