import { Theme } from "./Theme";

class ThemeOne implements Theme {
    primary: string;
    secondary: string;
    nav: string;
    background: string;
    primaryFont: string;
    secondaryFont: string;

    constructor() {
        this.primary = "#000000";
        this.secondary = "#FF5733";
        this.nav = "#3a6b35";
        this.background = "#ebf0eb"
        this.primaryFont = "#5C5C5C";
        this.secondaryFont = "#C70039";
    }
}

class ThemeTwo implements Theme {
    primary: string;
    secondary: string;
    nav: string;
    background: string;
    primaryFont: string;
    secondaryFont: string;

    constructor() {
        this.primary = "#000000";
        this.secondary = "#FF5733";
        this.nav = "#990011FF";
        this.background = "#FCF6F5FF"
        this.primaryFont = "#5C5C5C";
        this.secondaryFont = "#C70039";
    }
}

export const themes: Theme[] = [new ThemeOne(), new ThemeTwo()];