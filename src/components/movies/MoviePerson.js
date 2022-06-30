import { FaUserSlash } from 'react-icons/fa'

const MoviePerson = ({ person, config }) => {
  return (
    <>
      <div className="movie-credits__item-image objFit">
        {person.profile_path ? (
          <img
            className="movie-credits__image"
            src={`${config.images.base_url}${config.images.profile_sizes[1]}${person.profile_path}`}
            alt={person.name}
            loading="lazy"
          />
        ) : (
          <FaUserSlash />
        )}
      </div>
      <div className="movie-credits__info">
        {person?.name && (
          <h3 className="movie-credits__info--name">{person.name}</h3>
        )}
        {person?.character && (
          <p className="movie-credits__info--character opaque">
            {person.character}
          </p>
        )}
      </div>
    </>
  )
}

export default MoviePerson
