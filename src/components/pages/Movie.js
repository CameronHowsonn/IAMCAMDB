import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilmById, getReviews, getSimilarFilms } from '../helpers/films.js'
import HomepagePopularFilms from '../homepage/HomepagePopularFilms.js'
import MovieCredits from '../movie/MovieCredits.js'
import MovieDetail from '../movie/MovieDetail'
import MovieHero from '../movie/MovieHero'
import MovieImages from '../movie/MovieImages.js'
import MovieReviews from '../movie/MovieReviews.js'
const Movie = ({ config, filmList, genres }) => {
  const { id } = useParams()
  const [film, setFilm] = useState([])
  const [similarFilms, setSimilarFilms] = useState([])
  const [reviews, setReviews] = useState([])

  useLayoutEffect(() => {
    getFilmById(id).then(data => setFilm(data))
    getSimilarFilms(id).then(data => setSimilarFilms(data))
    getReviews(id).then(data => setReviews(data))
  }, [id])

  return (
    <div className={`${film.poster_path ? 'image' : 'no-image'}`}>
      <MovieHero
        path={film.backdrop_path}
        config={config}
        title={film.original_title}
      />
      {film && filmList && (
        <MovieDetail
          film={film}
          filmList={filmList}
          config={config}
          genres={genres}
        />
      )}
      {config && id && <MovieCredits config={config} id={id} />}
      {config && id && <MovieImages config={config} id={id} />}
      {config && id && filmList && similarFilms && (
        <HomepagePopularFilms
          config={config}
          title="Similar Movies"
          timeframe={'day'}
          swiperClass={'similar-swiper'}
          filmList={filmList}
          films={similarFilms}
        />
      )}
      {reviews?.results?.length > 0 && (
        <MovieReviews config={config} reviews={reviews} filmList={filmList} />
      )}
    </div>
  )
}

export default Movie
