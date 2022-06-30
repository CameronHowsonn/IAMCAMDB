import { useEffect, useState } from 'react'
import { getOneTaggedPhoto } from '../helpers/person'

const PersonHero = ({ config, id }) => {
  const [image, setImage] = useState(false)

  useEffect(() => {
    getOneTaggedPhoto(id).then(data => setImage(data))
  }, [id])

  return (
    <section className={`person-hero`}>
      <div className="person-hero__bg objFit">
        {image && (
          <img
            src={`${config.images.base_url}${config.images.profile_sizes[3]}${image.file_path}`}
            alt={`film poster for ${id}`}
          />
        )}
      </div>
    </section>
  )
}

export default PersonHero
