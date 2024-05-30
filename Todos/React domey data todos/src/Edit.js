import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from './data'


function Edit() {
    let { eid } = useParams("")
    let nav = useNavigate("")

    var updatedata = data.filter((v) => {
        return v.id == eid
    })


    let [name, setname] = useState(updatedata[0].name)
    let [salary, setsalary] = useState(updatedata[0].salary)


    let hendleedit = (e) => {
        e.preventDefault()
        data.find((v) => {
            if (v.id == eid) {
                v.name = name;
                v.salary = salary

            }
            nav("/")

        })


    }

    return (
        <div>
            <form onSubmit={hendleedit}>

                <div>
                    <label >name</label>
                    <input type="" name="" value={name}

                        onChange={(e) => { setname(e.target.value) }}
                    />
                </div>

                <div>
                    <label >salary</label>
                    <input type="" name="" value={salary}
                        onChange={(e) => { setsalary(e.target.value) }}
                    />

                </div>

                <button>Save employes</button>
            </form>
        </div>
    )
}

export default Edit