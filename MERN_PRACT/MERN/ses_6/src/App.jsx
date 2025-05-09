import { useState } from 'react'
import FetchSinglePost from './components/FetchSinglePost'
import UseEffect from './components/UseEffect'
import UseEffectEx2 from './components/UseEffectEx2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <UseEffect/>
      <UseEffectEx2/>
      <FetchSinglePost/>
    </>
  )
}

export default App
