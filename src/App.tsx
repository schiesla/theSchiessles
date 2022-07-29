import { NavBar } from "./components/nav-bar/nav-bar";
import { Theme, ThemeStyle } from './interfaces/Theme';

import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/reducer";
import { setTheme } from "./redux/actions/actions";
import { useEffect } from "react";
import { getTheme, getThemeFromString } from "./services/themes";

export const  App = () => {
  const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const custom = localStorage.getItem('customThemeChoice');
    if (custom) {
      dispatch(setTheme(getThemeFromString(custom)));
    }
    else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const useDarkMode = mq.matches;
      dispatch(setTheme(useDarkMode ? getTheme(ThemeStyle.DARK) : getTheme(ThemeStyle.LIGHT)));
  
      mq.addEventListener('change', function (evt) {
        dispatch(setTheme(evt.matches ? getTheme(ThemeStyle.DARK) : getTheme(ThemeStyle.LIGHT)));
      });
    }
    document.getElementsByTagName("body")[0].style.backgroundColor = currentTheme.background;
  });

  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
}