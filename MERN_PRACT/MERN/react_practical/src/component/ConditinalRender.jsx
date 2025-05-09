import React, { useState } from 'react'

const ConditinalRender = () => {
    const [text,setText]=useState("login")
    return (
        <>
            <div className="text-center my-4">
                <button className='btn btn-primary' onClick={()=>setText((prevText)=>(prevText == "login" ? "logout" : "login"))}>{text}</button>
            </div>
        </>
    )
}

export default ConditinalRender
