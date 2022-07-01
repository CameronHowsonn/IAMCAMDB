import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSimilarTvShows, getTVShowById } from '../helpers/tv-shows'
import HomepagePopularTV from '../homepage/HomepagePopularTV'
import TVCredits from '../tv/TVCredits'
import TVDetail from '../tv/TVDetail'
import TVHero from '../tv/TVHero'
import TVImages from '../tv/TVImages'

const TVShow = ({ config, filmList }) => {
  let { id } = useParams()
  const [show, setShow] = useState(null)
  const [similarShows, setSimilarShows] = useState([])

  useLayoutEffect(() => {
    getTVShowById(id).then(data => setShow(data))
    getSimilarTvShows(id).then(data => setSimilarShows(data))
  }, [id])

  return (
    <div className="tv-show container">
      {show && <TVHero config={config} show={show} />}
      {show && <TVDetail show={show} config={config} />}
      {show && <TVCredits id={id} config={config} />}
      {show && <TVImages id={id} config={config} />}
      {config && filmList && similarShows && (
        <HomepagePopularTV
          config={config}
          title="Similar TV Shows"
          timeframe={'day'}
          swiperClass={'similar-swiper'}
          filmList={filmList}
          films={similarShows}
        />
      )}
    </div>
  )
}

export default TVShow
