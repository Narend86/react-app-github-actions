import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Code step by step Devops for frontend</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
      </div>
    </>
  )
}

export default App
