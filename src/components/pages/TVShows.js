import PopularTV from '../tvshows/PopularTv'
import TVGenres from '../tvshows/TVGenres'

const TVShows = ({ config, genres }) => {
  return (
    <section className="movies">
      <PopularTV
        config={config}
        search={false}
        trending={true}
        title={'Trending Today'}
        type={'tv'}
      />
      <TVGenres genres={genres} />
    </section>
  )
}

export default TVShows
