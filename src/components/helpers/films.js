export async function getTrendingFilms(timeframe) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/${timeframe}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
  const data = await response.json()
  return data
}
export async function getFilmById(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
  const data = await response.json()
  return data
}
export async function getFilmCredits(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
  )
  const data = await response.json()
  return data
}
export async function getFilmImages(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`
  )
  const data = await response.json()
  return data
}

export async function getSimilarFilms(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  return data
}

export async function getRecommendations(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  return data
}

export async function getReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  console.log(data)
  return data
}

export async function getFilmGenres() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
  const data = await response.json()
  console.log(data)
  return data
}

export async function getFilmsByGenre(id, page, sortBy) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=${sortBy}&with_genres=${id}&page=${page}`
  )
  const data = await response.json()
  return data
}
