import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import MobileCheck from '../../hooks/mobile-check'
import { getListOfPeople } from '../helpers/person.js'

const HomepagePopularPeople = ({ config }) => {
  const mobileCheck = MobileCheck()

  const [personData, setPersonData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await getListOfPeople()
      setPersonData(data.results.splice(0, 16))
    }
    getData()
  }, [])

  if (!config) {
    return
  }

  return (
    <div className="homepage__popular-people">
      <div className="homepage__popular-people__inner">
        <div className="homepage__popular-people-controls">
          <h1 className="big-text">Popular Actors</h1>
          <div className="swiper-scrollbar1"></div>
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
            el: '.swiper-scrollbar1',
            hide: false,
            draggable: true,
            dragSize: '50vw',
            snapOnRelease: true,
          }}
        >
          {config &&
            personData &&
            personData?.map((person, index) => {
              return (
                <SwiperSlide key={`person--${index}`}>
                  <Link to={`person/${person.id}`}>
                    <div className="objFit homepage__popular-people-person">
                      <div className="homepage__popular-people-person-image-container">
                        <img
                          className="homepage__popular-people-person-image"
                          src={`${config?.images.base_url}${config?.images?.profile_sizes[2]}${person?.profile_path}`}
                          alt={`${person?.name}`}
                          loading="lazy"
                        />
                      </div>
                      {person?.name && (
                        <div className="homepage__popular-people-person-details">
                          {person.name && <h4>{person.name}</h4>}
                        </div>
                      )}
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default HomepagePopularPeople
