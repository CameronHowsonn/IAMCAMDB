import { Link } from 'react-router-dom'
import MovieStar from '../movies/MovieStars'

const MovieDetail = ({ show, config, genres }) => {
  console.log(show)

  return (
    <section className="movie-detail">
      <div className="movie-detail__inner">
        <div
          className={`movie-detail__image ${
            show.poster_path ? 'image' : 'no-image'
          }`}
        >
          {show.poster_path ? (
            <img
              src={`${config.images.base_url}${config.images.profile_sizes[3]}${show.poster_path}`}
              alt={`film poster for ${show.name}`}
              loading="lazy"
            />
          ) : (
            <h2>No Image Available</h2>
          )}
          <div className="movie-detail__image--details">
            {show.vote_average > 0 && (
              <div className="movie-detail__image--details--stars">
                <h2 className="stars-title">{show.vote_average}</h2>
                <h5 className="stars-subtitle">{show.vote_count} Votes</h5>
                <div className="star-container">
                  <MovieStar stars={show.vote_average} />
                </div>
              </div>
            )}
            <div className="movie-detail__image--details--money">
              <div className="budget">
                {show && show.budget > 0 && (
                  <>
                    <p>Budget: </p>
                    <span>${show.budget.toLocaleString()}</span>
                  </>
                )}
              </div>
              <div className="budget">
                {show && show.revenue > 0 && (
                  <>
                    <p>Revenue: </p>
                    <span>${show.revenue.toLocaleString()}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-detail__info">
          <h1 className="movie-detail__title">
            {show.name} (
            <span className="small-text">
              {new Date(show.first_air_date).toUTCString().split(' ')[3]}){' '}
              {' - '}
              {new Date(show.last_air_date).toUTCString().split(' ')[3]})
            </span>
          </h1>
          <h4>{show.tagline}</h4>
          <div className="movie-detail__info-details">
            <div className="movie-detail__info-details-item">
              <p className="movie-detail__info-details-item-value">
                {new Date(show.first_air_date)
                  .toUTCString()
                  .split(' ')
                  .splice(0, 4)
                  .join(' ')}
                {' - '}
                {new Date(show.last_air_date)
                  .toUTCString()
                  .split(' ')
                  .splice(0, 4)
                  .join(' ')}
              </p>
            </div>
            <div className="movie-detail__info-details-item">
              <span className="movie-detail__info-details-item-value film-tags">
                {show.genres &&
                  show.genres.map((genre, index) => {
                    return (
                      <span className="film-tags__item" key={`genre--${index}`}>
                        <p>
                          <Link to={`/search/${genre.name}`}>{genre.name}</Link>
                          <span className="film-tags__item-seperator">
                            {index === show.genres.length - 1 ? '' : ', '}
                          </span>
                        </p>
                      </span>
                    )
                  })}
              </span>
            </div>
            <div className="movie-detail__info-details-item">
              <span className="movie-detail__info-details-item-value">
                {show.number_of_episodes} Episodes
              </span>
            </div>
            <div className="movie-detail__info-details-item">
              <span className="movie-detail__info-details-item-value">
                {show.number_of_seasons} Seasons
              </span>
            </div>
          </div>
          <p className="movie-detail__description">{show.overview}</p>
        </div>
      </div>
    </section>
  )
}

export default MovieDetail
