module.exports = {
  search: async function (term, page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${term}&page=${page}&include_adult=false`
    )
    const data = await response.json()
    return data
  },
}
