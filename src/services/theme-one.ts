import { Theme } from "./Theme";

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
        this.primary = "#6200EE";
        this.secondary = "#03DAC6";
        this.background = "#FFFFFF";
        this.surface = "#FFFFFF";
        this.error = "#B00020";
        this.onPrimary = "#FFFFFF";
        this.onSecondary = "#000000";
        this.onBackground = "#000000";
        this.onSurface = "#000000";
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
        this.primary = "#BB86FC";
        this.secondary = "#03DAC6";
        this.background = "#121212";
        this.surface = "#2a2a2a";
        this.error = "#CF6679";
        this.onPrimary = "#000000";
        this.onSecondary = "#000000";
        this.onBackground = "#FFFFFF";
        this.onSurface = "#FFFFFF";
        this.onError = "#000000";
    }
}

export const themes: Theme[] = [new Dark(), new Light()];