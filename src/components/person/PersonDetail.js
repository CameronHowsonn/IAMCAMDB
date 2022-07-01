import { FaBirthdayCake } from 'react-icons/fa'
import PersonLinks from './PersonLinks'

const PersonDetail = ({ person, config }) => {
  return (
    <section className="person-detail">
      <div className="person-detail__inner">
        <div className="person-detail__image">
          {person.profile_path ? (
            <img
              src={`${config.images.base_url}${config.images.profile_sizes[3]}${person.profile_path}`}
              alt={`film poster for ${person.name}`}
              loading="lazy"
            />
          ) : (
            <h2>No Image Available</h2>
          )}

          <div className="person-detail__image--details">
            {person.birthday && (
              <div className="person-detail__image--details--stars">
                <h2 className="stars-title">
                  <div>
                    <FaBirthdayCake />
                  </div>
                  {new Date(person.birthday)
                    .toUTCString()
                    .split(' ')
                    .splice(0, 4)
                    .join(' ')}
                </h2>
              </div>
            )}
            <PersonLinks id={person.id} />
          </div>
        </div>
        <div className="person-detail__info">
          {person?.name && (
            <h1 className="person-detail__title">{person.name}</h1>
          )}
          <div className="person-detail__info-details">
            <div className="person-detail__info-details-item">
              {person.place_of_birth && (
                <p className="person-detail__info-details-item-value">
                  {person.place_of_birth}
                </p>
              )}
            </div>
          </div>
          <p className="person-detail__description">{person.biography}</p>
        </div>
      </div>
    </section>
  )
}

export default PersonDetail
