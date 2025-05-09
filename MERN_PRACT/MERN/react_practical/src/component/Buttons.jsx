import React from 'react'
import Mode from './Mode'
import ConditinalRender from './ConditinalRender'

const Buttons = () => {


    return (
        <div className='container'>
            <div className="row justify-content-center align-items-stretch my-5 g-5">
                <div className="col-3 text-center h-100">
                    <h1>Change Mode</h1>
                    <Mode />
                </div>
                <div className="col-3 text-center h-100">
                    <h1>Toggle Button</h1>
                    <ConditinalRender />
                </div>
                <div className="col-3 text-center h-100">
                    <h1>Hover Effect</h1>
                    <button
                        className='btn border my-5'
                        id='hover'
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'lightblue'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                        Hover Me
                    </button>

                </div>
            </div>


        </div>
    )
}

export default Buttons
