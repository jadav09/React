import React, { useState } from 'react'
import { data } from './data'
import { useNavigate } from 'react-router-dom'

function Addemp() {


  let [name, setname] = useState("")
  let [salary, setsalary] = useState("")

  let nav = useNavigate("")

  let hendlesumbit = (e) => {
    e.preventDefault()
    data.push({ id: data.length + 1, name, salary })
    nav("/")

  }

  return (
    <div>
      <form onSubmit={hendlesumbit}>

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

        <button>Add employes</button>
      </form>
    </div>
  )
}

export default Addemp