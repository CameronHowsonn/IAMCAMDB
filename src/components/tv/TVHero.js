import { useAPI } from '../../context/api'
import AddListButton from '../Buttons/AddListButton'

const TVHero = ({ id, show }) => {
  const { config, tvList } = useAPI()

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
      <div className="person-hero__buttons">
        {id && (
          <AddListButton
            id={id}
            icon={'plus'}
            type="tv"
            disabled={tvList.includes(id)}
          />
        )}
      </div>
    </section>
  )
}

export default TVHero
