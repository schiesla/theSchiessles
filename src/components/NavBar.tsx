import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducer';
import { Theme } from '../interfaces/Theme';

export const NavBar = () => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
    
    return (
        <Navbar sticky="top" style={{backgroundColor: currentTheme.primary}} variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <h3 style={{marginBottom: '0', color: currentTheme.onPrimary}}>Schiessles</h3>
            </Navbar.Brand>
        </Navbar>
    );
}
