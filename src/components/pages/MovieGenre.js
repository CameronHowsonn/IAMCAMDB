import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Film from '../Film'
import { getFilmsByGenre } from '../helpers/films'

const MovieGenre = ({ config, genres, filmList }) => {
  const { id, genreName } = useParams()
  const [films, setFilms] = useState([])
  const [sortBy, setSortBy] = useState('popularity.desc')
  const [page, setPage] = useState(1)

  useLayoutEffect(() => {
    getFilmsByGenre(id, page, sortBy).then(data => setFilms(data))
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
          {films?.results?.map(film => {
            const isInList = filmList?.includes(film.id)
            return (
              <li
                className="movie-genre__item search-results__list__item"
                key={film.id}
              >
                <Film
                  config={config}
                  film={film}
                  type="movie"
                  isInList={isInList}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default MovieGenre
