"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmCard = void 0;
const react_1 = __importDefault(require("react"));
const FilmCard = (props) => {
    return (react_1.default.createElement("div", { className: "c-film-card " + (props.storedFilms.some((storedFilm) => storedFilm.imdbID === props.film.imdbID) ? "c-film-card--selected" : '') },
        react_1.default.createElement("div", { className: "c-film-card__container" },
            react_1.default.createElement("img", { className: "c-film-card__image", src: props.film.Poster }),
            react_1.default.createElement("h2", { className: "c-film-card__title" }, props.film.Title),
            react_1.default.createElement("span", { className: "c-film-card__meta-text" }, props.film.Year),
            react_1.default.createElement("a", { href: "#", className: "c-film-card__button", onClick: (event) => props.onSelection(event, props.film) }, "Nominate"))));
};
exports.FilmCard = FilmCard;
