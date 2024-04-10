import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

let num = 1

function AddtocartSince() {

    let [qun, setqun] = useState(num)

    let { scid } = useParams("")

    let [since, setsince] = useState("")

    useEffect(() => {
        fetch("http://localhost:4006/since/" + scid)
            .then((res) => { return res.json() })
            .then((op) => {
                setsince(op)
                console.log(op.id)

            })

    },[])
  return (
    <div>
        <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-sm-6 row">

                        <div className="card  col-6 text-start">
                            <div className="card-body">
                                <img src={since.url} alt="" className='w-100' />
                                <h5 className=''> ${since.price}</h5>
                                <span className='text-warning'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>
                                <h4 className="card-title text-success">{since.name}</h4>
                            </div>

                        </div>

                        <div className="col-6">

                            <div className="card-body">
                                <h3 className='text-secondary'>add quantity</h3>
                                <button className='btn btn-success mx-2' onClick={() => { setqun(qun + 1) }}> + </button>
                                <b className='fs-4'>{qun}</b>
                                <button className='btn btn-danger' onClick={() => { setqun(qun - 1) }}> - </button>

                                <div className='my-3'>
                                    <button className='btn btn-primary'>Buy now</button>
                                </div>
                            </div>


                        </div>

                    </div>



                </div>

            </div>
    </div>
  )
}

export default AddtocartSince