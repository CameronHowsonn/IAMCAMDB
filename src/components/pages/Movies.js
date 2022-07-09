import HomepageList from '../homepage/HomepageList'
import HomepagePopular from '../homepage/HomepagePopular'
import MovieGenres from '../movies/MoviesGenres'

const Movies = ({ config, genres, filmList }) => {
  return (
    <section className="movies">
      <HomepagePopular
        config={config}
        search={false}
        trending={true}
        title={'Trending Today'}
        type="movie"
      />
      <MovieGenres genres={genres} />
      <HomepageList
        config={config}
        title="Movies From Your List"
        swiperClass={'your-list-swiper'}
        filmList={filmList}
        type="movie"
      />
    </section>
  )
}

export default Movies
