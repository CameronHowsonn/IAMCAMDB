module.exports = {
  getPersonById: async function (id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    const data = await response.json()
    return data
  },
  getMoviesFromPerson: async function (id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    const data = await response.json()
    return data
  },
  getListOfPeople: async function () {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
    const data = await response.json()
    return data
  },
}
