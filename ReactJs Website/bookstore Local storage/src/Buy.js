import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Userlogin } from './App'

function Buy() {

    let { price } = useContext(Userlogin)
    let { buyid } = useParams()

    var stordata = JSON.parse(localStorage.getItem("jadav7")) ?? []

    console.log(stordata)

    let buynow = stordata.filter((v) => {

        return v.id == buyid

    })

    console.log(buynow[0])


    return (

        <div className="container">

            <h4 className='text-primary'>book your order </h4>

            <div className='row justify-content-center my-5 style1'>

            
                <div className="card col-xl-5 col-sm-5 col-12">

                    <div className="card-body row justify-content-center wallpaper">
                        <img src={buynow[0].url} alt="" className='w-50' />
                        <h5 className="card-title text-success">{buynow[0].name}</h5>
                        <h5 className=''>{(buynow[0].price) * (price)}</h5>
                        <span className='text-warning'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                    </div>

                </div>


                <div className="form-row text-success col-xl-5 col-sm-5 col-12">

                    <div className="form-group col-md-6  ">
                        <label className='text-success fs-5' >Cart detalils</label>
                        <input type="text" className="form-control " placeholder="1234 4567 8910" />
                    </div>

                    <div className="form-group col-md-6 my-2">
                        <label >CVV</label>
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group col-md-6">
                        <label >Expiry</label>
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group col-md-6 mt-2">

                        <button className='btn btn-info' onClick={() => { alert("order can not be execute") }}>Order Now</button>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default Buy