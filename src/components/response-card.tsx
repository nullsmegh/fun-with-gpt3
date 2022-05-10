import React, { useEffect } from 'react';
import { openai } from "api/OpenAIService";

import { Response } from "models/response.model";

export const ResponseCard = ({response} : {response: Response}): JSX.Element => {

    return (
    	<div className="response">
    		<div className="response__container">
    			<div className="response__row">
    				<span className="response__field">Prompt: </span>
    				<span className="response__value">{ response.prompt }</span>
    			</div>
    			<div className="response__row">
    				<span className="response__field">Response: </span>
    				<span className="response__value">
    					{ response.response }
    				</span>
    			</div>
    		</div>
    	</div>
    );
};
