"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const react_1 = __importStar(require("react"));
const Container_1 = __importDefault(require("@material-ui/core/Container"));
const textarea_1 = require("components/textarea");
const submit_button_1 = require("components/submit-button");
const OpenAIService_1 = require("api/OpenAIService");
const Main = () => {
    const [prompt, setPrompt] = (0, react_1.useState)("");
    const [responses, setResponses] = (0, react_1.useState)(Array());
    const handleSubmit = () => {
        (0, OpenAIService_1.getCompletion)(prompt).subscribe(response => {
        });
    };
    return (react_1.default.createElement("main", { className: "main" },
        react_1.default.createElement(Container_1.default, { maxWidth: "md" },
            react_1.default.createElement("div", { className: "main__form" },
                react_1.default.createElement(textarea_1.TextArea, { setPrompt: setPrompt }),
                react_1.default.createElement("div", { className: "main__submit" },
                    react_1.default.createElement(submit_button_1.SubmitButton, { onClick: handleSubmit }))),
            react_1.default.createElement("div", { className: "main__responses" },
                react_1.default.createElement("h2", { className: "main__heading" },
                    "Responses",
                    react_1.default.createElement(Divider, null))))));
};
exports.Main = Main;
