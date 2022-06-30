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
  console.log(data)
  return data
}
export async function getFilmImages(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`
  )
  const data = await response.json()
  return data
}
