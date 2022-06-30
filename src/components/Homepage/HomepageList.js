import { useEffect, useState } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import Film from '../Film'
import { getFilmById } from '../helpers/films.js'
import { getFilmList } from '../helpers/localStorage.js'
import MobileCheck from './../../hooks/mobile-check'

const HomepageList = ({ config, swiperClass, title, timeframe, filmList }) => {
  const mobileCheck = MobileCheck()
  const [filmData, setFilmData] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      getFilmList()
        .then(list => Promise.all(list.map(item => getFilmById(item))))
        .then(items => setFilmData(items))
    }

    getFilms()
    window.addEventListener('localStorageAdd', () => getFilms())
    window.addEventListener('localStorageRemove', () => getFilms())
    return () => {
      window.removeEventListener('localStorageAdd', getFilms())
      window.removeEventListener('localStorageRemove', getFilms())
    }
  }, [])

  if (!config) {
    return
  }

  return (
    <div className="homepage__popular-people">
      <div className="homepage__popular-people__inner">
        <div className="homepage__popular-people-controls">
          <h1 className="big-text">{title}</h1>
          <div className={swiperClass}></div>
        </div>
        {filmData.length > 0 ? (
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
              filmList &&
              filmData.length > 0 &&
              filmData.map((film, index) => {
                const isInList = filmList.includes(film.id)
                return (
                  <SwiperSlide key={`movie--${index}`}>
                    <Film film={film} config={config} isInList={isInList} />
                  </SwiperSlide>
                )
              })}
          </Swiper>
        ) : (
          <section className="homepage-list">
            <div className="homepage-list__inner">
              <FaExclamationTriangle />
              <h2>
                You don't have any items in your list, head over to{' '}
                <Link to={'/movies'}> movies </Link>
              </h2>
              <p>
                Save shows and movies to keep track of what you want to watch.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default HomepageList
