import { useState } from 'react'
import './App.css'

// import PexelsApi from './components/Test/PexelsApi'
// import FetchAPIImgGallery from './components/Test/FetchAPIImgGallery'
import Test from './components/Test/Pexels/Test'

// All the Topics in this project
import * as Topics from './Topics/ComponentExample'
import ComponentExample from './Topics/ComponentExample'
import { PropsExample } from './Topics/ComponentExample'
import { UseStateExample } from './Topics/ComponentExample'
import { UseEffectExample } from './Topics/ComponentExample'
import { UseEffectExampleWithFetch } from './Topics/ComponentExample'
import { EventHandlingExample } from './Topics/ComponentExample'
import { ListAndKeysExample } from './Topics/ComponentExample'

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
      <div className='Topics'>
        <ComponentExample />
        <PropsExample name="Nicolas" age="25"/>
        <UseStateExample />
        <UseEffectExample />
        <UseEffectExampleWithFetch />
        <EventHandlingExample />
        <ListAndKeysExample />

        {/* <Test /> */}
      </div>

      <h2>Goodbye, There!</h2>
    </>
  )
}

export default App
