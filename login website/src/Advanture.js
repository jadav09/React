import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Nav1 from './Nav'
import Footer from './Footer'

function Advanture() {
  let [advanture, setadvanture] = useState("")

  let nav = useNavigate()
  useEffect(() => {

    fetch("http://localhost:4007/advantures")
      .then((res) => { return res.json() })
      .then((op) => {
        setadvanture(op)
      })
  }, [])

  let hendlecard = (advid) => {

    nav("/advantur/" + advid)

  }

  return (
    <div>
      <Nav1/>
      <div className='containger'>
        <div className='row justify-content-center gap-3'>

          {
            advanture && advanture.map((v) => (
              <div className="card col-xl-3 text-start" >

                <img className="card-img-top w-75" src={v.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{v.name}</h5>
                  <span>star</span>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-warning mx-2" onClick={() => { hendlecard(v.id) }}>Add to Cart</a>
                  <a href="#" className="btn btn-primary">Buy now</a>
                </div>
              </div>

            ))
          }

        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Advanture