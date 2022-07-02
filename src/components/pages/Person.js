import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPersonById } from '../helpers/person.js'
import PersonDetail from '../person/PersonDetail'
import PersonFilms from '../person/PersonFilms'
import PersonHero from '../person/PersonHero.js'

const Person = ({ config }) => {
  let { id } = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    getPersonById(id).then(data => setPerson(data))
  }, [id])

  return (
    <div className="person container">
      {id && <PersonHero config={config} id={id} />}
      {person && <PersonDetail person={person} config={config} />}
      {id && <PersonFilms id={id} config={config} />}
    </div>
  )
}

export default Person
