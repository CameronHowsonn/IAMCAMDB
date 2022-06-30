import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { getPersonLinks } from '../helpers/person'

const map = {
  facebook_id: 'Facebook',
  instagram_id: 'Instagram',
  twitter_id: 'Twitter',
}

const componentMap = {
  facebook_id: <FaFacebook />,
  instagram_id: <FaInstagram />,
  twitter_id: <FaTwitter />,
}

const linkMap = {
  facebook_id: 'https://www.facebook.com',
  instagram_id: 'https://www.instagram.com',
  twitter_id: 'https://www.twitter.com',
}

const PersonLinks = ({ id }) => {
  const [personLinks, setPersonLinks] = useState({})

  useEffect(() => {
    getPersonLinks(id).then(data => setPersonLinks(data))
  }, [id])

  return (
    <ul className="person-links">
      {Object.keys(personLinks).map(key => {
        if (!map[key]) {
          return false
        }

        if (!personLinks[key]) {
          return false
        }

        return (
          <li key={key} className="person-links--item">
            <a
              href={`${linkMap[key]}/${personLinks[key]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {componentMap[key]}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PersonLinks
