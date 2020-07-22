const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title)
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.filterByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.filterByYear = function (year) {
  return this.films.filter(film => film.year === year);
}

module.exports = Cinema;
