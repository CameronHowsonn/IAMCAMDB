module.exports = {
  getFilmList: async function () {
    const filmList = localStorage.getItem('filmList')
    return filmList ? JSON.parse(filmList) : []
  },
  addFilm: async function (id) {
    const currentFilms = localStorage.getItem('filmList')
    const filmList = currentFilms ? JSON.parse(currentFilms) : []
    if (!filmList.includes(id)) {
      filmList.push(id)
    }
    localStorage.setItem('filmList', JSON.stringify(filmList))
    const event = new Event('localStorageAdd')
    window.dispatchEvent(event)
  },
  removeFilm: async function (id) {
    const currentFilms = localStorage.getItem('filmList')
    const filmList = currentFilms ? JSON.parse(currentFilms) : []
    const newFilmList = filmList.filter((film) => film !== id)
    localStorage.setItem('filmList', JSON.stringify(newFilmList))
    const event = new Event('localStorageRemove')
    window.dispatchEvent(event)
  },
}
