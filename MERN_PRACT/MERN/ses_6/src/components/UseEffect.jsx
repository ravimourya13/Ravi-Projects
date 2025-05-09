import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count
    },[count])

    return (
        <div>
            <h1>Count- {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseEffect
