import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Nav1 from './Nav'
import Footer from './Footer'
import { Userlogin } from './App'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Poetry() {

  let [poetry, setpoetry] = useState("")
  console.log(poetry)
  let nav = useNavigate()
  let { logoutuser } = useContext(Userlogin)

  // display poetry cart

  useEffect(() => {
    fetch("http://localhost:4003/poetry")
      .then((res) => { return res.json() })
      .then((op) => {
        setpoetry(op)

      })
  }, [])

  // addtocart & match cart :-

  let hendlecard = (poid) => {

    if (logoutuser) {
      return toast.warn(' please logIn first', {
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
    }

    fetch("http://localhost:4009/addtocart")
      .then((res) => { return res.json() })
      .then((op) => {
        let findcart = op.find((v) => {
          return v.id == poid.id
        })

        if (findcart) {
          alert("cart is alrady exits")
        }

        else if (!findcart) {

          fetch("http://localhost:4009/addtocart", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(poid)
          })
          nav("/poetry1")
        }
      })

    console.log(poid)



  }
  return (
    <div>
      <Nav1></Nav1>
      <div className='container'>
        <div className='row justify-content-center gap-3 my-5'>

          {
            poetry && poetry.map((v) => (
              <div className="card col-xl-3 text-start" >
                <img className="card-img-top w-75" src={v.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{v.name}</h5>
                  <span className='text-success fs-4'>{v.price}</span>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button className="btn btn-warning mx-2" onClick={() => { hendlecard(v) }}>Add to Cart</button>

                </div>
              </div>

            ))
          }

        </div>

      </div>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  )
}

export default Poetry