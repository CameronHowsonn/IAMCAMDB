import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LinkButton from '../Buttons/LinkButton.js'
import { getMoviesFromPerson } from '../helpers/person.js'

const PersonFilms = ({ id, config }) => {
  const [movies, setMovies] = useState(null)
  const [moviesShown, setMoviesShown] = useState(10)

  useEffect(() => {
    getMoviesFromPerson(id).then(data => setMovies(data))
    console.log(movies)
  }, [id])

  const showMoreMovies = useCallback(() => {
    setMoviesShown(moviesShown + 10)
  }, [moviesShown])
  return (
    <div>
      {movies && (
        <div className="person__films">
          <h3 className="person__films--title">Movies</h3>
          {movies.cast
            .map(movie => (
              <div key={movie.id} className="person__films--single">
                <Link to={`/movie/${movie.id}`}>
                  <p>
                    {movie.title.split(' ').splice(0, 5).join(' ')}
                    {movie.title.split(' ').splice(0, 3).length > 5 && '...'}
                    {movie.character && <span>{movie.character}</span>}
                  </p>
                </Link>
                <p className="person__film--single-date">
                  {' '}
                  {new Date(movie.release_date)
                    .toUTCString()
                    .split(' ')
                    .splice(0, 4)
                    .join(' ')}
                </p>
              </div>
            ))
            .splice(0, moviesShown)}
          {movies.cast.length > moviesShown && (
            <div onClick={showMoreMovies}>
              <LinkButton
                text="Show More"
                icon={'plus'}
                buttonStyle={'yellow'}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PersonFilms
