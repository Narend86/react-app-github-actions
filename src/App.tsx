import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{marginTop: '10rem'}}>Code step by step Devops for frontend</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
      </div>
      <p>This is a simple counter app.</p>
    </>
  )
}

export default App
