import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { details } from './details'


function Content() {

  console.log(details[0].images)

  let nav = useNavigate()

  let hendlehorror = (hid) => {

    let get1 = details[0].images.filter((v) => {
      return v.id == hid
    })

    console.log(get1[0])


    // navigate related components: -

    if (get1[0].id == 1) {
      nav("/horror")
    }

    if (get1[0].id == 2) {
      nav("/thriller")
    }

    if (get1[0].id == 3) {
      nav("/fantasy")
    }

    if (get1[0].id == 4) {
      nav("/since")
    }

    if (get1[0].id == 5) {
      nav("/adnavture")
    }

    if (get1[0].id == 6) {
      nav("/poetry")
    }

  }

  return (
    <div className='wallpaper'>
      <div className='container '>
        <div className='row justify-content-center gap-3 my-5 '>
          <div className='catagories'>
          <h1 className='text-secondary'>Catagories of books </h1>
          <p>star
            Some quick example text to build on the card title and make up the bulk of the card's content.star
            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          {
            details[0].images && details[0].images.map((v) => (
              <div className="card col-xl-3 col-md-5 my-4 text-start style" key={v.id} onClick={() => { hendlehorror(v.id) }}>

                <img className="card-img-top" src={v.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{v.cardtital}</h5>

                  <p className="card-text text-success">Author <b>:- </b>
                    <a className='text-primary'>Stephen King,Bram Stoker,Dean Koontz,H p Lovecraft,Shirley Jackson,Mary Shelley</a>
                  </p>
                  <p> <span className='text-warning'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </span></p>
                  <button className="btn btn-primary allbook">show all books</button>
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
