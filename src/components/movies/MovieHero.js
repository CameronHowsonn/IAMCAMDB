const MovieHero = ({ path, config, title }) => {
  return (
    <section className="movie-hero">
      <div className="movie-hero__bg objFit">
        <img
          className=""
          src={`${config.images.base_url}${config.images.profile_sizes[3]}${path}`}
          alt={`film poster for ${title}`}
        />
      </div>
    </section>
  )
}

export default MovieHero
