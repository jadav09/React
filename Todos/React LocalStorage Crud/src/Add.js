import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {

    let [name1, setname1] = useState("")
    let [salary, setsalary] = useState("")

    let nav = useNavigate("")

    var store = JSON.parse(localStorage.getItem("storage")) ?? []


    let hendlesumbit = (e) => {
        e.preventDefault()

        let data = { id: store.length + 1, name1: name1, salary: salary }
        store.push(data)

        localStorage.setItem("storage", JSON.stringify(store))

        console.log(store)

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

export default Add