import React, { useState } from 'react'

const ArrayUseState = () => {
    const [emp, setEmp] = useState({ name: '', sal: '' })
    const [emps, setEmps] = useState([])

    const addEmp = () => {
        setEmps([ ...emps, emp ])
    }

    return (
        <div>
            Name :
            <input type="text" onChange={(e) => setEmp({ ...emp, name: e.target.value })} />
            Salary:
            <input type="text" onChange={(e) => setEmp({ ...emp, sal: e.target.value })} />
            <button onClick={addEmp}>Add</button>

            <ul>
                {
                    emps.map((e,index)=>(
                        <li key={index}>{e.name}-{e.sal}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ArrayUseState
