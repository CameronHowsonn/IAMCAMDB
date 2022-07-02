import { Link } from 'react-router-dom'
import MovieStar from './MovieStars'

const MovieDetail = ({ film, config, genres }) => {
  return (
    <section className="movie-detail">
      <div className="movie-detail__inner">
        <div
          className={`movie-detail__image ${
            film.poster_path ? 'image' : 'no-image'
          }`}
        >
          {film.poster_path ? (
            <img
              src={`${config?.images.base_url}${config?.images?.profile_sizes[3]}${film?.poster_path}`}
              alt={`film poster for ${film?.original_title}`}
              loading="lazy"
            />
          ) : (
            <h2>No Image Available</h2>
          )}
          <div className="movie-detail__image--details">
            {film?.vote_average > 0 && (
              <div className="movie-detail__image--details--stars">
                <h2 className="stars-title">{film?.vote_average}</h2>
                <h5 className="stars-subtitle">{film?.vote_count} Votes</h5>
                <div className="star-container">
                  <MovieStar stars={film?.vote_average} />
                </div>
              </div>
            )}
            <div className="movie-detail__image--details--money">
              <div className="budget">
                {film && film?.budget > 0 && (
                  <>
                    <p>Budget: </p>
                    <span>${film?.budget?.toLocaleString()}</span>
                  </>
                )}
              </div>
              <div className="budget">
                {film && film?.revenue > 0 && (
                  <>
                    <p>Revenue: </p>
                    <span>${film?.revenue?.toLocaleString()}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-detail__info">
          <h1 className="movie-detail__title">
            {film?.original_title} (
            {new Date(film?.release_date).toUTCString().split(' ')[3]})
          </h1>
          {film?.tagline && <h4>{film.tagline}</h4>}
          <div className="movie-detail__info-details">
            {film?.runtime && (
              <div className="movie-detail__info-details-item">
                <p className="movie-detail__info-details-item-value">
                  {film.runtime} minutes
                </p>
              </div>
            )}
            {film?.release_date && (
              <div className="movie-detail__info-details-item">
                <p className="movie-detail__info-details-item-value">
                  {new Date(film.release_date)
                    .toUTCString()
                    .split(' ')
                    .splice(0, 4)
                    .join(' ')}
                </p>
              </div>
            )}
            <div className="movie-detail__info-details-item">
              <span className="movie-detail__info-details-item-value film-tags">
                {film?.genres &&
                  film?.genres?.map((genre, index) => {
                    return (
                      <span className="film-tags__item" key={`genre--${index}`}>
                        <p>
                          <Link
                            to={`/movies/genre/${genre.name.toLowerCase()}/${
                              genre?.id
                            }`}
                          >
                            {genre?.name}
                          </Link>
                          <span className="film-tags__item-seperator">
                            {index === film?.genres?.length - 1 ? '' : ', '}
                          </span>
                        </p>
                      </span>
                    )
                  })}
              </span>
            </div>
          </div>
          {film?.overview && (
            <p className="movie-detail__description">{film.overview}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default MovieDetail
