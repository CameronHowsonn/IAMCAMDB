import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSimilarTvShows, getTVShowById } from '../helpers/tv-shows'
import HomepagePopularTV from '../homepage/HomepagePopularTV'
import TVCredits from '../tv/TVCredits'
import TVDetail from '../tv/TVDetail'
import TVHero from '../tv/TVHero'
import TVImages from '../tv/TVImages'

const TVShow = ({ config }) => {
  let { id } = useParams()
  const [show, setShow] = useState(null)
  const [similarShows, setSimilarShows] = useState([])

  useLayoutEffect(() => {
    getTVShowById(id).then(data => setShow(data))
    getSimilarTvShows(id).then(data => setSimilarShows(data))
  }, [id])

  return (
    <div className="tv-show container">
      {show && <TVHero show={show} />}
      {show && <TVDetail show={show} />}
      {show && <TVCredits id={id} />}
      {show && <TVImages id={id} />}
      {config && similarShows && (
        <HomepagePopularTV
          title="Similar TV Shows"
          timeframe={'day'}
          swiperClass={'similar-swiper'}
          films={similarShows}
          type="tv"
        />
      )}
    </div>
  )
}

export default TVShow
