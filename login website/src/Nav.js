
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Nav1() {

  let nav = useNavigate()

  let hendlelogin = () => {
    nav("/login")

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

                <NavDropdown.Item href="#action3">jadav</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>

              </NavDropdown>

            </Nav>

            <div>
              <Button className='mx-2 btn btn-success' onClick={hendlelogin}>LogIn</Button>
              <Button className='mx-2 btn btn-primary' onClick={()=>{nav("/singup")}}>SingUp</Button>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Nav1
