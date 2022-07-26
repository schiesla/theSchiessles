import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { Theme } from '../../interfaces/Theme';
import './nav-bar.css';

export const NavBar = () => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
    
    return (
        <Navbar sticky="top" style={{backgroundColor: currentTheme.primary}} variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img className='brand-img' src='schiessles_black.png' alt='the schiessles logo'/>
            </Navbar.Brand>
        </Navbar>
    );
}
