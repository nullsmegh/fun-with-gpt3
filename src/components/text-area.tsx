import React, { useEffect } from 'react';

export const TextArea = ({ setPrompt, prompt, isLoading }: {setPrompt: React.Dispatch<React.SetStateAction<string>>, prompt: string, isLoading: boolean}): JSX.Element => {

	const [inputValue, setInputValue] = React.useState("");

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(event.target.value);

	const textAreaClasses = ["textarea", isLoading ? "textarea--busy" : ""].join(" ");

    return (
        <div className={textAreaClasses}>
            <label className="textarea__label">Enter Prompt</label>
            <textarea 	className="textarea__input" 
            			disabled={isLoading}
            			onChange={onChange}
            			value={prompt}
            			placeholder="Example prompt: Write a story about the cookie monsters fighting autobots."></textarea>
        </div>
    );
};



