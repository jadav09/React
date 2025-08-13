import { useContext, useEffect, useState } from "react";
import header_logo from "../src/images/logo.png"
import { MyContext } from "./App";
import { Bounce, toast } from "react-toastify";


const Header = () => {

    const { petclothcart, setpetclothCart } = useContext(MyContext)

    console.log(petclothcart)

    // const [addcart, setaddcart] = useState([])

    // useEffect(() => {

    //     // localStorage.removeItem("AddtoCart")

    // },[])




    const removeCart = (cartId) => {
        console.log("cartId =======>", cartId)
        const ItemDelet = petclothcart.filter((item) => {
            return item.id !== cartId
        })

        console.log(ItemDelet)

        localStorage.setItem("AddtoCart", JSON.stringify(ItemDelet))

        const updatedCart = JSON.parse(localStorage.getItem("AddtoCart"))
        console.log("updatedCart=>", updatedCart)

        setpetclothCart(updatedCart)

        toast.warn("item removed",
            {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })


    }


    return (
        <div className="header-content-wrap">

            <div className="container">
                <div className="header">

                    <div className="header-logo">
                        <a href=""><img src={header_logo} alt="" /></a>
                    </div>

                    <div className="search">
                        <input className="form-control" type="text" placeholder="Search for more than 10,000 products" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"></path>
                        </svg>
                    </div>

                    <div className="contact-number">

                        <div>
                            <p>Phone</p>
                            <a href="tel:+919104181053" >  <h5>+919104181053</h5></a>
                        </div>

                        <div>
                            <p>Email</p>
                            <a href="mailto:jadavdharmesh009@gmail.com" ><h5>jadavdharmesh009@gmail.com</h5></a>
                        </div>

                    </div>

                </div>

            </div>

            <div className='container-fluid'></div>

            <div className='container'>

                <nav className="navbar navbar-expand-lg">

                    <div className=" nav-icon d-lg-none">

                        <a data-toggle="tooltip" data-placement="top" title="User">
                            <svg width="24" height="24" viewBox="0 0 48 48"><g fill="currentColor"><path d="M6 36c0-4.965 11.993-8 18-8c6.008 0 18 3.035 18 8v6H6z"></path><path fillRule="evenodd" d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10" clipRule="evenodd"></path></g></svg>
                        </a>


                        <a data-toggle="tooltip" data-placement="top" title="Wishlist">

                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>
                        </a>

                        <a href="jadavscript:void(0)" data-toggle="tooltip" data-placement="top" title="add to cart" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">

                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></path></svg>
                        </a>

                        <a data-toggle="tooltip" data-placement="top" title="Search Products">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"></path>
                            </svg>
                        </a>

                    </div>


                    {/* Toggle button for Offcanvas */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Offcanvas Menu */}
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">contact</a>
                                </li>
                            </ul>

                            <div className="nav-icon">
                                <a data-toggle="tooltip" data-placement="top" title="User">
                                    <svg width="24" height="24" viewBox="0 0 48 48"><g fill="currentColor"><path d="M6 36c0-4.965 11.993-8 18-8c6.008 0 18 3.035 18 8v6H6z"></path><path fillRule="evenodd" d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10" clipRule="evenodd"></path></g></svg>
                                </a>

                                <a data-toggle="tooltip" data-placement="top" title="Wishlistr">

                                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>
                                </a>

                                <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Cart" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" className="position-relative">

                                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></path></svg>

                                    <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill p-1">
                                        {petclothcart.length}
                                    </span>


                                </a>

                            </div>
                        </div>
                    </div>
                </nav>


                {/* Add to cart offcanvase */}

                <div className="offcanvas offcanvas-end" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="Addtocart-wrapper">
                            <div className="cart-title">
                                <h4>Your Card</h4>
                                <h4>{petclothcart.length}</h4>

                            </div>

                            {
                                petclothcart && petclothcart.map((item) => (

                                    <div className="row align-items-center">

                                        <div className="col-10">
                                            <div className="cart-data">
                                                <p>{item.title}</p>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>

                                        <div className="col-2">
                                            <a href="jadavscript:void(0)"> <i className="fa fa-solid fa-trash-can text-danger" onClick={() => { removeCart(item.id) }}></i></a>
                                        </div>

                                    </div>
                                ))

                            }

                            <div className="cart-total">

                                <p>Titak(USD)</p>
                                <p>price</p>

                            </div>

                            <a href="">
                                <div className="check-out-btn">
                                    <h5>
                                        Continue to Checkout
                                    </h5>
                                </div>
                            </a>


                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Header;
