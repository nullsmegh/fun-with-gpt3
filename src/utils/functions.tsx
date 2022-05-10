const getMutFilmPoster = (poster: any) => {
  return poster !== "N/A" ? poster.replace(/_SX(\d+)/g, "_SX800"): "https://critics.io/img/movies/poster-placeholder.png";
};

export { getMutFilmPoster }