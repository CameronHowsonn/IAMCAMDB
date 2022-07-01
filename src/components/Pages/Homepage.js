import HomepageList from '../Homepage/HomepageList'
import HomepagePopular from '../Homepage/HomepagePopular'
import HomepagePopularFilms from '../Homepage/HomepagePopularFilms'
import HomepagePopularPeople from '../Homepage/HomepagePopularPeople'
import HomepagePopularTV from '../Homepage/HomepagePopularTV'

const Homepage = ({ config, genres, filmList, tvList }) => {
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
            title="Movies From Your List"
            swiperClass={'your-list-swiper'}
            filmList={filmList}
            type="movie"
          />
          <HomepagePopularTV
            config={config}
            title="Trending TV Shows"
            swiperClass={'trending-tv-swiper'}
            tvList={tvList}
          />
          <HomepageList
            config={config}
            title="Movies From Your List"
            swiperClass={'your-list-swiper'}
            filmList={filmList}
            tvList={tvList}
            type="tv"
          />
        </>
      )}
    </>
  )
}

export default Homepage
