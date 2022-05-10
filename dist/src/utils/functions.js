"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMutFilmPoster = void 0;
const getMutFilmPoster = (poster) => {
    return poster !== "N/A" ? poster.replace(/_SX(\d+)/g, "_SX800") : "https://critics.io/img/movies/poster-placeholder.png";
};
exports.getMutFilmPoster = getMutFilmPoster;
