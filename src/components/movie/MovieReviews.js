import MovieReview from './MovieReview'

const MovieReviews = ({ config, reviews }) => {
  return (
    <section className="movie-reviews">
      <h2 className="movie-reviews__title">Reviews</h2>
      <ul className="movie-reviews__list">
        {reviews?.results?.map(review => {
          return <MovieReview key={review.id} review={review} />
        })}
      </ul>
      {reviews?.results?.length === 0 && (
        <p className="movie-reviews__no-reviews">
          No reviews yet. Be the first to write one!
        </p>
      )}
    </section>
  )
}

export default MovieReviews
