import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  addFilm,
  addShow,
  removeFilm,
  removeShow,
} from './helpers/localStorage.js'

const Film = ({ film, config, isInList, type }) => {
  if (!film.poster_path) {
    return false
  }
  return (
    <div className="objFit film__container" aria-label={film.original_title}>
      <Link to={`/movie/${film.id}`} className="film__link">
        <div className="film__image">
          <img
            src={`${config?.images?.base_url}${config?.images?.profile_sizes[3]}${film?.poster_path}`}
            alt={`${film.title}`}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="film__details">
        {film.vote_average && (
          <div className="film__details--rating">
            <FaStar />
            {film.vote_average.toFixed(1)}
          </div>
        )}
        <div
          className="film__details--list"
          onClick={() =>
            type === 'movie'
              ? isInList
                ? removeFilm(film.id)
                : addFilm(film.id)
              : isInList
              ? removeShow(film.id)
              : addShow(film.id)
          }
        >
          {isInList ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
    </div>
  )
}

export default Film
