import { NavBar } from "./components/NavBar";
import { Theme } from './interfaces/Theme';

import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/reducer";
import { setTheme } from "./redux/actions/actions";

export const  App = () => {
  const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);
  const themes: Theme[] = useSelector((state: AppState) => state.themes);
  const dispatch = useDispatch();

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const useDarkMode = mq.matches;

  dispatch(setTheme(useDarkMode ? themes[0] : themes[1]));

  mq.addEventListener('change', function (evt) {
    dispatch(setTheme(evt.matches ? themes[0] : themes[1]));
  });

  document.getElementsByTagName("html")[0].style.backgroundColor = currentTheme.background;
    
  return (
    <div>
      <NavBar />
      <div className="background-match" style={{height: '100vh', backgroundColor: currentTheme.background}}>
      <Routes />
      </div>
    </div>
  );
}