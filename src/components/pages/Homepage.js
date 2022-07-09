import HomepageList from '../homepage/HomepageList'
import HomepagePopular from '../homepage/HomepagePopular'
import HomepagePopularFilms from '../homepage/HomepagePopularFilms'
import HomepagePopularPeople from '../homepage/HomepagePopularPeople'
import HomepagePopularTV from '../homepage/HomepagePopularTV'

const Homepage = () => {
  return (
    <>
      <HomepagePopular search={true} title={'Most Popular'} />
      <HomepagePopularPeople />
      <>
        <HomepagePopularFilms
          title="Trending this Week"
          timeframe={'week'}
          swiperClass={'trending-week-swiper'}
        />
        <HomepagePopularFilms
          title="Trending Today"
          timeframe={'day'}
          swiperClass={'trending-day-swiper'}
        />
        <HomepageList
          title="Movies From Your List"
          swiperClass={'your-list-swiper'}
          type="movie"
        />
        <HomepagePopularTV
          title="Trending TV Shows"
          swiperClass={'trending-tv-swiper'}
        />
        <HomepageList
          title="Shows From Your List"
          swiperClass={'your-list-swiper'}
          type="tv"
        />
      </>
    </>
  )
}

export default Homepage
