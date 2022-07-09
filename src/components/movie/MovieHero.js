import { useParams } from 'react-router-dom'
import { useAPI } from '../../context/api'
import AddListButton from '../Buttons/AddListButton'

const MovieHero = ({ path, title }) => {
  const { config, filmList } = useAPI()
  const { id } = useParams()

  return (
    <section className={`movie-hero ${path ? 'image' : 'no-image'}`}>
      <div className="movie-hero__bg objFit">
        {path ? (
          <img
            src={`${config?.images?.base_url}${config?.images?.profile_sizes[2]}${path}`}
            alt={`film poster for ${title}`}
            loading="lazy"
          />
        ) : (
          <h1>No Image Available</h1>
        )}
      </div>
      <div className="movie-hero__buttons">
        {id && (
          <AddListButton
            id={id}
            icon={'plus'}
            type="movie"
            disabled={filmList?.includes(id)}
          />
        )}
      </div>
    </section>
  )
}

export default MovieHero
