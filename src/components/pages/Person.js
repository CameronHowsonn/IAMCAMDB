import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPersonById } from '../helpers/person.js'
import PersonDetail from '../person/PersonDetail'
import PersonFilms from '../person/PersonFilms'
import PersonHero from '../person/PersonHero.js'

const Person = () => {
  let { id } = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    getPersonById(id).then(data => setPerson(data))
  }, [id])

  return (
    <div className="person container">
      {id && <PersonHero id={id} />}
      {person && <PersonDetail person={person} />}
      {id && <PersonFilms id={id} />}
    </div>
  )
}

export default Person
