import Container from 'react-bootstrap/Container'
import { useState } from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'

import PurchasesSideBar from './PurchasesSideBar'

const AppNavBar = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {

        const tokenValue= localStorage.getItem("token")
        if(tokenValue){
            setShow(true)
        }else{
            navigate('/login')
        }
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Ecomerce
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
                            <Nav.Link onClick={handleShow}>Sidebar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <PurchasesSideBar
            show={show}
            handleClose={handleClose}
            />
        </>
    );
}

export default AppNavBar