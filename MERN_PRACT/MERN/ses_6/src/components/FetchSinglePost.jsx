import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchSinglePost = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(0);
    const [btn, setBtn] = useState(0);

    const handleClick = () => {
        setBtn(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`).then((result) => {
            setPost(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [btn])

    return (
        <div>
            <input type="text" onChange={(e)=>setId(e.target.value)} />
            <button onClick={handleClick}>Fetch</button>
            <h1>{post.title}</h1>
        </div>
    )
}

export default FetchSinglePost
