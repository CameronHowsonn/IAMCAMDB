import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LinkButton = ({ text, link, icon, buttonStyle }) => {
  if (link) {
    return (
      <Link to={link} className={`button button--link button--${buttonStyle}`}>
        {icon && (
          <span className="button__icon">{icon === 'plus' && <FaPlus />}</span>
        )}
        <span className="button__text">{text}</span>
      </Link>
    )
  } else {
    return (
      <button
        to={link}
        className={`button button--link button--${buttonStyle}`}
      >
        {icon && (
          <span className="button__icon">{icon === 'plus' && <FaPlus />}</span>
        )}
        <span className="button__text">{text}</span>
      </button>
    )
  }
}

export default LinkButton
