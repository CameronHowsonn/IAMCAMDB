import { FaMinus, FaPlus, FaQuestionCircle, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  addFilm,
  addShow,
  removeFilm,
  removeShow,
} from './helpers/localStorage.js'

const Film = ({ film, config, isInList, type }) => {
  return (
    <div className="objFit film__container" aria-label={film.original_title}>
      <Link to={`/movie/${film.id}`} className="film__link">
        <div className="film__image">
          {film.poster_path ? (
            <img
              src={`${config?.images?.base_url}${config?.images?.profile_sizes[2]}${film?.poster_path}`}
              alt={`${film.title}`}
              loading="lazy"
            />
          ) : (
            <div className="film__image--placeholder">
              <FaQuestionCircle />
              <h5>{film.title}</h5>
            </div>
          )}
        </div>
      </Link>
      <div className="film__details">
        {film.vote_average > 0 && film.vote_average.toFixed(1) !== 0 && (
          <div className="film__details--rating">
            <FaStar />
            {film?.vote_average.toFixed(1)}
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
