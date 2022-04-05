import { Theme } from "../interfaces/Theme";

class Light implements Theme {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    onSurface: string;
    onError: string;

    constructor() {
        this.primary = "#f9a109";
        this.secondary = "#09f9a1";
        this.background = "#ece8e1";
        this.surface = "#e3ddd2";
        this.error = "#B00020";
        this.onPrimary = "#191001";
        this.onSecondary = "#000000";
        this.onBackground = "#191001";
        this.onSurface = "#191001";
        this.onError = "#FFFFFF";
    }
}

class Dark implements Theme {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    onSurface: string;
    onError: string;

    constructor() {
        this.primary = "#a28c6a";
        this.secondary = "#f9a109";
        this.background = "#3e3628";
        this.surface = "#4d4332";
        this.error = "#CF6679";
        this.onPrimary = "#000000";
        this.onSecondary = "#000000";
        this.onBackground = "#edeceb";
        this.onSurface = "#edeceb";
        this.onError = "#000000";
    }
}

export const themes: Theme[] = [new Dark(), new Light()];