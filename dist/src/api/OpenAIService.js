"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompletion = exports.openai = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
exports.openai = openai;
function getCompletion(prompt) {
    const $completion = openai.createCompletion("text-davinci-002", {
        prompt: prompt,
        max_tokens: 100,
    });
    return (0, rxjs_1.from)($completion).pipe((0, operators_1.map)((response) => response.data));
}
exports.getCompletion = getCompletion;
