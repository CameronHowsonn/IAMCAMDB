import { useLayoutEffect, useState } from 'react'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAPI } from '../../context/api'
import MobileCheck from '../../hooks/mobile-check'
import { getTVShowImages } from '../helpers/tv-shows'

const TVImages = ({ id }) => {
  const mobileCheck = MobileCheck()
  const [images, setImages] = useState([])
  const { config } = useAPI()

  useLayoutEffect(() => {
    getTVShowImages(id).then(data => setImages(data.backdrops))
  }, [id])

  return (
    <section className="movie-images">
      <div className="movie-images__inner">
        <header className="movie-images__header">
          <h1 className="movie-images__title big-text">Images</h1>
          {images?.length > 0 && (
            <div className="movie-images__scrollbar"></div>
          )}
        </header>
        {images?.length > 0 ? (
          <Swiper
            modules={[Navigation, Scrollbar]}
            slidesPerView={mobileCheck ? 1.25 : 2.75}
            spaceBetween={20}
            centeredSlides={false}
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
                  src={`${config?.images?.base_url}${config?.images?.backdrop_sizes[2]}${image?.file_path}`}
                  alt={image.file_path}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <h1 className={`${images?.length > 0 ? 'images' : 'no-image-title'}`}>
            No Images Available
          </h1>
        )}
      </div>
    </section>
  )
}

export default TVImages
