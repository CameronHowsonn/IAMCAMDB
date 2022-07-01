//Films

export async function getFilmList() {
  const filmList = localStorage.getItem('filmList')
  return filmList ? JSON.parse(filmList) : []
}

export async function addFilm(id) {
  const currentFilms = localStorage.getItem('filmList')
  const filmList = currentFilms ? JSON.parse(currentFilms) : []
  if (!filmList.includes(id)) {
    filmList.push(id)
  } else {
    return false
  }
  localStorage.setItem('filmList', JSON.stringify(filmList))
  const event = new Event('localStorageAdd')
  window.dispatchEvent(event)
}

export async function removeFilm(id) {
  const currentFilms = localStorage.getItem('filmList')
  const filmList = currentFilms ? JSON.parse(currentFilms) : []
  const newFilmList = filmList.filter(film => film !== id)
  localStorage.setItem('filmList', JSON.stringify(newFilmList))
  const event = new Event('localStorageRemove')
  window.dispatchEvent(event)
}

export async function isFilmInList(id) {
  const currentFilms = localStorage.getItem('filmList')
  const filmList = currentFilms ? JSON.parse(currentFilms) : []
  return filmList.includes(id)
}

//TV show
export async function getTvShowList() {
  const tvShowList = localStorage.getItem('showList')
  return tvShowList ? JSON.parse(tvShowList) : []
}

export async function addShow(id) {
  const currentShows = localStorage.getItem('showList')
  const showList = currentShows ? JSON.parse(currentShows) : []
  if (!showList.includes(id)) {
    showList.push(id)
  } else {
    return false
  }
  localStorage.setItem('showList', JSON.stringify(showList))
  const event = new Event('localStorageAdd')
  window.dispatchEvent(event)
}

export async function removeShow(id) {
  const currentShows = localStorage.getItem('showList')
  const showList = currentShows ? JSON.parse(currentShows) : []
  const newShowList = showList.filter(show => show !== id)
  localStorage.setItem('showList', JSON.stringify(newShowList))
  const event = new Event('localStorageRemove')
  window.dispatchEvent(event)
}
