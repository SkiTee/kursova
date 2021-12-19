import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const MenuComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Sakura</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Головна</Nav.Link>
                    <Nav.Link href="/price">Меню</Nav.Link>
                    <Nav.Link href="/about">Про нас</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MenuComponent;
