import React, { useContext, useState } from 'react'
import { details } from './data'
import { userLogin } from './App'
import { useNavigate } from 'react-router-dom'

function Login() {

    let nav = useNavigate("")

    let { setlogin, login } = useContext(userLogin)

    let [email, setemail] = useState("")
    let [pass, setpass] = useState("")

    let hendleSumbit = (e) => {

        console.log(login)
        e.preventDefault()

        let updtemail = details.find((v) => {
            return v.email == email
        })

        let updtpass = details.find((v) => {
            return v.pass == pass
        })

        console.log(updtemail)  // obj
        console.log(updtpass)

        if (email == "" || pass == "") {
            alert("requrired")

        }

        else if (updtemail !== updtpass) {
            alert("wrong email & pass")

        }

        else {
            alert("success" )
            nav("/")
            setlogin(updtemail)

        }

    }

    return (
        <div>

            <form onSubmit={hendleSumbit}>

                <div>
                    <label >email :- </label>

                    <input type="email" value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                    />
                </div>

                <div>
                    <label >pass :- </label>
                    <input type="password" value={pass}
                        onChange={(e) => { setpass(e.target.value) }}
                    />
                </div>

                <p><button>login</button></p>

            </form>
        </div>
    )
}

export default Login