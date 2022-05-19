import React, {useEffect, useRef} from "react";
import {getPromptIdea} from "api/PromptGeneratorService";

export const TextArea = ({setPrompt, prompt, isLoading}: {setPrompt: React.Dispatch<React.SetStateAction<string>>; prompt: string; isLoading: boolean}): JSX.Element => {


    const [inputValue, setInputValue] = React.useState("");

    const [focus, setFocus] = React.useState(false);

    const [prompts, setPrompts] = React.useState(Array<string>());

    const promptOverflowRef = useRef<HTMLElement>(null);

    const promptTextPrepend = "Write a story about "


    useEffect(() => {

        const prompts = [...Array(3)].map(() => getPromptIdea());
        prompts.unshift("auto-bots fighting with cookie monsters.");

        setPrompts(prompts);

    }, []);

    const getCurrentPrompt = () => {

        if(focus) return;

        const promptOverflow = promptOverflowRef.current || {} as any;
        const promptChildren = promptOverflow.children || [];
        let promptTextSelected = "";

        for (const item of promptChildren) {
            if(item.getBoundingClientRect().top - promptOverflow.getBoundingClientRect().top === 0) {
                promptTextSelected = item.textContent;
            } 
        }

        setPrompt(promptTextPrepend + promptTextSelected);
    }

    useEffect(() => prompt ? setFocus(true) : setFocus(false), [prompt]);

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(event.target.value);

    };

    const textAreaClassList = ["text-area", isLoading ? "text-area--busy" : "", focus ? "text-area--focus" : ""].join(" ");

    return (
        <div className={textAreaClassList}>

            <label className="text-area__label">Enter Prompt</label>

            <span className="text-area__prompt">

                Eg. prompt: {promptTextPrepend}
                <span className="text-area__prompt--overflow" ref={promptOverflowRef}>
                    {prompts.map((promptText, i) => (
                        <span className="text-area__prompt--inner" key={i}>
                            { promptText }
                        </span>
                    ))}{" "}
                </span>

            </span>

            <textarea className="text-area__input" disabled={isLoading} onChange={onChange} onFocus={getCurrentPrompt} value={prompt}></textarea>
        </div>
    );
};
