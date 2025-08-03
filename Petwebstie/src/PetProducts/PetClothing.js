import React, { useEffect, useState } from 'react'
import ButtonCustom from '../componets/ButtonCustom'
import item1 from '../images/item1.jpg'

function PetClothing() {

    // const [cart, SetCart] = useState(JSON.parse(localStorage.getItem("AddToCart")) || [])
    // const [cart, SetCart] = useState([])
    // console.log(cart)
    const Petclothing = [
        {
            "id": 1,
            "images": item1,
            "title": "T-shirts",
            "rate": "",
            "price": "$18.00",
            "perdiscount": "-18%"
        },
        {
            "id": 2,
            "images": item1,
            "title": "Hoodies",
            "rate": "",
            "price": "$18.00",
            "perdiscount": "-18%"
        },
        {
            "id": 3,
            "images": item1,
            "title": "Sweaters",
            "rate": "",
            "price": "$18.00",
            "perdiscount": "-18%"
        },
        {
            "id": 4,
            "images": item1,
            "title": "",
            "rate": "",
            "price": "$18.00",
            "perdiscount": "-18%"
        }
    ]

    // useEffect(() => {

    //     const storeCart = JSON.parse(localStorage.getItem("AddtoCart")) || []

    //     SetCart(storeCart)

    // }, [])


    const handleAddToCart = (item) => {

        console.log("storedate", item)
        // Always parse as array — fallback to []
        const existingCart = JSON.parse(localStorage.getItem("AddtoCart")) || [];

        // Ensure it's actually an array
        const cartArray = Array.isArray(existingCart) ? existingCart : [existingCart];

        // Optional: filter to prevent duplicates
        const filteredCart = cartArray.filter(cartItem => cartItem.id !== item.id);

        // Add the new item
        const updatedCart = [...filteredCart, item];

        // Save the updated array to localStorage
        localStorage.setItem("AddtoCart", JSON.stringify(updatedCart));


        // If you're using useState
        // SetCart(updatedCart);

        console.log("Cart after adding:", updatedCart);

        // localStorage.removeItem("AddtoCart")
    };


    // console.log(existingCart)

    return (
        <div className='pet-card-wraper'>
            <div className='container'>

                <div className='box-heading'>
                    <h2>Pet Clothing</h2>
                    <a href="">
                        <ButtonCustom
                            Button_Name={"shop now"}
                        />
                    </a>
                </div>

                <div className='box-container'>

                    {
                        Petclothing.map((value) => (
                            <>
                                <div className='pet-box' key={value.id}>
                                    <div className='pet-img'>
                                        <img src={value.images} alt=""
                                        // onError={(e) => {
                                        //     e.target.src = '/images/fallback.jpg';
                                        // }}

                                        // onError={(e) => {
                                        //     console.warn('Image failed to load:', value.images);
                                        //     e.target.src = '/images/fallback.jpg';
                                        // }}

                                        />
                                        {/* {console.log(value.images)} */}

                                    </div>
                                    <h3 className='title'>{value.title}</h3>
                                    <p className='star'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>

                                    </p>
                                    <h3><span>{value.price}</span></h3>
                                    <div className='add-to-cart'>
                                        <ButtonCustom Button_Name={'Add to cart'} handleclick={() => { handleAddToCart(value) }} />
                                        <a href="">
                                            <svg viewBox="0 0 28 28"><path fill="currentColor" d="M14.604 6.193a6.519 6.519 0 1 1 9.509 8.913l-9.58 9.672a.75.75 0 0 1-1.066 0l-9.58-9.672a6.52 6.52 0 0 1-.263-8.892c2.588-2.943 7.17-2.953 9.772-.021l.604.68z"></path></svg>

                                        </a>

                                    </div>

                                </div>
                            </>

                        )
                            // console.log(value)

                        )
                    }


                </div>

            </div>

        </div>
    )
}

export default PetClothing