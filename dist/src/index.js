"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const theme_1 = require("./theme");
const styles_1 = require("@material-ui/styles");
const header_1 = require("./components/header");
const main_1 = require("./components/main");
const styles_2 = require("@material-ui/styles");
const App = () => {
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: theme_1.PrimaryTheme },
        react_1.default.createElement(styles_2.StylesProvider, { injectFirst: true },
            react_1.default.createElement(header_1.Header, null),
            react_1.default.createElement(main_1.Main, null))));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
