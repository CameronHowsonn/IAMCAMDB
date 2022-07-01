const { FaStar, FaStarHalf } = require('react-icons/fa')

const MovieStar = ({ stars }) => {
  let returnValue = []

  while (stars > 0) {
    if (stars >= 1) {
      returnValue.push(<FaStar key={stars} />)
    } else {
      returnValue.push(<FaStarHalf key={stars} />)
    }
    stars -= 1
  }

  return returnValue
}

export default MovieStar
