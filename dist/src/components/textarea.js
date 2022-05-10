"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
const react_1 = __importDefault(require("react"));
const TextArea = (props) => {
    const [inputValue, setInputValue] = react_1.default.useState("");
    const onChange = (event) => props.setPrompt(event.target.value);
    return (react_1.default.createElement("div", { className: "textarea" },
        react_1.default.createElement("textarea", { className: "textarea__input", onChange: onChange, placeholder: "Example prompt: Write a story about the cookie monsters fighting autobots." })));
};
exports.TextArea = TextArea;
