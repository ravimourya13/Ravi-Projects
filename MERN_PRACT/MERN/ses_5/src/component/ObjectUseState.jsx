import React,{useState} from 'react'

const ObjectUseState = () => {
    const [emp, setEmp] = useState({ name: '', sal: '' })
    return (
        <div>
            Name :
            <input type="text" onChange={(e) => setEmp({ ...emp, name: e.target.value })} />
            Salary:
            <input type="text" onChange={(e) => setEmp({ ...emp, sal: e.target.value })} /> <br />

            {emp.name} = {emp.sal}
        </div>
    )
}

export default ObjectUseState
