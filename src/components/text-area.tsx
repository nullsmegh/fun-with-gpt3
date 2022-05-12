import React, {useEffect, useRef} from "react";
import {getPromptIdea} from "api/PromptGeneratorService";

export const TextArea = ({setPrompt, prompt, isLoading}: {setPrompt: React.Dispatch<React.SetStateAction<string>>; prompt: string; isLoading: boolean}): JSX.Element => {


    const [inputValue, setInputValue] = React.useState("");

    const [focus, setFocus] = React.useState(false);

    const [prompts, setPrompts] = React.useState(Array<string>());


    useEffect(() => {

        const prompts = [...Array(3)].map(() => getPromptIdea());
        prompts.unshift("Write a dialogue about autobots shoveling ice with cookie monsters.");

        setPrompts(prompts);

    }, []);

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        event.target.value ? setFocus(true) : setFocus(false);
        setPrompt(event.target.value);

    };

    const textAreaClasses = ["textarea", isLoading ? "textarea--busy" : "", focus ? "textarea--focus" : ""].join(" ");

    return (
        <div className={textAreaClasses}>

            <label className="textarea__label">Enter Prompt</label>

            <span className="textarea__prompt">

                Example prompt:
                <span className="textarea__prompt--overflow">
                    {prompts.map((prompt, i) => (
                        <span className="textarea__prompt--inner" key={i}>
                            {prompt}
                        </span>
                    ))}{" "}
                </span>

            </span>

            <textarea className="textarea__input" disabled={isLoading} onChange={onChange} value={prompt}></textarea>
        </div>
    );
};
