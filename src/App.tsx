import { NavBar } from "./components/nav-bar/nav-bar";
import { Theme } from './interfaces/Theme';

import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/reducer";
import { setTheme } from "./redux/actions/actions";
import { useEffect } from "react";

export const  App = () => {
  const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
  const themes: Theme[] = useSelector((state: AppState) => state.themes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('customThemeChoice')) {
      dispatch(setTheme(localStorage.getItem('customThemeChoice') === "dark" ? themes[0] : themes[1]));
    }
    else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const useDarkMode = mq.matches;
      dispatch(setTheme(useDarkMode ? themes[0] : themes[1]));
  
      mq.addEventListener('change', function (evt) {
        dispatch(setTheme(evt.matches ? themes[0] : themes[1]));
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