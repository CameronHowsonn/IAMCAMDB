import { useEffect, useState } from 'react'
import { useAPI } from '../../context/api'
import { getOneTaggedPhoto } from '../helpers/person'

const PersonHero = ({ id }) => {
  const [image, setImage] = useState(false)
  const { config } = useAPI()

  useEffect(() => {
    getOneTaggedPhoto(id).then(data => setImage(data))
  }, [id])

  return (
    <section className={`person-hero ${image ? 'image' : 'no-image'}`}>
      <div className="person-hero__bg objFit">
        {image ? (
          <img
            src={`${config?.images?.base_url}${config?.images?.profile_sizes[3]}${image?.file_path}`}
            alt={`film poster for ${id}`}
            loading="lazy"
          />
        ) : (
          <h1>No Image Available</h1>
        )}
      </div>
    </section>
  )
}

export default PersonHero
