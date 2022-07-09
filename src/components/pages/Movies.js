import HomepageList from '../homepage/HomepageList'
import HomepagePopular from '../homepage/HomepagePopular'
import MovieGenres from '../movies/MoviesGenres'

const Movies = () => {
  return (
    <section className="movies">
      <HomepagePopular
        search={false}
        trending={true}
        title={'Trending Today'}
        type="movie"
      />
      <MovieGenres />
      <HomepageList
        title="Movies From Your List"
        swiperClass={'your-list-swiper'}
        type="movie"
      />
    </section>
  )
}

export default Movies
