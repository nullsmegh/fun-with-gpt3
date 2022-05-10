"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmNominations = void 0;
const react_1 = __importDefault(require("react"));
const FilmNominations = (props) => {
    return (react_1.default.createElement("div", { className: "c-film-nominations" }, props.films.map((film, index) => react_1.default.createElement("div", { className: "c-film-nominations__nomination", key: film.imdbID },
        react_1.default.createElement("img", { src: film.Poster, className: "c-film-nominations__image" }),
        react_1.default.createElement("h2", { className: "c-film-nominations__title" }, film.Title),
        react_1.default.createElement("span", { className: "c-film-nominations__meta-text" }, film.Year)))));
};
exports.FilmNominations = FilmNominations;
