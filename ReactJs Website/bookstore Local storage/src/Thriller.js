import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Nav1 from './Nav'
import Footer from './Footer'
import { Userlogin } from './App'
import { details } from './details'


import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Thriller() {

  console.log(details[2].thriller)
  let nav = useNavigate()
  let { logoutuser } = useContext(Userlogin)



  let hendlecard = (thrid) => {


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

    var stordata = JSON.parse(localStorage.getItem("jadav7")) ?? []

    console.log(thrid)


    var tid = stordata.find((v) => {

      return v.id == thrid.id

    })

    if (tid) {
      return alert("cart is alrady exits")
    }

    else {
      stordata.push(thrid)
      localStorage.setItem("jadav7", JSON.stringify(stordata))
      nav("/addthril")

    }
    console.log(tid)
    console.log(stordata)



  }
  return (
    <div>
      <Nav1 />
      <div className='container'>
        <div className='row justify-content-center gap-3 my-5 wallpaper'>

          {
            details[2].thriller && details[2].thriller.map((v) => (
              <div className="card col-xl-3 col-md-4  my-3  style" >

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
      <Footer />
      <ToastContainer />

    </div>
  )
}

export default Thriller