import { useEffect, useState } from 'react'
import { getTVShowCredits } from '../helpers/tv-shows'
import MoviePerson from './../movies/MoviePerson'

const TVCredits = ({ id, config }) => {
  const [credits, setCredits] = useState(null)
  const [currentCredits, setCurrentCredits] = useState([])
  const [index, setIndex] = useState(10)

  useEffect(() => {
    getTVShowCredits(id)
      .then(data => {
        setCredits(data.cast)
        return data.cast
      })
      .then(data => console.log(data))
  }, [id])

  useEffect(() => {
    if (credits) {
      setCurrentCredits(credits.slice(0, index))
    }
  }, [credits, index])

  return (
    <section className="movie-credits">
      <div className="movie-credits__inner">
        <h1 className="movie-credits__title">
          {credits && (
            <>
              Cast{' '}
              <span className="opaque small-text">({credits?.length})</span>
            </>
          )}
        </h1>
        {credits?.length === 0 && (
          <h2 className="no-credits center">No Credits Available</h2>
        )}
        <ul className="movie-credits__list">
          {currentCredits.length > 0 &&
            currentCredits.map(cast => (
              <li
                key={cast.id}
                className={`movie-credits__item ${
                  cast.profile_path ? 'has-profile' : 'no-profile'
                }`}
              >
                <MoviePerson person={cast} config={config} />
              </li>
            ))}
          {credits?.length > index && (
            <li className={`movie-credits__item`}>
              {currentCredits.length === index && (
                <h4
                  className="movie-credits__show-more"
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

export default TVCredits
