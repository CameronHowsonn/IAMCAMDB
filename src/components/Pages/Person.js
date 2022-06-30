import React, { useEffect, useState } from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { getPersonById } from '../helpers/person'
import PersonFilms from '../person/PersonFilms'

const Person = ({ config }) => {
  let { id } = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    async function getData() {
      const data = await getPersonById(id)
      setPerson(data)
    }
    getData()
  }, [id])

  return (
    <div className='person container'>
      <div className='person__image-featured'>
        {config && person && (
          <img
            className='homepage__popular-image'
            src={`${config.images.base_url}${config.images.profile_sizes[2]}${person.profile_path}`}
            alt={`${person.title}`}
          />
        )}
      </div>
      <div className='person__text'>
        <div className='person__text--birthday'>
          {person?.birthday && (
            <p>
              <FaBirthdayCake />
              {new Date(person.birthday)
                .toUTCString()
                .split(' ')
                .splice(0, 4)
                .join(' ')}
            </p>
          )}
        </div>
        <div className='person__text--biography'>
          {person?.biography && <p>{person.biography}</p>}
        </div>
        <PersonFilms id={id} />
      </div>
    </div>
  )
}

export default Person
