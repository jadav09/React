import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Nav1 from './Nav'
import Footer from './Footer'
import { Userlogin } from './App'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Horror() {

  let {logoutuser}  = useContext(Userlogin)
  console.log(logoutuser)

  let [horror, sethorror] = useState("")

  let nav = useNavigate()
  useEffect(() => {

    fetch("http://localhost:4003/horros")
      .then((res) => { return res.json() })
      .then((op) => {
        sethorror(op)
      })
  }, [])

  // addtocart & match cart :-

  let hendlecard = (addcardid) => {

    if(logoutuser)
    {
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
        return v.id == addcardid.id
      })

      if (findcart) {
        alert("cart is alrady exits")
      }

      else if (!findcart) {

        fetch("http://localhost:4009/addtocart", {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(addcardid)
        })
        nav("/addtocart")
      }

    })

  }

  return (
    <div>
      <Nav1></Nav1>

      <div className='container'>
        <div className='row justify-content-center gap-3 my-5'>

          {
            horror && horror.map((v) => (
              <div className="card col-xl-3 text-start" key={v.id} >

                <img className="card-img-top w-75" src={v.url} alt="Card image cap"  />
                <div className="card-body">
                  <h5 className="card-title text-primary">{v.name}</h5>
                  <span className='text-success fs-4'>{v.price}</span>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn btn-warning mx-2" onClick={() => { hendlecard(v) }}>Add to Cart</button>
                  
                </div>
              </div>
            ))
          }

        </div>

      </div>
      <Footer/>
      <ToastContainer/>

    </div>
  )
}

export default Horror