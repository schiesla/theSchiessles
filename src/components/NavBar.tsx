import React from 'react';
import { Form, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/actions/actions';
import { AppState } from '../redux/reducer';
import { Theme } from '../services/Theme';

export const NavBar = () => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
    const themes: Theme[] = useSelector((state: AppState) => state.themes);

    const dispatch = useDispatch();

    const changeTheme = (): Theme => {
        let index = themes.findIndex((theme) => currentTheme === theme);
        index = (index + 1) % themes.length;
        return themes[index];
    }

    return (
        <Navbar style={{backgroundColor: currentTheme.nav}} variant="dark" expand="lg">
            <Navbar.Brand href="/">Schiessles</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Form.Check 
                type="switch"
                id="custom-switch"
                aria-label="Check this switch"
                onChange={() => dispatch(setTheme(changeTheme()))}/>
        </Navbar>
    );
}
