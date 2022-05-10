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
exports.FilmSelection = void 0;
const react_1 = __importStar(require("react"));
const CloseRounded_1 = __importDefault(require("@material-ui/icons/CloseRounded"));
const core_1 = require("@material-ui/core");
const film_nominations_1 = require("components/film-nominations");
const popcorn_svg_1 = __importDefault(require("assets/icons/popcorn.svg"));
const FilmSelection = (props) => {
    const filmItems = react_1.default.createRef();
    const [modalVisibility, setModalVisibility] = (0, react_1.useState)(false);
    const handleSubmit = (event) => (event.preventDefault(), setModalVisibility(true));
    const handleClose = (event) => (event.preventDefault(), setModalVisibility(false));
    return (react_1.default.createElement("div", { className: "c-film-selection" },
        react_1.default.createElement("div", { className: "c-film-selection__container" },
            react_1.default.createElement("h2", { className: "c-film-selection__heading" }, "Your Nominations"),
            props.storedFilms.length ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "c-film-selection__items", ref: filmItems }, props.storedFilms.map((film, index) => react_1.default.createElement("div", { className: "c-film-selection__item", key: film.imdbID },
                    react_1.default.createElement("div", { className: "c-film-selection__image", style: { backgroundImage: `url(${film.Poster})` } }),
                    react_1.default.createElement("div", { className: "c-film-selection__wrapper" },
                        react_1.default.createElement("h3", { className: "c-film-selection__title" }, film.Title),
                        react_1.default.createElement("span", { className: "c-film-selection__meta-text" }, film.Year)),
                    react_1.default.createElement(CloseRounded_1.default, { className: "c-film-selection__delete", onClick: () => props.removeFilm(film, index) })))),
                react_1.default.createElement("a", { href: "#", className: "c-film-selection__submit " + (props.storedFilms.length === 5 ? '' : 'c-film-selection__submit--disabled'), onClick: handleSubmit }, " Submit Nominations"))) : '',
            !props.storedFilms.length ? (react_1.default.createElement("div", { className: "c-film-selection__placeholder" },
                react_1.default.createElement(core_1.SvgIcon, { component: popcorn_svg_1.default, className: "c-film-selection__popcorn", color: "primary", viewBox: "0 0 512 512" }),
                react_1.default.createElement("h3", { className: "c-film-selection__placeholder-text" }, "It appears to be quite empty in here, try nominating some films."))) : ""),
        react_1.default.createElement("div", { className: "c-film-selection__modal " + (modalVisibility ? 'c-film-selection__modal--visible' : '') },
            react_1.default.createElement("div", { className: "c-film-selection__modal-container" },
                react_1.default.createElement(film_nominations_1.FilmNominations, { films: props.storedFilms }),
                react_1.default.createElement("h2", { className: "c-film-selection__heading c-film-selection__modal-text" }, "Thank you for nominating the films."),
                react_1.default.createElement("a", { className: "c-film-selection__submit c-film-selection__submit--close", href: "#", onClick: handleClose }, "Close")))));
};
exports.FilmSelection = FilmSelection;
