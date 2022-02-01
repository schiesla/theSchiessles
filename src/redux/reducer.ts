import { Action } from "./actions/actions";
import { SET_THEME } from "./actions/constants";
import { themes } from "../services/themes";
import produce from "@reduxjs/toolkit/node_modules/immer";

export type AppState = {
    [key: string]: any
}
const initialState: AppState = {
    themes: themes,
    currentTheme: themes[0]
}

export function themeReducer(state: AppState = initialState, action: Action): AppState {
    switch(action.type) {
        case SET_THEME: 
            return produce(state, (draftState) => {
                draftState.currentTheme = action.payload;
            });
        default: 
            return state;
    }
}