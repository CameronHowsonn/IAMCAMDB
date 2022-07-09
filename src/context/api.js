import { createContext, useContext, useEffect, useState } from 'react'
import { getFilmGenres } from '../components/helpers/films'
import { getFilmList } from './../components/helpers/localStorage'

const API = createContext()

export function ApiContext({ children }) {
  const [config, setConfig] = useState(null)
  const [genres, setGenres] = useState(null)
  const [filmList, setFilmList] = useState(null)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        setConfig(data)
      })
      .then(() => getFilmGenres())
      .then(data => setGenres(data))
  }, [])

  useEffect(() => {
    const getFilms = async () => {
      getFilmList().then(list => setFilmList(list))
    }
    getFilms()

    window.addEventListener('localStorageAdd', () => getFilms())
    window.addEventListener('localStorageRemove', () => getFilms())
    return () => {
      window.removeEventListener('localStorageAdd', getFilms())
      window.removeEventListener('localStorageRemove', getFilms())
    }
  }, [])

  return (
    <API.Provider value={{ config, genres, filmList }}>{children}</API.Provider>
  )
}

export function useAPI() {
  const context = useContext(API)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
