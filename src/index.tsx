import React from "react";
import ReactDOM from "react-dom";
import { PrimaryTheme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { StylesProvider } from '@material-ui/styles';

const App = () => {

    return (
        <ThemeProvider theme={PrimaryTheme}>
        	<StylesProvider injectFirst>
            	<Header />
            	<Main />
            </StylesProvider>
        </ThemeProvider>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
