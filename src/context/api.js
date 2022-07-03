import { createContext, useContext, useEffect, useState } from 'react'
import { getFilmGenres } from '../components/helpers/films'

const API = createContext()

export function ApiContext({ children }) {
  const [config, setConfig] = useState(null)
  const [genres, setGenres] = useState(null)

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
  return <API.Provider value={{ config, genres }}>{children}</API.Provider>
}

export function useAPI() {
  const context = useContext(API)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
