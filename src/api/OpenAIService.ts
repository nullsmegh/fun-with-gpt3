import { of , forkJoin, from, throwError } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, map, catchError } from "rxjs/operators";
import { Configuration, OpenAIApi, CreateCompletionResponse } from "openai";

const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


function getCompletion(prompt: string) {

    const $completion = openai.createCompletion("gpt-3.5-turbo-instruct", {
        prompt: prompt,
        max_tokens: 100,
    });

    return from($completion).pipe(map(response => response.data),catchError((error: any) => throwError(error)));

}

export { openai, getCompletion };