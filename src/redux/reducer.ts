import { Action } from "./actions/actions";
import { SET_THEME } from "./actions/constants";
import { ThemeOne } from "../services/theme-one";

const initialState = {
    theme: ThemeOne
}

export function themeReducer(state: any, action: Action): any {
    switch(action.type) {
        case SET_THEME: 
            return [...state, {theme: action.payload}];
        default: 
            return state;
    }
}