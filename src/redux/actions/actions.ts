import { Theme } from "../../services/Theme";
import { SET_THEME } from "./constants";

export interface Action {
    type: string,
    payload: any
}

export const setTheme = (theme: Theme) => ({type: SET_THEME, payload: theme})