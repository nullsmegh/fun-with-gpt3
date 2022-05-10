import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";

import { TextArea } from "components/text-area";
import { ResponseCard } from "components/response-card";
import { SubmitButton } from "components/submit-button";

import Divider from "@material-ui/core/Divider";

import { openai, getCompletion } from "api/OpenAIService";

import { Response } from "models/response.model";


export const Main = (): JSX.Element => {

	const [prompt, setPrompt] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const [responses, setResponses] = useState(Array<Response>());


	const handleSubmit = () => {

		setIsLoading(true);

		getCompletion(prompt).subscribe(data => {

			const response = new Response(prompt, data?.choices?.[0].text || "");

			setResponses((responses) => {
				return [...responses, response];
			});

			setPrompt("");

			setIsLoading(false);

		});

	}

	return (
		<main role="main" className="app">
			<Container maxWidth="md">
				<div className="app__form">
					<TextArea setPrompt={setPrompt} prompt={prompt} isLoading={isLoading} />
					<div className="app__submit">
						<SubmitButton onClick={handleSubmit} isLoading={isLoading} />
					</div>
				</div>

				<div className="app__responses">
					<h2 className="app__heading">
						Responses
						<Divider />
					</h2>
					{
                		responses.map((response: Response, index: number) => <ResponseCard key={index} response={response} />)
            		}
            		{
            			!responses.length && <p className="app__message">No responses yet. Send prompts to generate responses.</p>
            		}
				</div>

			</Container>

		</main>
	);
};
