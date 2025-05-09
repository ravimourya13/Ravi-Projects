import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <BootstrapNavbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Nav className="me-3">
                    <Nav.Link 
                        as={Link} 
                        to="/" 
                        active={location.pathname === '/'} 
                        className="text-white fw-bold"
                    >
                        Home
                    </Nav.Link>
                </Nav>
                {/* <BootstrapNavbar.Brand as={Link} to="/employees">Employee Management</BootstrapNavbar.Brand> */}
                
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar; 