import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.sass'
import { getFilmGenres } from './components/helpers/films'
import {
  getFilmList,
  getTvShowList,
} from './components/helpers/localStorage.js'
import { FullscreenMenu } from './components/Navigation'
import Homepage from './components/pages/Homepage'
import Movie from './components/pages/Movie'
import MovieGenre from './components/pages/MovieGenre'
import Movies from './components/pages/Movies'
import Person from './components/pages/Person'
import Search from './components/pages/Search'
import TVShow from './components/pages/TVShow'
import TVShows from './components/pages/TVShows'
import ScrollTop from './hooks/scroll-top'

const dataMenu = [
  {
    label: 'Movies',
    url: '/movies',
    sub_title: null,
    sub_menu: null,
  },
  {
    label: 'TV Shows',
    url: '/tv-shows',
    sub_title: null,
    sub_menu: null,
  },
  {
    label: 'Actors',
    url: '/actors',
    sub_title: null,
    sub_menu: null,
  },
]

function App() {
  const [config, setConfig] = useState(null)
  const [genres, setGenres] = useState(null)
  const header = useRef()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        setConfig(data)
        return data
      })
  }, [])

  useEffect(() => {
    getFilmGenres().then(data => setGenres(data))
  }, [])

  useLayoutEffect(() => {
    document.body.classList.add(
      `template--${window.location.href
        .split('/')[3]
        .replace('/', '')
        .toLowerCase()}`
    )
    return () => {
      document.body.classList.remove(
        `template--${window.location.href
          .split('/')[3]
          .replace('/', '')
          .toLowerCase()}`
      )
    }
  }, [])

  const [filmList, setFilmList] = useState(null)
  const [tvList, setTVList] = useState(null)

  useEffect(() => {
    const getFilms = async () => {
      getFilmList().then(list => setFilmList(list))
      getTvShowList().then(list => setTVList(list))
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
    <Router>
      <div className="App">
        <ScrollTop />
        <header className="header" ref={header}>
          <FullscreenMenu data={dataMenu} colorIcon="white" header={header} />
        </header>
        <main className="main">
          <div className="main__content">
            <div className="main__content-content">
              {config && genres && (
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={
                      <Homepage
                        config={config}
                        genres={genres}
                        filmList={filmList}
                        tvList={tvList}
                      />
                    }
                  />
                  <Route
                    path="/person/:id"
                    element={<Person config={config} />}
                  />
                  <Route
                    path="/search/:searchTerm"
                    element={<Search config={config} filmList={filmList} />}
                  />
                  <Route
                    path="/movie/:id"
                    element={
                      <Movie
                        config={config}
                        filmList={filmList}
                        genres={genres}
                      />
                    }
                  />
                  <Route
                    path="/tv-show/:id"
                    element={
                      <TVShow
                        config={config}
                        filmList={filmList}
                        genres={genres}
                      />
                    }
                  />
                  <Route
                    path="/movies"
                    element={
                      <Movies
                        config={config}
                        filmList={filmList}
                        genres={genres}
                      />
                    }
                  />
                  <Route
                    path="/movies/genre/:genreName/:id"
                    element={
                      <MovieGenre
                        genres={genres}
                        config={config}
                        filmList={filmList}
                      />
                    }
                  />
                  <Route
                    path="/tv-shows"
                    element={
                      <TVShows
                        config={config}
                        tvList={tvList}
                        genres={genres}
                      />
                    }
                  />
                </Routes>
              )}
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
