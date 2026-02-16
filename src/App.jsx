import { useState } from 'react'
import './App.css'

// Project imports
import DisplayGallery from './components/Project/DisplayGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, There!</h1>
      <div className='Project'>
        <DisplayGallery />
      </div>
      <h2>Goodbye, There!</h2>
    </>
  )
}

export default App
