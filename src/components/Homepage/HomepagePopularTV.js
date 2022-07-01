import { useEffect, useState } from 'react'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import MobileCheck from '../../hooks/mobile-check'
import { getPopularTvShows } from '../helpers/tv-shows.js'
import TVShow from '../TVShow'

const HomepagePopularTV = ({ config, swiperClass, title, tvList, films }) => {
  const mobileCheck = MobileCheck()
  const [filmData, setFilmData] = useState(null)

  useEffect(() => {
    if (films) {
      setFilmData(films)
    } else {
      getPopularTvShows().then(data => {
        setFilmData(data)
      })
    }
  }, [films])

  if (!config) {
    return
  }

  return (
    <div className="homepage__popular-people">
      <div className="homepage__popular-people__inner">
        <div className="homepage__popular-people-controls">
          {title && <h1 className="big-text">{title}</h1>}
          {swiperClass && <div className={swiperClass}></div>}
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={mobileCheck ? 1.25 : 6.75}
          spaceBetween={20}
          centeredSlides={false}
          loop={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{
            el: `.${swiperClass}`,
            hide: false,
            draggable: true,
            dragSize: '50vw',
            snapOnRelease: true,
          }}
        >
          {config &&
            filmData &&
            filmData?.map((film, index) => {
              const isInList = tvList?.includes(film.id)
              return (
                <SwiperSlide key={`tv-show--${index}`}>
                  <TVShow film={film} config={config} isInList={isInList} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default HomepagePopularTV
