import React, { useEffect, useState } from 'react'
import { details } from './data'
import { useNavigate } from 'react-router-dom'

function Registraion() {

  let nav = useNavigate("")

  let [name, setname] = useState("")
  let [email, setemail] = useState("")

  let data = { id: details.length + 1, name: name, email: email }

  let hendleSumbit = (e) => {
    e.preventDefault()

    details.push(data)
    nav("/")
  console.log(data)


  }

  return (
    <div>
      <form onSubmit={hendleSumbit}>

        <div>
          <label >name :- </label>

          <input type="" name="" value={name}
            onChange={(e) => { setname(e.target.value) }}
          />
        </div>

        <div>
          <label >email :- </label>
          <input type="" name="" value={email}
            onChange={(e) => { setemail(e.target.value) }}
          />
        </div>

        <p><button>registration</button></p>

      </form>
    </div>
  )
}

export default Registraion