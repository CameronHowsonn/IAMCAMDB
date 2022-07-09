import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.sass'
import { getFilmGenres } from './components/helpers/films'
import { FullscreenMenu } from './components/Navigation'
import Actors from './components/pages/Actors'
import Homepage from './components/pages/Homepage'
import Movie from './components/pages/Movie'
import MovieGenre from './components/pages/MovieGenre'
import Movies from './components/pages/Movies'
import Person from './components/pages/Person'
import Search from './components/pages/Search'
import TVGenre from './components/pages/TVGenre'
import TVShow from './components/pages/TVShow'
import TVShows from './components/pages/TVShows'
import { ApiContext } from './context/api'
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
  const [genres, setGenres] = useState(null)
  const header = useRef()

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

  return (
    <Router>
      <ApiContext>
        <div className="App">
          <ScrollTop />
          <header className="header" ref={header}>
            <FullscreenMenu data={dataMenu} colorIcon="white" header={header} />
          </header>
          <main className="main">
            <div className="main__content">
              <div className="main__content-content">
                {genres && (
                  <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/person/:id" element={<Person />} />
                    <Route path="/search/:searchTerm" element={<Search />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/tv-show/:id" element={<TVShow />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route
                      path="/movies/genre/:genreName/:id"
                      element={<MovieGenre />}
                    />
                    <Route path="/tv-shows" element={<TVShows />} />
                    <Route
                      path="/tv-shows/genre/:genreName/:id"
                      element={<TVGenre />}
                    />
                    <Route path="/actors" element={<Actors />} />
                  </Routes>
                )}
              </div>
            </div>
          </main>
        </div>
      </ApiContext>
    </Router>
  )
}

export default App
