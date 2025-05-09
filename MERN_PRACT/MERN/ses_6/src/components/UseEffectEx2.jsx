import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectEx2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
            setData(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [])

    return (
        <div>
            <h1>Data From Axios </h1>
            {
                data.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </div>
    )
}

export default UseEffectEx2
