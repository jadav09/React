import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Buy() {

    let { buyid } = useParams()

    let [show, setshow] = useState("")

    useEffect(() => {

        fetch("http://localhost:4009/addtocart/" + buyid)
            .then((res) => { return res.json() })
            .then((op) => {
                setshow(op)

                console.log(op)
            })
    }, [])

    return (

        <div className="container">

            <div className='row justify-content-center my-5'>

                <h4 className='text-primary'>book your order </h4>
                <div className="card  col-3 text-start">

                    <div className="card-body">
                        <img src={show.url} alt="" className='w-50' />
                        <h5 className="card-title text-success">{show.name}</h5>
                        <h5 className=''>{show.price}</h5>
                        <span className='text-warning'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                    </div>

                </div>


                <div className="form-row col-5 text-start text-success">

                    <div className="form-group col-md-6 text-start ">
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

                        <button className='btn btn-info' onClick={()=>{alert("order can not be execute")}}>Order Now</button>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default Buy