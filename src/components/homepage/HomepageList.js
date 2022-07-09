import { useEffect, useRef, useState } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAPI } from '../../context/api'
import MobileCheck from '../../hooks/mobile-check'
import useOnScreen from '../../hooks/on-screen'
import Film from '../Film'
import { getFilmById } from '../helpers/films.js'
import { getFilmList, getTvShowList } from '../helpers/localStorage.js'
import { getTVShowById } from '../helpers/tv-shows'
import TVShow from '../TVShow'

const HomepageList = ({ swiperClass, title, type }) => {
  const mobileCheck = MobileCheck()
  const [filmData, setFilmData] = useState([])
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  const { config, filmList, tvList } = useAPI()

  useEffect(() => {
    const getFilms = async () => {
      getFilmList()
        .then(list => Promise.all(list.map(item => getFilmById(item))))
        .then(items => setFilmData(items))
    }

    const getShows = async () => {
      getTvShowList()
        .then(list => Promise.all(list.map(item => getTVShowById(item))))
        .then(items => setFilmData(items))
    }

    if (isVisible) {
      if (type === 'movie') {
        getFilms()
        window.addEventListener('localStorageAddFilm', () => getFilms())
        window.addEventListener('localStorageRemoveFilm', () => getFilms())
      }

      if (type === 'tv') {
        getShows()
        window.addEventListener('localStorageAddTV', () => getShows())
        window.addEventListener('localStorageRemoveTV', () => getShows())
      }
    }

    return () => {
      if (type === 'movie') {
        window.removeEventListener('localStorageAddFilm', getFilms())
        window.removeEventListener('localStorageRemoveFilm', getFilms())
      }

      if (type === 'tv') {
        window.removeEventListener('localStorageAddTV', getShows())
        window.removeEventListener('localStorageRemoveTV', getShows())
      }
    }
  }, [type, isVisible])

  if (!config) {
    return
  }

  return (
    <div className="homepage__popular-people" ref={ref}>
      {isVisible && (
        <div className="homepage__popular-people__inner">
          <div className="homepage__popular-people-controls">
            {title && <h1 className="big-text">{title}</h1>}
            {swiperClass && <div className={swiperClass}></div>}
          </div>
          {filmData?.length > 0 ? (
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
                filmData?.length > 0 &&
                filmData?.map((film, index) => {
                  const isInList =
                    type === 'movie'
                      ? filmList?.includes(film.id)
                      : tvList.includes(film.id)

                  return (
                    <SwiperSlide key={`movie--${index}`}>
                      {type === 'movie' ? (
                        <Film film={film} isInList={isInList} type={type} />
                      ) : (
                        <TVShow film={film} isInList={isInList} type={type} />
                      )}
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
                  <Link to={type === 'movie' ? '/movies' : '/tv-shows'}>
                    {' '}
                    {type === 'movie' ? 'Movies' : 'TV Shows'}{' '}
                  </Link>
                </h2>
                <p>
                  Save shows and movies to keep track of what you want to watch.
                </p>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}

export default HomepageList
