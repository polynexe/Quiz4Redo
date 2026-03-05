import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
return (
    <header>
    <Navbar expand="lg" bg="primary" variant="dark" collapseOnSelect>
        <Container>
        <Navbar.Brand href='/'>ClickUp Beta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/create"><i className="fas fa-plus"></i>Create Project</Nav.Link>
            <Nav.Link as={Link} to="/user"><i className="fas fa-user"></i>User</Nav.Link>
            <Nav.Link as={Link} to="/addproduct"><i className="fas fa-plus"></i>Add Product</Nav.Link>
            <Nav.Link as={Link} to="/projects"><i className="fas fa-list"></i>Projects</Nav.Link>    
            <Nav.Link as={Link} to="/login"><i className="fas fa-sign-in-alt"></i>Login</Nav.Link> 
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
)
}

export default Header