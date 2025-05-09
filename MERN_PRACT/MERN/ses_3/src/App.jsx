import PropsEx1 from './component/PropsEx1'
import UseStateEx from './component/UseStateEx'
import PropsEx2 from './component/PropsEx2'
import ConditionalRender from './component/ConditionalRender'

function App() {

  return (
    <>
      <PropsEx1 name="yash" id="10"/>
      <PropsEx2 name="nihal" age="50"/>
      <UseStateEx/>
      <ConditionalRender islogged={false}/>
    </>
  )
}

export default App
