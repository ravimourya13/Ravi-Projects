import React ,{useState}from 'react'

const UseStateEx = () => {
    const [count,setCount] = useState(0);

    const [string,setString] = useState("login");

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increse</button>

            <h1>{string}</h1>
            <button onClick={()=>{setString("welcome")} }>Login</button>
            
        </div>
    )
}

export default UseStateEx
