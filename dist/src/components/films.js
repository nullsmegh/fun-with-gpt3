"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Films = void 0;
const react_1 = __importDefault(require("react"));
const film_card_1 = require("components/film-card");
const Films = (props) => {
    const handleOnSelection = (event, film, storedFilms) => {
        props.handleFilmSelection(event, film);
    };
    return (react_1.default.createElement("div", { className: "c-films" },
        react_1.default.createElement("h4", { className: "c-films__sub-heading" }, props.searchQuery),
        react_1.default.createElement("div", { className: "c-films__grid" },
            props.films.map((film) => react_1.default.createElement("div", { className: "c-films__col", key: film.imdbID },
                " ",
                react_1.default.createElement(film_card_1.FilmCard, { film: film, storedFilms: props.storedFilms, onSelection: handleOnSelection }),
                " ")),
            react_1.default.createElement("div", { className: "c-films__empty" }),
            react_1.default.createElement("div", { className: "c-films__empty" }))));
};
exports.Films = Films;
