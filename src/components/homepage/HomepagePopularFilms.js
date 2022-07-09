import { useEffect, useRef, useState } from 'react'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAPI } from '../../context/api'
import MobileCheck from '../../hooks/mobile-check'
import Film from '../Film'
import { getTrendingFilms } from '../helpers/films'
import useOnScreen from './../../hooks/on-screen'

const HomepagePopularFilms = ({ swiperClass, title, timeframe }) => {
  const mobileCheck = MobileCheck()
  const [filmData, setFilmData] = useState(null)
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  const { config, filmList } = useAPI()

  useEffect(() => {
    if (isVisible) {
      getTrendingFilms(timeframe).then(data =>
        setFilmData(data.results.splice(0, 16))
      )
    }
  }, [timeframe, isVisible])

  return (
    <div className="homepage__popular-people" ref={ref}>
      {isVisible && (
        <div className="homepage__popular-people__inner">
          <div className="homepage__popular-people-controls">
            <h1 className="big-text">{title}</h1>
            <div className={swiperClass}></div>
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
                const isInList = filmList?.includes(film.id)
                return (
                  <SwiperSlide key={`movie--${index}`}>
                    <Film film={film} isInList={isInList} type={'movie'} />
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      )}
    </div>
  )
}

export default HomepagePopularFilms
