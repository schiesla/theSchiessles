import { Button, Navbar } from 'react-bootstrap';
import { AppState } from '../../redux/reducer';
import { Theme, ThemeStyle } from '../../interfaces/Theme';
import './nav-bar.css';
import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdDarkMode, MdSettingsSuggest } from "react-icons/md";
import { MouseEventHandler, ReactElement, useState } from 'react';
import { setTheme } from '../../redux/actions/actions';
import { getTheme, getThemeStyle } from '../../services/themes';

interface ThemeOption {
    icon: ReactElement, 
    previousTheme: ThemeStyle,
    action: MouseEventHandler<HTMLButtonElement>
}

export const NavBar = () => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
    const dispatch = useDispatch();
    const themeButtonOptions: ThemeOption[] = [
        {
            icon: <MdLightMode/>,
            previousTheme: ThemeStyle.SYSTEM,
            action: () => {
                dispatch(setTheme(getTheme(ThemeStyle.LIGHT)));
                localStorage.setItem('customThemeChoice', "light");
                setThemeButton(themeButtonOptions[1]);
            }
        },
        {
            icon: <MdDarkMode/>,
            previousTheme: ThemeStyle.LIGHT,
            action: () => {
                dispatch(setTheme(getTheme(ThemeStyle.DARK)));
                localStorage.setItem('customThemeChoice', "dark");
                setThemeButton(themeButtonOptions[2]);
            }
        },
        {
            icon: <MdSettingsSuggest/>,
            previousTheme: ThemeStyle.DARK,
            action: () => {
                localStorage.removeItem('customThemeChoice');
                const mq = window.matchMedia('(prefers-color-scheme: dark)');
                const useDarkMode = mq.matches;
                dispatch(setTheme(useDarkMode ? getTheme(ThemeStyle.DARK) : getTheme(ThemeStyle.LIGHT)));
                setThemeButton(themeButtonOptions[0]);
            }
        }
    ];
    const storageTheme: string = localStorage.getItem("customThemeChoice") ?? "";
    const storageThemeStyle = getThemeStyle(storageTheme)
    const [themeButton, setThemeButton] = useState<ThemeOption>(themeButtonOptions.find((option) => option.previousTheme === storageThemeStyle) ?? themeButtonOptions[2]);
    
    return (
        <Navbar sticky="top" style={{backgroundColor: currentTheme.primary}} variant="dark" expand="lg">
            <Navbar.Brand href="/" style={{flex: 1}}>
                <img className='brand-img' src={process.env.PUBLIC_URL + '/schiessles_black.png'} alt='the schiessles logo'/>
            </Navbar.Brand>
            <Button variant="link" onClick={themeButton.action}>{themeButton.icon}</Button>
        </Navbar>
    );
}
