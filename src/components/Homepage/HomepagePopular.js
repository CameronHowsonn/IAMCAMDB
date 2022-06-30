import { useEffect, useLayoutEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa'
import AddListButton from '../Buttons/AddListButton'
import LinkButton from '../Buttons/LinkButton'
import HeroSearch from './HeroSearch'

const HomepagePopular = ({ config, genres }) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

  const [filmData, setFilmData] = useState([])
  const [filmGenres, setFilmGenres] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentFilm, setCurrentFilm] = useState(null)

  useLayoutEffect(() => {
    const getData = async () => {
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          setFilmData(data.results)
          setCurrentFilm(data.results[0])
          return data
        })
    }
    getData()
  }, [url])

  useEffect(() => {
    setCurrentFilm(filmData[currentIndex])
  }, [currentIndex, filmData])

  useEffect(() => {
    if (!genres) {
      return
    }

    if (!currentFilm) {
      return
    }

    const gen = []

    currentFilm.genre_ids.map(ids => {
      genres.map(genre => {
        if (genre.id === ids) {
          gen.push(genre.name)
          return genre.name
        }
      })
    })
    setFilmGenres(gen)
  }, [genres, currentFilm])

  return (
    <div>
      {currentFilm && currentFilm && (
        <div data-film={currentFilm.id} className="homepage__popular">
          <div className="homepage__popular-image__container">
            {config && currentFilm && (
              <img
                className="homepage__popular-image objFit"
                src={`${config.images.base_url}${config.images.backdrop_sizes[2]}${currentFilm.backdrop_path}`}
                alt={`${currentFilm.title}`}
              />
            )}
            <div className="homepage__popular-details">
              <header className="hompage__popular-header">
                {currentFilm.vote_average && (
                  <h2 className="homepage__popular-details--stars">
                    <FaStar />
                    {currentFilm.vote_average}
                  </h2>
                )}

                {currentFilm.original_title && (
                  <h1 className="homepage__popular-details-title big-text">
                    {currentFilm.original_title}
                  </h1>
                )}
              </header>
              <div className="homepage__popular-details--tags film-tags">
                {filmGenres &&
                  filmGenres.map((genre, index) => {
                    return (
                      <span className="film-tags__item" key={`genre--${index}`}>
                        <p>
                          {genre}
                          <span className="film-tags__item-seperator">
                            {index === filmGenres.length - 1 ? '' : ', '}
                          </span>
                        </p>
                      </span>
                    )
                  })}
              </div>
              <div className="homepage__popular-details--buttons">
                <AddListButton id={currentFilm.id} icon={'plus'} />
                <LinkButton
                  link={`/movie/${currentFilm.id}`}
                  text={'Learn More'}
                  buttonStyle="yellow"
                />
              </div>
            </div>
            <div className="homepage__popular--search">
              <HeroSearch />
            </div>
            <div className="homepage__popular-details--arrows">
              <button
                disabled={currentIndex <= 0}
                onClick={() => setCurrentIndex(index => index - 1)}
              >
                <FaLongArrowAltLeft />
              </button>
              <button
                disabled={currentIndex >= filmData.length - 1}
                onClick={() => setCurrentIndex(index => index + 1)}
              >
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomepagePopular
