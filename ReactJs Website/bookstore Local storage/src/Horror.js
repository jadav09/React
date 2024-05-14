import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Nav1 from './Nav'
import Footer from './Footer'
import { Userlogin } from './App'
import { details } from './details'


import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Horror() {

  console.log(details[1].horror)
  let { logoutuser } = useContext(Userlogin)

  let nav = useNavigate()


  // // addtocart & match cart :-

  let hendlecard = (hid) => {


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

    let chkdata = stordata.find((v) => {
      return v.id == hid.id
    })


    if (chkdata) {
      return alert("cart id alrady exits")
    }

    else {
      stordata.push(hid)
      localStorage.setItem("jadav7", JSON.stringify(stordata))
      nav("/addtocart")
    }

    console.log(stordata)
  }


  return (
    <div>
      <Nav1></Nav1>


        <div className='container'>
          <div className='row justify-content-center gap-3 my-5 wallpaper'>

            {
              details[1].horror && details[1].horror.map((v) => (
                <div className="card col-xl-3 col-md-4 my-3 style" key={v.id} >

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
                    <p className="card-text">Some quick example text to build on the card title of the card's content.</p>
                    <button href="#" className="btn btn-warning mx-2" onClick={() => { hendlecard(v) }}>Add to Cart</button>

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

export default Horror