import { useState } from 'react'
import ArrayUseState from './component/ArrayUseState'
import ObjectUseState from './component/ObjectUseState'
import "bootstrap/dist/css/bootstrap.min.css"
import FormUseState from './component/FormUseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArrayUseState/>
      <ObjectUseState/>
      <FormUseState/>
    </>
  )
}

export default App
