import React, { useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'

function Edit() {

    let { eid } = useParams("")


    let nav = useNavigate("")

    var store = JSON.parse(localStorage.getItem("storage"))
    console.log(store)


    let findData = store.find((v) => { return v.id == eid })

    let [name1, setname1] = useState(findData.name1)
    let [salary, setsalary] = useState(findData.salary)

    let hendlesumbit = (e) => {
        e.preventDefault()

        let store = JSON.parse(localStorage.getItem('storage')) ?? [];

        let updatedata = store.map((v) => {

            if (v.id == eid) {
                return { ...v, id: eid, name1: name1, salary: salary }
            }
            return v

        })

        localStorage.setItem("storage", JSON.stringify(updatedata))

        nav("/")

    }


    return (
        <div>
            <form onSubmit={hendlesumbit}>
                <div>
                    <label>name</label>
                    <input type="text" value={name1}
                        onChange={(e) => { setname1(e.target.value) }}
                    />
                </div>
                <div>
                    <label>salary</label>
                    <input type="text" value={salary}
                        onChange={(e) => { setsalary(e.target.value) }}

                    />
                </div>
                <button>SAVE</button>
            </form>
        </div>
    )
}

export default Edit