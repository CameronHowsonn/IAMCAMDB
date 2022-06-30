import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMoviesFromPerson } from '../helpers/person'

const PersonFilms = ({ id }) => {
  const [movies, setMovies] = useState(null)
  const [moviesShown, setMoviesShown] = useState(10)

  useEffect(() => {
    async function getData() {
      const data = await getMoviesFromPerson(id)
      setMovies(data)
    }
    getData()
  }, [id])

  const showMoreMovies = useCallback(() => {
    setMoviesShown(moviesShown + 10)
  }, [moviesShown])
  return (
    <div>
      {movies && (
        <div className='person__films'>
          <h3>Movies</h3>
          {movies.cast
            .map((movie) => (
              <div key={movie.id} className='person__films--single'>
                <Link to={`/movie/${movie.id}`}>
                  {movie.title.split(' ').splice(0, 5).join(' ')}
                  {movie.title.split(' ').splice(0, 3).length > 5 && '...'}
                </Link>
                <p>
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
            <p onClick={showMoreMovies}>Show More</p>
          )}
        </div>
      )}
    </div>
  )
}

export default PersonFilms
