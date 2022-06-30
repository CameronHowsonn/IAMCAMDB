import { useEffect, useState } from 'react'
import { FaUserSlash } from 'react-icons/fa'
import { getFilmCredits } from './../helpers/films'
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
          {currentCredits.map(cast => (
            <li
              key={cast.id}
              className={`movie-credits__item ${
                cast.profile_path ? 'has-profile' : 'no-profile'
              }`}
            >
              <div className="movie-credits__item-image objFit">
                {cast.profile_path ? (
                  <img
                    className="movie-credits__image"
                    src={`${config.images.base_url}${config.images.profile_sizes[2]}${cast.profile_path}`}
                    alt={cast.name}
                  />
                ) : (
                  <FaUserSlash />
                )}
              </div>
              <div className="movie-credits__info">
                <h3 className="movie-credits__info--name">{cast.name}</h3>
                <p className="movie-credits__info--character opaque">
                  {cast.character}
                </p>
              </div>
            </li>
          ))}
          <li className={`movie-credits__item`}>
            {currentCredits.length == index && (
              <h4 onClick={() => setIndex(oldIndex => oldIndex + 11)}>
                Show More
              </h4>
            )}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MovieCredits
