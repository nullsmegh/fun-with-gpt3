"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilms = exports.searchFilm = exports.getFilm = void 0;
const rxjs_1 = require("rxjs");
const fetch_1 = require("rxjs/fetch");
const operators_1 = require("rxjs/operators");
const functions_1 = require("utils/functions");
const environment_1 = require("environments/environment");
const primaryEndpoint = new URL(environment_1.environment.apiUrl);
primaryEndpoint.searchParams.append("apikey", environment_1.environment.apiKey);
const getFilm = (id) => (0, fetch_1.fromFetch)(primaryEndpoint.toString() + "&i=" + id).pipe((0, operators_1.switchMap)((response) => response.json()));
exports.getFilm = getFilm;
const searchFilm = (search) => (0, fetch_1.fromFetch)(primaryEndpoint.toString() + "&s=" + search + "&type=movie").pipe((0, operators_1.switchMap)((response) => response.json()), (0, operators_1.map)((films) => {
    if (films.Response === "True") {
        films["Search"].map((film) => (film["Poster"] = (0, functions_1.getMutFilmPoster)(film["Poster"])));
    }
    return films;
}));
exports.searchFilm = searchFilm;
const getFilms = (films) => (0, rxjs_1.forkJoin)(films.map((film) => getFilm(film).pipe((0, operators_1.map)((film) => {
    if (film.Response === "True") {
        film["Poster"] = (0, functions_1.getMutFilmPoster)(film["Poster"]);
    }
    return film;
}))));
exports.getFilms = getFilms;
