const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title)
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.filterByProperty = function (property, value) {
  return this.films.filter(film => film[property] === value);
};

// Cinema.prototype.filterByYear = function (year) {
//   return this.films.filter(film => film.year === year);
// }

Cinema.prototype.hasFilmsFrom = function (year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.allFilmsLongerThan = function (length) {
  return this.films.every(film => film.length > length);
};

Cinema.prototype.totalFilmLength = function () {
  return this.films.reduce((acc, film) => acc + film.length, 0);
};

module.exports = Cinema;
