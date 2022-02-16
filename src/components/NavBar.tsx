import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducer';
import { Theme } from '../interfaces/Theme';

export const NavBar = () => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
    // const themes: Theme[] = useSelector((state: AppState) => state.themes);

    // const dispatch = useDispatch();

    // const changeTheme = (): Theme => {
    //     let index = themes.findIndex((theme) => currentTheme === theme);
    //     index = (index + 1) % themes.length;
    //     return themes[index];
    // }

    return (
        <Navbar sticky="top" style={{backgroundColor: currentTheme.primary}} variant="dark" expand="lg">
            <Navbar.Brand href="/">Schiessles</Navbar.Brand>
        </Navbar>
    );
}
