import { Link } from 'react-router-dom'
import { useAPI } from '../../context/api'

const MovieGenres = () => {
  const { genres } = useAPI()

  return (
    <div className="movie-genres">
      <div>
        <header className="movie-genres__header">
          <h1 className="movie-genres__title big-text">Genres</h1>
        </header>
      </div>
      <ul className="movie-genres__list">
        {genres?.genres?.map(genre => {
          return (
            <li className="movie-genres__genre" key={genre.id}>
              <Link
                to={`/tv-shows/genre/${genre.name.toLowerCase()}/${genre.id}`}
              >
                <div className="movie-genres__genre-name">{genre.name}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieGenres
