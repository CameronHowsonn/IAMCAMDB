import HomepagePopular from '../homepage/HomepagePopular'

const Movies = ({ config }) => {
  return (
    <section className="movies">
      <HomepagePopular config={config} search={false} />
    </section>
  )
}

export default Movies
