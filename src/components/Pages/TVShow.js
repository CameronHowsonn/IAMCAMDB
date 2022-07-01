import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTVShowById } from '../helpers/tv-shows'
import TVCredits from '../tv/TVCredits'
import TVDetail from '../tv/TVDetail'
import TVHero from '../tv/TVHero'

const TVShow = ({ config }) => {
  let { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    getTVShowById(id).then(data => setShow(data))
  }, [id])

  return (
    <div className="tv-show container">
      {show && <TVHero config={config} show={show} />}
      {show && <TVDetail show={show} config={config} />}
      {show && <TVCredits id={id} config={config} />}
    </div>
  )
}

export default TVShow
