import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.sass'
import { getFilmList } from './components/helpers/localStorage'
import { FullscreenMenu } from './components/Navigation'
import Homepage from './components/Pages/Homepage'
import Movie from './components/Pages/Movies'
import Person from './components/Pages/Person'
import Search from './components/Pages/Search'

const dataMenu = [
  {
    label: 'Movies',
    url: 'movies',
    sub_title: null,
    sub_menu: null,
  },
  {
    label: 'TV Shows',
    url: 'tv-shows',
    sub_title: null,
    sub_menu: null,
  },
  {
    label: 'Actors',
    url: 'actors',
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
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres)
        return data
      })
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
    <Router>
      <div className="App">
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
