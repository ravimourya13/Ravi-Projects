import React, { useState } from 'react'


const FormUseState = () => {
    const [data, setData] = useState({ name: '', email: '', pass: '' })
    const loggedIn = ()=>{
        alert(`logged in successfully`)
    }
    return (
        <>
            <div className="container">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        name="formId1"
                        id="formId1"
                        onChange={(e)=>setData({...data,name:e.target.value})}
                    />
                    <label for="formId1">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        name="formId1"
                        id="formId1"
                        onChange={(e)=>setData({...data,email:e.target.value})}
                    />
                    <label for="formId1">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        name="formId1"
                        id="formId1"
                        onChange={(e)=>setData({...data,pass:e.target.value})}
                    />
                    <label for="formId1">Password</label>
                </div>

                <button onClick={loggedIn}>Login</button>

            </div>
        </>
    )
}

export default FormUseState
