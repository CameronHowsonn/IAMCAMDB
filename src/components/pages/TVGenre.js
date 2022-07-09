import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAPI } from '../../context/api'
import Film from '../Film'
import { getTVShowsByGenre } from '../helpers/tv-shows'

const TVGenre = () => {
  const { id, genreName } = useParams()
  const [shows, setShows] = useState([])
  const [sortBy, setSortBy] = useState('popularity.desc')
  const [page, setPage] = useState(1)
  const { tvList } = useAPI()

  useLayoutEffect(() => {
    if (genreName && page && sortBy) {
      getTVShowsByGenre(genreName, page, sortBy).then(data => setShows(data))
    }
  }, [genreName, page, sortBy])

  return (
    <section className={`movie-genre`}>
      <div className="movie-genre__inner">
        <header className="movie-genre__header">
          {genreName && (
            <h1 className="movie-genre__title big-text">
              TV Shows under {genreName}
            </h1>
          )}

          <select
            name="sort-by"
            id="sort-by"
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="popularity.desc">Popularity (DESC)</option>
            <option value="popularity.asc">Popularity (ASC)</option>
            <option value="release_date.desc">Release Date (DESC)</option>
            <option value="release_date.asc">Relase Date (ASC)</option>
            <option value="revenue.desc">Revenue (DESC)</option>
            <option value="revenue.asc">Revenue (ASC)</option>
            <option value="vote_average.desc">Rating (DESC)</option>
            <option value="vote_average.asc">Rating (ASC)</option>
          </select>
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
      </div>
    </section>
  )
}

export default TVGenre
