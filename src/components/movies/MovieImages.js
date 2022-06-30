import { useLayoutEffect, useState } from 'react'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import MobileCheck from '../../hooks/mobile-check'
import { getFilmImages } from '../helpers/films'

const MovieImages = ({ id, config }) => {
  const mobileCheck = MobileCheck()
  const [images, setImages] = useState([])

  useLayoutEffect(() => {
    getFilmImages(id).then(data => setImages(data.backdrops))
  }, [id])

  return (
    <section className="movie-images">
      <div className="movie-images__inner">
        <header className="movie-images__header">
          <h1 className="movie-images__title big-text">Images</h1>
          <div className="movie-images__scrollbar"></div>
        </header>
        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={mobileCheck ? 1.25 : 2.75}
          spaceBetween={20}
          draggable={false}
          centeredSlides={false}
          allowTouchMove={false}
          loop={false}
          scrollbar={{
            el: '.movie-images__scrollbar',
            hide: false,
            draggable: true,
            dragSize: '50vw',
            snapOnRelease: true,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`${index}-${image.file_path}`}>
              <img
                className="movie-images__image"
                src={`${config.images.base_url}${config.images.backdrop_sizes[2]}${image.file_path}`}
                alt={image.file_path}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MovieImages
