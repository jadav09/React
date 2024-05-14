import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Nav1 from './Nav'
import Footer from './Footer'
import { Userlogin } from './App'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { details } from './details'

function Advanture() {

  let nav = useNavigate()

  let { logoutuser } = useContext(Userlogin)



  // addtocart & match cart :-

  let hendlecard = (advid) => {



    if (logoutuser) {

      return toast.warn(' please logIn first', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    var stordata = JSON.parse(localStorage.getItem("jadav7")) ?? []

    var chkdata = stordata.find((v) => {
      return v.id == advid.id

    })

    if (chkdata) {
      alert("cart is alrady exits")
    }

    else {
      stordata.push(advid)
      localStorage.setItem("jadav7", JSON.stringify(stordata))
      nav("/advantur")
    }

  }

  return (
    <div>
      <Nav1 />
      <div className='wallpaper'>
        
       
      <div className='container'>
        <div className='row justify-content-center gap-3 my-5 '>

          {
            details[5].advantures && details[5].advantures.map((v) => (
              <div className="card col-xl-3 col-md-4  my-3  text-start style" key={v.id} >

                <div className='row justify-content-center hdn '>

                  <img className="card-img-top w-75 imgscl pt-3" src={v.url} alt="Card image cap" />

                </div>

                <div className="card-body text-center">
                  <h5 className="card-title text-primary">{v.name}</h5>
                  <span className='text-warning'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <p><span className='text-success fs-5'>${v.price}</span></p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button className="btn btn-warning mx-2" onClick={() => { hendlecard(v) }}>Add to Cart</button>

                </div>
              </div>

            ))
          }

        </div>

      </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Advanture