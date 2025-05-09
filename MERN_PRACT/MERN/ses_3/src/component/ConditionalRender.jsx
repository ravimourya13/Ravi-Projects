import React from 'react'

const ConditionalRender = ({islogged}) => {

    // if(islogged){
    //     return <h1>Welcome</h1>
    // }else{
    //     return <h1>try again</h1>
    // }

    return (
        <>
            {islogged ? <h1>Welcome</h1>:<h1>try again</h1>}

            {islogged && <h1>Welcome</h1>}
        </>
    )
}

export default ConditionalRender
