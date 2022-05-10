"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const react_1 = __importDefault(require("react"));
const search_svg_1 = __importDefault(require("../assets/icons/search.svg"));
const CloseRounded_1 = __importDefault(require("@material-ui/icons/CloseRounded"));
const core_1 = require("@material-ui/core");
const Search = (props) => {
    const [isFocused, setIsFocused] = react_1.default.useState(false);
    const [inputValue, setInputValue] = react_1.default.useState("");
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);
    const onChange = (event) => (value => {
        setInputValue(value);
        props.onSearchInput(value);
    })(event.target.value);
    const clearInput = () => setInputValue("");
    return (react_1.default.createElement("div", { className: "c-search " + (isFocused ? 'c-search--focused ' : '') + (inputValue ? 'c-search--active ' : '') },
        react_1.default.createElement(core_1.SvgIcon, { component: search_svg_1.default, className: "c-search__icon c-search__icon--search", color: "primary", viewBox: "0 0 600 427" }),
        react_1.default.createElement("input", { type: "text", className: "c-search__input", name: "search", onFocus: onFocus, onBlur: onBlur, onChange: onChange, value: inputValue, placeholder: "Search for films" }),
        react_1.default.createElement(CloseRounded_1.default, { className: "c-search__icon c-search__icon--close", onClick: clearInput }),
        react_1.default.createElement("span", { className: "c-search__highlight c-search__highlight--icon" }),
        react_1.default.createElement("span", { className: "c-search__highlight c-search__highlight--input" },
            " ",
            inputValue.replace(/ /g, "\u00a0"),
            " ")));
};
exports.Search = Search;
