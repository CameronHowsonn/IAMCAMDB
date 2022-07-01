const TVHero = ({ config, id, show }) => {
  return (
    <section className={`person-hero`}>
      <div className="person-hero__bg objFit">
        {show && show?.backdrop_path ? (
          <img
            src={`${config?.images?.base_url}${config?.images?.profile_sizes[3]}/${show?.backdrop_path}`}
            alt={`film poster for ${id}`}
            loading="eager"
          />
        ) : (
          <h1>No Image Available</h1>
        )}
      </div>
    </section>
  )
}

export default TVHero
