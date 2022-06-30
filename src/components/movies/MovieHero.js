const MovieHero = ({ path, config, title }) => {
  return (
    <section className={`movie-hero ${path ? 'image' : 'no-image'}`}>
      <div className="movie-hero__bg objFit">
        {path ? (
          <img
            src={`${config.images.base_url}${config.images.profile_sizes[3]}${path}`}
            alt={`film poster for ${title}`}
          />
        ) : (
          <h1>No Image Available</h1>
        )}
      </div>
    </section>
  )
}

export default MovieHero
