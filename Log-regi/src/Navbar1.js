import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from './App'

function Navbar1() {

    let { login, setedit, edit } = useContext(userLogin)
    let nav = useNavigate("")

    let lendlelogin = () => {

        nav("/log")
        setedit(false)
    }

    if (edit) {
        var prnt = <>
            <button className='mx-2' onClick={lendlelogin}>login</button>
            <button onClick={() => { nav("/regi") }}>registraion</button>
        </>
    }

    else if (!edit) {
        var prnt = <>
            {login.name}
            <button onClick={() => { setedit(true) }}>logout</button>


        </>
    }


    return (
        <div>
            <div className='nav'>

                <ul>
                    <li>home</li>
                    <li>ABOUT</li>
                    <li>home</li>
                    <li>Contact</li>
                </ul>

                <div>

                    {prnt}

                </div>

            </div>
        </div>
    )
}

export default Navbar1