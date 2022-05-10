"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const Container_1 = __importDefault(require("@material-ui/core/Container"));
const Divider_1 = __importDefault(require("@material-ui/core/Divider"));
const Header = () => {
    return (react_1.default.createElement("header", { className: "header" },
        react_1.default.createElement(Container_1.default, { maxWidth: "md" },
            react_1.default.createElement("nav", null,
                react_1.default.createElement("a", { href: "/", className: "header__logo" }, "Fun With GPT-3")),
            react_1.default.createElement(Divider_1.default, null))));
};
exports.Header = Header;
