import React, {useState, useEffect} from "react";

import {TextArea} from "components/text-area";
import {ResponseCard} from "components/response-card";
import {SubmitButton} from "components/submit-button";

import Snackbar from "@material-ui/core/Snackbar";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import Divider from "@material-ui/core/Divider";

import {openai, getCompletion} from "api/OpenAIService";

import {Response} from "models/response.model";

export const Main = (): JSX.Element => {
    const [prompt, setPrompt] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [validate, setValidate] = React.useState(true);

    const [isError, setIsError] = React.useState(false);

    const [errorMessage, setErrorMessage] = React.useState("");

    const [responses, setResponses] = useState(Array<Response>());

    useEffect(() => { prompt.length !== 0 && setValidate(true) }, [prompt]);

    const handleSubmit = () => {

    	if(prompt.length === 0) {
    		setValidate(false);
    		return;
    	}

        getCompletion(prompt)
            .subscribe(
                data => {
                    const response = new Response(prompt, data?.choices?.[0].text || "");

                    setResponses(responses => {
                        return [...responses, response];
                    });

                    resetPrompt();
                },
                error => {
                    setErrorMessage(error.response?.status >= 400 ? "Please check the OPENAI API KEY and try again." : "Please check your network connection and try again.");
                    setIsError(true);
                }
            )
            .add(() => setIsLoading(false));

        setIsLoading(true);

    };

    const resetPrompt = () => {
    	setPrompt("");
    }


    return (
        <main role="main" className="app">
            <Container maxWidth="md">
                <div className="app__form">
                    <TextArea setPrompt={setPrompt} prompt={prompt} isLoading={isLoading} />
                    <div className="app__submit">
                    	<p className={"app__validate " + (!validate ? "app__validate--active" : "")}>Please enter a prompt.</p>
                        <SubmitButton onClick={handleSubmit} isLoading={isLoading} />
                    </div>
                </div>

                <div className="app__responses">

                    <h2 className="app__heading">
                        Responses
                        <Divider />
                    </h2>

                    {responses.map((response: Response, index: number) => 
                        <ResponseCard key={index} response={response} /> )}

                    {!responses.length && <p className="app__message">No responses yet. Send prompts to generate responses.</p>}

                </div>

                <Snackbar open={isError} autoHideDuration={6000} onClose={() => setIsError(false)}>
                    <Alert severity="error" onClose={() => setIsError(false)}>
                        {errorMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </main>
    );
};
