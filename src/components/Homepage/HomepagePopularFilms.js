import { useEffect, useState } from 'react'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import Film from '../Film'
import { getTrendingFilms } from '../helpers/films.js'
import MobileCheck from './../../hooks/mobile-check'

const HomepagePopularFilms = ({
  config,
  swiperClass,
  title,
  timeframe,
  filmList,
}) => {
  const mobileCheck = MobileCheck()
  const [filmData, setFilmData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await getTrendingFilms(timeframe)
      setFilmData(data.results.splice(0, 16))
    }
    getData()
  }, [timeframe])

  if (!config) {
    return
  }

  return (
    <div className="homepage__popular-people">
      <div className="homepage__popular-people__inner">
        <div className="homepage__popular-people-controls">
          <h1>{title}</h1>
          <div className={swiperClass}></div>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={mobileCheck ? 1.25 : 6.75}
          spaceBetween={20}
          draggable={false}
          centeredSlides={false}
          allowTouchMove={false}
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
            filmList &&
            filmData.map((film, index) => {
              const isInList = filmList.includes(film.id)
              return (
                <SwiperSlide key={`movie--${index}`}>
                  <Film film={film} config={config} isInList={isInList} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default HomepagePopularFilms
