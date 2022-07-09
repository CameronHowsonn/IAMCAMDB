import { useEffect, useLayoutEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa'
import { useAPI } from '../../context/api'
import AddListButton from '../Buttons/AddListButton'
import LinkButton from '../Buttons/LinkButton'
import { isFilmInList } from '../helpers/localStorage'
import HeroSearch from './HeroSearch'

const HomepagePopular = ({
  genres,
  search,
  trending = false,
  title,
  type = 'movie',
}) => {
  const url = trending
    ? `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

  const [filmData, setFilmData] = useState([])
  const [filmGenres, setFilmGenres] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentFilm, setCurrentFilm] = useState(null)
  const [isInList, setIsInList] = useState(false)
  const [elementIndex, setElementIndex] = useState(0)
  const { config } = useAPI()

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
    if (filmData != null) {
      setCurrentFilm(filmData[currentIndex])
      isFilmInList(
        filmData[currentIndex]?.id,
        filmData[currentIndex]?.title
      ).then(result => setIsInList(result))
    }
  }, [currentIndex, filmData, elementIndex])

  useEffect(() => {
    if (!genres) {
      return
    }

    if (!currentFilm) {
      return
    }

    const gen = []

    currentFilm?.genre_ids?.map(ids => {
      genres.genres.map(genre => {
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
                src={`${config?.images?.base_url}${config?.images?.backdrop_sizes[1]}${currentFilm?.backdrop_path}`}
                alt={`${currentFilm?.title}`}
                loading="eager"
              />
            )}
            <div className="homepage__popular-details">
              <header className="hompage__popular-header">
                {currentFilm?.vote_average && (
                  <h2 className="homepage__popular-details--stars">
                    <FaStar />
                    {currentFilm?.vote_average}
                  </h2>
                )}

                {currentFilm?.original_title && (
                  <>
                    <h5>{title}</h5>
                    <h1 className="homepage__popular-details-title big-text">
                      {currentFilm?.original_title}
                    </h1>
                  </>
                )}
              </header>
              <div className="homepage__popular-details--tags film-tags">
                {filmGenres &&
                  filmGenres?.map((genre, index) => {
                    return (
                      <span className="film-tags__item" key={`genre--${index}`}>
                        <p>
                          {genre}
                          <span className="film-tags__item-seperator">
                            {index === filmGenres?.length - 1 ? '' : ', '}
                          </span>
                        </p>
                      </span>
                    )
                  })}
              </div>
              <div
                className="homepage__popular-details--buttons"
                key={elementIndex}
              >
                <AddListButton
                  id={currentFilm?.id}
                  icon={'plus'}
                  disabled={isInList}
                  setElementIndex={setElementIndex}
                  type={type}
                />
                <LinkButton
                  link={`/movie/${currentFilm?.id}`}
                  text={'Learn More'}
                  buttonStyle="yellow"
                />
              </div>
            </div>
            {search && (
              <div className="homepage__popular--search">
                <HeroSearch />
              </div>
            )}
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
