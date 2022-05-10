"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryTheme = void 0;
const styles_1 = require("@material-ui/core/styles");
exports.PrimaryTheme = (0, styles_1.createMuiTheme)({
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
