import { useLayoutEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useAPI } from '../../context/api'
import Film from '../Film'
import { getFilmsByGenre } from '../helpers/films'
import SortSelect from '../SortSelect'

const MovieGenre = () => {
  const { id, genreName } = useParams()
  const [films, setFilms] = useState([null])
  const [sortBy, setSortBy] = useState('popularity.desc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(2)
  const { filmList } = useAPI()

  useLayoutEffect(() => {
    getFilmsByGenre(id, page, sortBy).then(data => {
      setFilms(data)
      setTotalPages(data.total_pages)
    })
  }, [id, page, sortBy])

  return (
    <section className={`movie-genre`}>
      <div className="movie-genre__inner">
        <header className="movie-genre__header">
          {genreName && (
            <h1 className="movie-genre__title big-text">
              Movies under {genreName}
            </h1>
          )}
          <SortSelect setSortBy={setSortBy} />
        </header>
        <ul className="movie-genre__list search-results__list">
          {films?.results?.map(film => {
            const isInList = filmList?.includes(film.id)
            return (
              <li
                className="movie-genre__item search-results__list__item"
                key={film.id}
              >
                <Film film={film} type="movie" isInList={isInList} />
              </li>
            )
          })}
        </ul>
        {films?.results && !films?.results?.length && genreName && (
          <section className="no-results">
            <h2>No Results found for movies under {genreName} </h2>
          </section>
        )}
        {totalPages > 1 ? (
          <div className="search__pagination">
            <button
              className="search__pagination__button button prev"
              onClick={() => {
                setPage(page - 1)
              }}
              disabled={page === 1}
            >
              <FaLongArrowAltLeft />
              Previous
            </button>
            <button
              className="search__pagination__button button next"
              onClick={() => {
                setPage(page + 1)
              }}
              disabled={page === totalPages}
            >
              Next
              <FaLongArrowAltRight />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default MovieGenre
