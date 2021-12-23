import { Action } from "./actions/actions";
import { SET_THEME } from "./actions/constants";
import { ThemeOne } from "../services/theme-one";
import produce from "@reduxjs/toolkit/node_modules/immer";

export type AppState = {
    [key: string]: any
}
const initialState: AppState = {
    theme: new ThemeOne()
}

export function themeReducer(state: AppState = initialState, action: Action): AppState {
    switch(action.type) {
        case SET_THEME: 
            return produce(state, (draftState) => {
                draftState.theme = action.payload;
            });
        default: 
            return state;
    }
}