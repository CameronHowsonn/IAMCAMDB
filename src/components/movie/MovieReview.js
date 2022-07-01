const MovieReview = ({ config, review, filmList }) => {
  return (
    <li>
      <div className="movie-reviews__list--item">
        <div className="movie-review__content">
          {review?.author_details?.rating && (
            <div className="movie-review__rating">
              <h2>
                <span className="yellow">{review?.author_details?.rating}</span>
                /10
              </h2>
              {review?.author_details?.name && (
                <h2 className="movie-review__title">
                  {review.author_details.name}
                </h2>
              )}
              {review?.author_details?.username && (
                <h4 className="movie-review__username">
                  {review.author_details.username}
                </h4>
              )}
              {review?.created_at && (
                <p className="movie-review__date">
                  {new Date(review.created_at).toLocaleDateString()}
                </p>
              )}
            </div>
          )}
          <div className="movie-review__text">
            {review?.content && (
              <p className="movie-review__text">{review.content}</p>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default MovieReview
