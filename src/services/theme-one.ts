import { Theme } from "./Theme";

export class ThemeOne implements Theme {
    primary: string;
    secondary: string;
    nav: string;
    background: string;
    primaryFont: string;
    secondaryFont: string;

    constructor() {
        this.primary = "#000000";
        this.secondary = "#FF5733";
        this.nav = "#000000";
        this.background = "#000000"
        this.primaryFont = "#5C5C5C";
        this.secondaryFont = "#C70039";
    }
}