import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilmById, getReviews, getSimilarFilms } from '../helpers/films.js'
import HomepagePopularFilms from '../homepage/HomepagePopularFilms.js'
import MovieCredits from '../movie/MovieCredits.js'
import MovieDetail from '../movie/MovieDetail'
import MovieHero from '../movie/MovieHero'
import MovieImages from '../movie/MovieImages.js'
import MovieReviews from '../movie/MovieReviews.js'
const Movie = () => {
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
      <MovieHero path={film.backdrop_path} title={film.original_title} />
      {film && <MovieDetail film={film} />}
      {id && <MovieCredits id={id} />}
      {id && <MovieImages id={id} />}
      {id && similarFilms && (
        <HomepagePopularFilms
          title="Similar Movies"
          timeframe={'day'}
          swiperClass={'similar-swiper'}
          films={similarFilms}
        />
      )}
      {reviews?.results?.length > 0 && <MovieReviews reviews={reviews} />}
    </div>
  )
}

export default Movie
