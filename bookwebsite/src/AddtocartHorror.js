import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AddtocartHorror() {

    let nav = useNavigate()
    let [horr, sethorr] = useState("")
    const [quantities, setQuantities] = useState({});



    console.log(quantities) // 1

    useEffect(() => {

        fetch("http://localhost:4009/addtocart")
            .then((res) => { return res.json() })
            .then((op) => {
                sethorr(op)
                const defaultQuantities = op.reduce((acc, item) => {
                    acc[item.id] = 1;
                    return acc;

                }, {});

                setQuantities(defaultQuantities);
                console.log(defaultQuantities) // return 1 everytime
            })
    }, [])


    // delete cart :-

    let deletid = (dlt) => {

        fetch("http://localhost:4009/addtocart/" + dlt, {
            method: "delete",
            headers: { "content-type": "application/json" }
        })
            .then(() => {

                // Remove the deleted item from the local state
                sethorr(horr.filter(item => item.id !== dlt));

                // Also remov e the quantity of the deleted item from quantities state
                setQuantities(prevQuantities => {
                    const updatedQuantities = { ...prevQuantities };
                    delete updatedQuantities[dlt];
                    return updatedQuantities;
                });

                console.log(setQuantities)
            })

        // window.location.reload()

    }

    // buy items :-

    let buy = (buyid, jadav) => {

        let data = { id: buyid, url: jadav.url, price: jadav.price * quantities[buyid], discound: jadav.discound, name: jadav.name }

        fetch("http://localhost:4009/addtocart/" + buyid, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        nav("/buy/" + buyid)


    }

    // increment quantities :-

    const inc = (itemId, amount) => {

        const newQuantity = (quantities[itemId] || 0) + amount;
        // Prevent quantity from becoming negative

        if (newQuantity > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [itemId]: newQuantity
            }));
        }
    };

    return (

        <div>
            <div className='container'>
                <h2 className='py-2 text-primary'>your Items</h2>

                {horr && horr.map((v) => (


                    <div className="row justify-content-center" key={v.id}>

                        <div className="col-6 row">
                            <div className="card  col-5 text-start">
                                <div className="card-body">
                                    <img src={v.url} alt="" className='w-50' />
                                    <h5 className="card-title text-success">{v.name}</h5>
                                    <h5 className=''>{v.price * (quantities[v.id])}</h5>
                                    <span className='text-warning'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </span>
                                </div>

                            </div>

                            <div className="col-5 border">

                                <div className="card-body">
                                    <h4 className='text-secondary'>add quantity</h4>
                                    <button className='btn btn-success mx-2' onClick={() => { inc(v.id, 1) }}> + </button>
                                    <b className='fs-4'>{quantities[v.id] || 1}</b>
                                    <button className='btn btn-danger mx-2' onClick={() => { inc(v.id, -1) }}> - </button>

                                    <button className='btn btn-primary' onClick={() => { buy(v.id, v) }}>Buy now</button>
                                    <button onClick={() => { deletid(v.id) }} className='btn btn-danger my-4'>Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default AddtocartHorror