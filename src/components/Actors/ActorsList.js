import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAPI } from '../../context/api'
import { getTrendingPeople } from '../helpers/person'

const ActorsList = ({ time_frame }) => {
  const [people, setPeople] = useState([null])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { config } = useAPI()

  useEffect(() => {
    getTrendingPeople(time_frame, page).then(data => {
      setPeople(data)
      setTotalPages(data.total_pages)
    })
  }, [time_frame, page])

  return (
    <>
      <ul className="actors-list">
        {people?.results?.map(person => {
          if (!person?.profile_path) {
            return false
          }
          return (
            <li key={person.id} className="actors-list__item">
              <Link to={`/person/${person.id}`}>
                <div className="objFit homepage__popular-people-person">
                  <div className="homepage__popular-people-person-image-container actors-list__item--img-container">
                    <img
                      className="homepage__popular-people-person-image"
                      src={`${config?.images.base_url}${config?.images?.profile_sizes[1]}${person?.profile_path}`}
                      alt={`${person?.name}`}
                      loading="lazy"
                    />
                  </div>
                  {person?.name && (
                    <div className="homepage__popular-people-person-details actors-list__item--details">
                      {person.name && <h4>{person.name}</h4>}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="search__pagination">
        <button
          className="search__pagination__button button prev"
          onClick={() => {
            setPage(page - 1)
          }}
          disabled={page === 1}
        >
          <FaLongArrowAltLeft />
          Previous
        </button>
        <button
          className="search__pagination__button button next"
          onClick={() => {
            setPage(page + 1)
          }}
          disabled={page === totalPages}
        >
          Next
          <FaLongArrowAltRight />
        </button>
      </div>
    </>
  )
}

export default ActorsList
