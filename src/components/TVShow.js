import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAPI } from '../context/api.js'
import { addShow, removeShow } from './helpers/localStorage.js'
import Image from './Image.js'

const TVShow = ({ film, isInList }) => {
  const { config } = useAPI()
  if (!film.poster_path) {
    return false
  }
  return (
    <div className="objFit film__container" aria-label={film.original_title}>
      <Link to={`/tv-show/${film.id}`} className="film__link">
        <div className="film__image">
          <Image
            src={`${config.images.base_url}${config.images.profile_sizes[1]}${film.poster_path}`}
            alt={`${film.title}`}
          />
        </div>
      </Link>
      <div className="film__details">
        <div className="film__details--rating">
          <FaStar />
          {film.vote_average.toFixed(1)}
        </div>
        <div
          className="film__details--list"
          onClick={() => (isInList ? removeShow(film.id) : addShow(film.id))}
        >
          {isInList ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
    </div>
  )
}

export default TVShow
