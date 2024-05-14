import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Userlogin } from './App';

function AddToCartHorror() {

    let {price,setprice} = useContext(Userlogin)


    const [stordata, setStordata] = useState(() => JSON.parse(localStorage.getItem("jadav7")) || []);
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();

    const updateQuantity = (itemId, quantity) => {
        const updatedData = stordata.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity };
            }
            return item;
        });
        setStordata(updatedData);
        localStorage.setItem("jadav7", JSON.stringify(updatedData));
    };

    const increment = (itemId) => {
        const updatedQuantity = (quantities[itemId] || 1) + 1;

        setQuantities(prevQuantities => ({ ...prevQuantities, [itemId]: updatedQuantity }));

        updateQuantity(itemId, updatedQuantity);
    };

    const decrement = (itemId) => {
        const updatedQuantity = Math.max((quantities[itemId] || 1) - 1, 0);
        setQuantities(prevQuantities => ({ ...prevQuantities, [itemId]: updatedQuantity }));
        updateQuantity(itemId, updatedQuantity);
    };

    const deleteItem = (itemId) => {
        const updatedData = stordata.filter(item => item.id !== itemId);
        setStordata(updatedData);
        localStorage.setItem("jadav7", JSON.stringify(updatedData));
    };

    const buyItem = (itemId) => {
        navigate(`/buy/${itemId}`);
    };

    return (
        <div>
            <div className='container'>
                <h2 className='py-2 text-primary'>Your Items</h2>
                {stordata.map(item => (

                    <div className="row justify-content-center" key={item.id}>

                        {setprice(quantities[item.id] || 1)}

                        <div className="col-xl-6 col-12 row justify-content-center my-2 border style1 ">

                            <div className="card col-5 text-start wallpaper">
                                <div className="card-body">
                                    <img src={item.url} alt="" className='w-50' />
                                    <h5 className="card-title text-success">{item.name}</h5>
                                    <h5 className=''>{(item.price) * (quantities[item.id] || 1) }</h5>
                                    <span className='text-warning'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="col-xl-6 col-12 row justify-content-center">
                                <div className="card-body">
                                    <h4 className='text-secondary'>Add quantity</h4>
                                    <button className='btn btn-success mx-2' onClick={() => increment(item.id)}> + </button>
                                    <b className='fs-4'>{quantities[item.id] || 1}</b>
                                    <button className='btn btn-danger mx-2' onClick={() => decrement(item.id)}> - </button>
                                    <button className='btn btn-primary mx-1' onClick={() => buyItem(item.id)}>Buy now</button>
                                    <button className='btn btn-danger my-4' onClick={() => deleteItem(item.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}           

export default AddToCartHorror;
