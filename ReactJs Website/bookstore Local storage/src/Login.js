import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Userlogin } from './App'


import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let { setloginname, setlogoutuser } = useContext(Userlogin)

    console.log(setloginname)

    let nav = useNavigate()

    let hendlesumbit = (e) => {

        e.preventDefault()

        var singup = JSON.parse(localStorage.getItem("regi")) ?? []

        var chkemail = singup.find((v) => {
            return v.email == email

        })

        setloginname(chkemail)

        var chkpass = singup.filter((v) => {
            return v.password == password && v.email == email

        })

        console.log(chkpass)

        if (email.length == "" || password.length == "") {
            alert("required!!")
        }

        else if (!chkemail) {
            alert("wrong email")
        }

        else if (!chkpass) {
            alert("wrong password")
        }

        else if (chkpass) {

            toast.success('login succesfullly...!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            setTimeout(() => {
                nav("/")
            }, 2000);
            setlogoutuser(false)
        }

    }

    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" >
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <div className='text-end'>
                                                <Button onClick={() => { nav("/") }} className='btn btn-danger text-right px-4'>x</Button>
                                            </div>

                                            <form >
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" ></i>
                                                    <span className="h1 fw-bold mb-0">LogIn</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" >Email address</label>
                                                    <input type="email" className="form-control form-control-lg"
                                                        value={email}
                                                        onChange={(e) => { setemail(e.target.value) }}

                                                    />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control form-control-lg"
                                                        value={password}
                                                        onChange={(e) => { setpassword(e.target.value) }}

                                                    />
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <input onClick={hendlesumbit} className="btn btn-dark btn-lg btn-block" type="button" name="" value="Login"
                                                    />
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" >Don't have an account?
                                                    <a href="#!" onClick={() => { nav("/singup") }}>Register here</a></p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />

        </div>
    )
}

export default Login
