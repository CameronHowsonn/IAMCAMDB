import { useLayoutEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useAPI } from '../../context/api'
import Film from '../Film'
import { getTVShowsByGenre } from '../helpers/tv-shows'
import SortSelect from '../SortSelect'

const TVGenre = () => {
  const { id, genreName } = useParams()
  const [shows, setShows] = useState([])
  const [sortBy, setSortBy] = useState('popularity.desc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { tvList } = useAPI()

  useLayoutEffect(() => {
    if (id && page && sortBy) {
      getTVShowsByGenre(id, page, sortBy).then(data => {
        setShows(data)
        setTotalPages(data.total_pages)
      })
    }
  }, [id, page, sortBy])

  return (
    <section className={`movie-genre`}>
      <div className="movie-genre__inner">
        <header className="movie-genre__header">
          {genreName && (
            <h1 className="movie-genre__title big-text">
              TV Shows under {genreName}
            </h1>
          )}
          <SortSelect setSortBy={setSortBy} />
        </header>
        <ul className="movie-genre__list search-results__list">
          {shows?.results?.map(film => {
            const isInList = tvList?.includes(film.id)
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
        {!shows?.results?.length && genreName && (
          <section className="no-results">
            <h2>No Results found for TV Shows under {genreName} </h2>
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

export default TVGenre
