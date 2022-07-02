import { Link } from 'react-router-dom'

const MovieGenres = ({ genres }) => {
  return (
    <div className="movie-genres">
      {genres?.genres?.map(genre => {
        return (
          <div className="movie-genres__genre" key={genre.id}>
            <Link to={`/movies/genre/${genre.id}`}>
              <div className="movie-genres__genre-name">{genre.name}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default MovieGenres