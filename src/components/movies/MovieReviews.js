import MovieReview from './MovieReview'

const MovieReviews = ({ config, reviews, filmList }) => {
  return (
    <section className="movie-reviews">
      <h2 className="movie-reviews__title">Reviews</h2>
      <ul className="movie-reviews__list">
        {reviews?.results?.map(review => {
          return (
            <MovieReview
              key={review.id}
              config={config}
              review={review}
              filmList={filmList}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default MovieReviews
