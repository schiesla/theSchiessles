import { Button, Navbar } from 'react-bootstrap';
import { AppState } from '../../redux/reducer';
import { Theme } from '../../interfaces/Theme';
import './nav-bar.css';
import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdDarkMode, MdSettingsSuggest } from "react-icons/md";
import { MouseEventHandler, ReactElement, useState } from 'react';
import { setTheme } from '../../redux/actions/actions';

interface ThemeOption {
    icon: ReactElement, 
    action: MouseEventHandler<HTMLButtonElement>
}

export const NavBar = () => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
    const themes: Theme[] = useSelector((state: AppState) => state.themes);
    const dispatch = useDispatch();
    const themeButtonOptions: ThemeOption[] = [
        {
            icon: <MdLightMode/>,
            action: () => {
                dispatch(setTheme(themes[1]));
                localStorage.setItem('customThemeChoice', "light");
                setThemeButton(themeButtonOptions[1]);
            }
        },
        {
            icon: <MdDarkMode/>,
            action: () => {
                dispatch(setTheme(themes[0]));
                localStorage.setItem('customThemeChoice', "dark");
                setThemeButton(themeButtonOptions[2]);
            }
        },
        {
            icon: <MdSettingsSuggest/>,
            action: () => {
                localStorage.removeItem('customThemeChoice');
                const mq = window.matchMedia('(prefers-color-scheme: dark)');
                const useDarkMode = mq.matches;
                dispatch(setTheme(useDarkMode ? themes[0]: themes[1]));
                setThemeButton(themeButtonOptions[0]);
            }
        }
    ];
    const [themeButton, setThemeButton] = useState<ThemeOption>(themeButtonOptions[0]);
    
    return (
        <Navbar sticky="top" style={{backgroundColor: currentTheme.primary}} variant="dark" expand="lg">
            <Navbar.Brand href="/" style={{flex: 1}}>
                <img className='brand-img' src={process.env.PUBLIC_URL + '/schiessles_black.png'} alt='the schiessles logo'/>
            </Navbar.Brand>
            <Button variant="link" onClick={themeButton.action}>{themeButton.icon}</Button>
        </Navbar>
    );
}
