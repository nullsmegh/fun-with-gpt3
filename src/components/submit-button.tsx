import React, { useEffect } from 'react';
//import { FilmCard } from "components/film-card"; 
import { getCompletion } from "api/OpenAIService";

export const SubmitButton = ({onClick, isLoading} : {onClick: () => void, isLoading: boolean}): JSX.Element => {

	const submitButtonClasses = ["submit-button", isLoading ? "submit-button--busy" : ""].join(" ");

    return (
    	<button className={submitButtonClasses} onClick={onClick}>
    			<span className="submit-button__pulse">
    				<span className="submit-button__pulse-bounce"></span>
    				<span className="submit-button__pulse-bounce"></span>
    				<span className="submit-button__pulse-bounce"></span>
    			</span>
    			<span className="submit-button__text">Send Prompt</span>
    	</button>
    );
};
