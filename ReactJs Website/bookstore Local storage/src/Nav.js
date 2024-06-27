
import { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { Userlogin } from './App';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Nav1() {

  let { logoutuser, setlogoutuser,loginname} = useContext(Userlogin)

  console.log(logoutuser)
  console.log(loginname)



  let nav = useNavigate()

  let hendlelogin = () => {
    nav("/login")

  }

  let hendllogout =()=>{
    setlogoutuser(true)
    alert("are you sure logout?")
    nav("/")
  }
  let hendlecart = ()=>{

    if(logoutuser)
    {
      return toast.warn(' please logIn first', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // return alert("login first")
    }
    nav("/addtocart")

  }

  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">

        <Container fluid>

          <Navbar.Brand href="#">
            <img src='3c7af3c03a1fc34f679d6cb8d1af703a-removebg-preview.png' alt='' height={100} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">

            <Nav
              className="me-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll>

              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>

              <NavDropdown title="Service" id="navbarScrollingDropdown">

                <NavDropdown.Item href="#action3">Order releted </NavDropdown.Item>
                <NavDropdown.Item href="#action3">not buy order</NavDropdown.Item>
                <NavDropdown.Item href="#action3">help</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
            

              </NavDropdown>
              <button onClick={hendlecart} className='btn btn-warning fw-bold'><Nav.Link>
              <i className="fa-solid fa-cart-shopping fs-5 px-1"></i>
                My cart</Nav.Link></button>

            </Nav>

            <div className='me-5 mt-3'>
              {
                logoutuser ? (
                  <>
                    <Button className='mx-2 btn btn-success fw-bold px-4 py-2' onClick={hendlelogin}>LogIn</Button>
                    <Button className='mx-2 btn btn-primary fw-bold px-4 py-2' onClick={() => { nav("/singup") }}>SingUp</Button>
                  </>
                ) : (
                  <>
                  <p><span className='text-info fs-4 fw-bold border'>Welcome {loginname.firstname}</span></p>
                  <Button className='mx-2 btn btn-success fw-bold px-4' onClick={hendllogout}>Logout</Button>
                </>

                )
              }
              
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ToastContainer/>

    </div>
  )
}

export default Nav1
