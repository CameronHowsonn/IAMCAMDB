import HomepagePopular from '../homepage/HomepagePopular'
import MovieGenres from '../movies/MoviesGenres'

const Movies = ({ config, genres }) => {
  return (
    <section className="movies">
      <HomepagePopular
        config={config}
        search={false}
        trending={true}
        title={'Trending Today'}
      />
      <MovieGenres genres={genres} />
    </section>
  )
}

export default Movies
