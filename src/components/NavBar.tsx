import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducer';
import { Theme } from '../services/Theme';

export const NavBar = () => {
    const theme: Theme = useSelector((state: AppState) => state.theme);

    return (
        <Navbar style={{backgroundColor: theme.background}} variant="dark" expand="lg">
            <Navbar.Brand href="/">Schiessles</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/wedding">Wedding</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    );
}
