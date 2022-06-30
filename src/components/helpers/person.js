export async function getPersonById(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
  const data = await response.json()
  console.log(data)
  return data
}

export async function getMoviesFromPerson(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
  const data = await response.json()
  return data
}

export async function getListOfPeople() {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  return data
}

export async function getOneTaggedPhoto(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  return data.results[Math.floor(Math.random() * data.results.length)]
}
