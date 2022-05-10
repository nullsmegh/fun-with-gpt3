"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCard = void 0;
const react_1 = __importDefault(require("react"));
const ResponseCard = (props) => {
    return (react_1.default.createElement("div", { className: "response" },
        react_1.default.createElement("div", { className: "response__container" },
            react_1.default.createElement("div", { className: "response__row" },
                react_1.default.createElement("span", { className: "response__field" }, "Prompt: "),
                react_1.default.createElement("span", { className: "response__value" }, "write a poem about dinousaurs in the snow")),
            react_1.default.createElement("div", { className: "response__row" },
                react_1.default.createElement("span", { className: "response__field" }, "Response: "),
                react_1.default.createElement("span", { className: "response__value" }, "There is a lot to be improved on here, you can polish the required features by crafting a nicer design, or improve the app by adding new features! Choose something that you feel best showcases your passion and skills.")))));
};
exports.ResponseCard = ResponseCard;
