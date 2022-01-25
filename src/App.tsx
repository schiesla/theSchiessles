import React from "react";
import { NavBar } from "./components/NavBar";
import { Theme } from './services/Theme';

import Routes from "./Routes";
import { useSelector } from "react-redux";
import { AppState } from "./redux/reducer";

export const  App = () => {
  const theme: Theme = useSelector((state: AppState) => state.currentTheme);

  return (
    <div style={{backgroundColor: theme.background}}>
      <NavBar />
      <Routes />
    </div>
  );
}