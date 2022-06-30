import HomepageList from '../Homepage/HomepageList'
import HomepagePopular from '../Homepage/HomepagePopular'
import HomepagePopularFilms from '../Homepage/HomepagePopularFilms'
import HomepagePopularPeople from '../Homepage/HomepagePopularPeople'
const Homepage = ({ config, genres, filmList }) => {
  return (
    <>
      <HomepagePopular config={config} genres={genres} />
      <HomepagePopularPeople config={config} />
      {filmList && (
        <>
          <HomepagePopularFilms
            config={config}
            title="Trending this Week"
            timeframe={'week'}
            swiperClass={'trending-week-swiper'}
            filmList={filmList}
          />
          <HomepagePopularFilms
            config={config}
            title="Trending Today"
            timeframe={'day'}
            swiperClass={'trending-day-swiper'}
            filmList={filmList}
          />
          <HomepageList
            config={config}
            title="From Your List"
            swiperClass={'your-list-swiper'}
            filmList={filmList}
          />
        </>
      )}
    </>
  )
}

export default Homepage
