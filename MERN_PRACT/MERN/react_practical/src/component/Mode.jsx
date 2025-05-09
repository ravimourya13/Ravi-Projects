import React, { useState } from 'react'

const Mode = ({ }) => {
    const [mode, setMode] = useState("white")
    document.body.style.backgroundColor = mode

    const chageMode = () => {
        setMode((prevMode) => (prevMode == "black" ? "white" : "black"))
        document.body.style.backgroundColor = mode
    }

    return (
        <div className='text-center my-5'>
            <button
                className="btn btn-outline-success my-2 my-sm-0" onClick={chageMode}>
                DarkMode
            </button>
        </div>
    )
}

export default Mode
