import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

export const Header = (): JSX.Element => {
    return (
        <header className="header">
            <Container maxWidth="md">
                <nav>
                    <a href="/" className="header__logo">
                        Play With GPT-3
                    </a>
                </nav>
                <Divider />
            </Container>
        </header>
    );
};
