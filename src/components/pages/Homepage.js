import HomepageList from '../homepage/HomepageList'
import HomepagePopular from '../homepage/HomepagePopular'
import HomepagePopularFilms from '../homepage/HomepagePopularFilms'
import HomepagePopularPeople from '../homepage/HomepagePopularPeople'
import HomepagePopularTV from '../homepage/HomepagePopularTV'

const Homepage = ({ genres, filmList, tvList }) => {
  return (
    <>
      <HomepagePopular genres={genres} search={true} title={'Most Popular'} />
      <HomepagePopularPeople />
      {filmList && (
        <>
          <HomepagePopularFilms
            title="Trending this Week"
            timeframe={'week'}
            swiperClass={'trending-week-swiper'}
            filmList={filmList}
          />
          <HomepagePopularFilms
            title="Trending Today"
            timeframe={'day'}
            swiperClass={'trending-day-swiper'}
            filmList={filmList}
          />
          <HomepageList
            title="Movies From Your List"
            swiperClass={'your-list-swiper'}
            filmList={filmList}
            type="movie"
          />
          <HomepagePopularTV
            title="Trending TV Shows"
            swiperClass={'trending-tv-swiper'}
            tvList={tvList}
          />
          <HomepageList
            title="Shows From Your List"
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
