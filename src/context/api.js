import { createContext, useContext, useEffect, useState } from 'react'
import { getFilmGenres } from '../components/helpers/films'
import {
  getFilmList,
  getTvShowList,
} from './../components/helpers/localStorage'

const API = createContext()

export function ApiContext({ children }) {
  const [config, setConfig] = useState(null)
  const [genres, setGenres] = useState(null)
  const [filmList, setFilmList] = useState(null)
  const [tvList, setTVList] = useState(null)

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

    window.addEventListener('localStorageAddFilm', () => getFilms())
    window.addEventListener('localStorageRemoveFilm', () => getFilms())
    return () => {
      window.removeEventListener('localStorageAddFilm', getFilms())
      window.removeEventListener('localStorageRemoveFilm', getFilms())
    }
  }, [])

  useEffect(() => {
    const getShows = async () => {
      getTvShowList().then(list => setTVList(list))
    }
    getShows()

    window.addEventListener('localStorageAddTV', () => getShows())
    window.addEventListener('localStorageRemoveTV', () => getShows())
    return () => {
      window.removeEventListener('localStorageAddTV', getShows())
      window.removeEventListener('localStorageRemoveTV', getShows())
    }
  }, [])

  return (
    <API.Provider value={{ config, genres, filmList, tvList }}>
      {children}
    </API.Provider>
  )
}

export function useAPI() {
  const context = useContext(API)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
