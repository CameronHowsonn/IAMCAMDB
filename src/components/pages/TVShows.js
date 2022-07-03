import HomepageList from '../homepage/HomepageList'
import PopularTV from '../tvshows/PopularTv'
import TVGenres from '../tvshows/TVGenres'

const TVShows = ({ config, genres, tvList, filmList }) => {
  return (
    <section className="movies">
      <PopularTV
        config={config}
        search={false}
        trending={true}
        title={'Trending Today'}
        type={'tv'}
      />
      <HomepageList
        config={config}
        title="Shows From Your List"
        swiperClass={'your-list-swiper'}
        tvList={tvList}
        filmList={[]}
        type="tv"
      />
      <TVGenres genres={genres} />
    </section>
  )
}

export default TVShows
