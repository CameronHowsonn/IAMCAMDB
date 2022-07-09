import HomepageList from '../homepage/HomepageList'
import HomepagePopular from '../homepage/HomepagePopular'
import MovieGenres from '../movies/MoviesGenres'

const Movies = ({ genres, filmList }) => {
  return (
    <section className="movies">
      <HomepagePopular
        search={false}
        trending={true}
        title={'Trending Today'}
        type="movie"
      />
      <MovieGenres genres={genres} />
      <HomepageList
        title="Movies From Your List"
        swiperClass={'your-list-swiper'}
        filmList={filmList}
        type="movie"
      />
    </section>
  )
}

export default Movies
