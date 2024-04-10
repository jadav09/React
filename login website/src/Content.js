import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Content() {
  let [img, setimg] = useState("")

  let nav = useNavigate()

  useEffect(() => {

    fetch("http://localhost:4002/images")
      .then((res) => { return res.json() })
      .then((op) => {
        setimg(op)
      })
  }, [])

  let hendlehorror = (hid) => {


    let get1 = img.filter((v) => {
      return v.id == hid
    })

    console.log(get1[0])



    if (get1[0].cardtital == "Horror") {
      nav("/horror")
    }

    if (get1[0].cardtital == "Thriller") {
      nav("/thriller")
    }

    if (get1[0].cardtital == "Fantasy") {
      nav("/fantasy")
    }

    if (get1[0].cardtital == "Since") {
      nav("/since")
    }

    if (get1[0].cardtital == "Adventure") {
      nav("/adnavture")
    }

    if (get1[0].cardtital == "Poetry") {
      nav("/poetry")
    }

  }

  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center gap-3 my-5'>
          <h1 className='text-secondary'>Catagories of books </h1>
          <p>star
            Some quick example text to build on the card title and make up the bulk of the card's content.star
            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    

          {
            img && img.map((v) => (
              <div className="card col-xl-3 text-start" onClick={() => { hendlehorror(v.id) }}>

                <img className="card-img-top" src={v.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{v.cardtital}</h5>
                  <span>star</span>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">show all books</a>
                </div>
              </div>

            ))
          }
        </div>

      </div>


    </div>
  )
}

export default Content
