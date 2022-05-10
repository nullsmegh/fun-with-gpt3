import { createMuiTheme } from "@material-ui/core/styles";

export const PrimaryTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#1d1d1d",
        },
        secondary: {
            main: "#F1F0F0",
        }
    },
    typography: {
        fontFamily: [
            "Work Sans",
            "Crimson Text",
        ].join(","),
    },
});