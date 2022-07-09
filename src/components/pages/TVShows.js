import HomepageList from '../homepage/HomepageList'
import PopularTV from '../tvshows/PopularTv'
import TVGenres from '../tvshows/TVGenres'

const TVShows = () => {
  return (
    <section className="movies">
      <PopularTV
        search={false}
        trending={true}
        title={'Trending Today'}
        type={'tv'}
      />
      <HomepageList
        title="Shows From Your List"
        swiperClass={'your-list-swiper'}
        type="tv"
      />
      <TVGenres />
    </section>
  )
}

export default TVShows
