import { FaUserSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const MoviePerson = ({ person, config }) => {
  return (
    <Link
      to={`/person/${person.id}`}
      className={`movie-credits__item ${
        person.profile_path ? 'has-profile' : 'no-profile'
      }`}
    >
      <div className="movie-credits__item-image objFit">
        {person.profile_path ? (
          <img
            className="movie-credits__image"
            src={`${config.images.base_url}${config.images.profile_sizes[1]}${person.profile_path}`}
            alt={person.name}
            loading="lazy"
            width="100%"
            height="100%"
          />
        ) : (
          <FaUserSlash />
        )}
      </div>
      <div className="movie-credits__info">
        {person?.name && (
          <h4 className="movie-credits__info--name">{person.name}</h4>
        )}
        {person?.character && (
          <p className="movie-credits__info--character opaque">
            {person.character}
          </p>
        )}
      </div>
    </Link>
  )
}

export default MoviePerson
