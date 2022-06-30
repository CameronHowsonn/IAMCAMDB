import { useEffect, useState } from 'react'
import { getFilmCredits } from './../helpers/films'
import MoviePerson from './MoviePerson'

const MovieCredits = ({ config, id }) => {
  const [credits, setCredits] = useState([])
  const [currentCredits, setCurrentCredits] = useState([])
  const [index, setIndex] = useState(10)

  useEffect(() => {
    getFilmCredits(id).then(data => setCredits(data.cast))
  }, [id])

  useEffect(() => {
    setCurrentCredits(credits.slice(0, index))
  }, [credits, index])

  return (
    <section className="movie-credits">
      <div className="movie-credits__inner">
        <h1 className="movie-credits__title">
          Cast <span className="opaque small-text">({credits.length})</span>
        </h1>
        <ul className="movie-credits__list">
          {currentCredits.length > 0 ? (
            currentCredits.map(cast => (
              <li
                key={cast.id}
                className={`movie-credits__item ${
                  cast.profile_path ? 'has-profile' : 'no-profile'
                }`}
              >
                <MoviePerson person={cast} config={config} />
              </li>
            ))
          ) : (
            <p className="movie-credits__no-results">No results found</p>
          )}
          {credits.length > index && (
            <li className={`movie-credits__item`}>
              {currentCredits.length === index && (
                <h4
                  class="movie-credits__show-more"
                  onClick={() => setIndex(oldIndex => oldIndex + 11)}
                >
                  Show More
                </h4>
              )}
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default MovieCredits
