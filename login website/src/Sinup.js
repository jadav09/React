import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Sinup() {


  let nav = useNavigate()


  let [fname, setfname] = useState("")
  let [lname, setlname] = useState("")
  let [email, setemail] = useState("")
  let [phone, setphone] = useState("")
  let [pass, setpass] = useState("")

  let data = { fname, lname, email, phone, pass }


  useEffect(() => {

  }, [])


  let hendlesumbit = (e) => {

    e.preventDefault()

    if (fname.length == "" || lname.length == "" || email.length == "" || phone.length == "" || pass.length == "") {
      return alert("Required!!!!")
    }

    fetch("http://localhost:4001/details")
    .then((res)=>{return res.json()})
    .then((op)=>{

      let compar = op.find((v)=>{

        return v.email == email

      })

     if(compar)
     {
      alert("alredy registerd")
     }

     else if(!compar)

     {
      fetch("http://localhost:4001/details", {
        method: "post",
        headers: { "content-type": "applicaion/json" },
        body: JSON.stringify(data)
      })

      alert("registration successfully...")
      nav("/")
    }

    })

  }




  return (
    <div>

      <section className="">

        <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">

              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-4 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <p >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">

                    <form onSubmit={hendlesumbit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">

                          <div className="form-outline">
                            <label className="form-label" >First name</label>
                            <input type="text" className="form-control"
                              value={fname}
                              onChange={(e) => { setfname(e.target.value) }}
                            />
                          </div>

                        </div>

                        <div className="col-md-6 mb-3">

                          <div className="form-outline">
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control"
                              value={lname}
                              onChange={(e) => { setlname(e.target.value) }}
                            />
                          </div>

                        </div>
                      </div>

                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-3">
                        <label className="form-label" >Email address</label>
                        <input type="email" className="form-control"
                          value={email}
                          onChange={(e) => { setemail(e.target.value) }}
                        />
                      </div>

                      <div className="form-outline mb-3">
                        <label className="form-label" >Phone no</label>
                        <input type="text" className="form-control"
                          value={phone}
                          onChange={(e) => { setphone(e.target.value) }}
                        />
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-3">
                        <label className="form-label" >Password</label>
                        <input type="password" className="form-control"
                          value={pass}
                          onChange={(e) => { setpass(e.target.value) }}
                        />
                      </div>

                      {/* <!-- Submit button --> */}
                      <button type="submit" className="btn btn-primary btn-block mb-4 mx-2">
                        Sign up
                      </button>
                      <button onClick={() => { nav("/") }} type="submit" className="btn btn-danger btn-block mb-4 ">
                        Close
                      </button>


                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Sinup
