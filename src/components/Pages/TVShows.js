import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTVShowById } from '../helpers/tv-shows'
import TVDetail from '../tv/TVDetail'
import TVHero from '../tv/TVHero'

const TVShows = ({ config }) => {
  let { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    console.log(id)
    getTVShowById(id).then(data => {
      setShow(data)
      console.log(data)
    })
  }, [id])

  return (
    <div className="tv-show container">
      {show && <TVHero config={config} show={show} />}
      {show && <TVDetail show={show} config={config} />}
    </div>
  )
}

export default TVShows
