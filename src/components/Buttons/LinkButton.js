import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

const LinkButton = ({ text, link, icon, buttonStyle }) => {
  if (link) {
    return (
      <Link to={link} className={`button button--link button--${buttonStyle}`}>
        {icon && (
          <span className='button__icon'>{icon === 'plus' && <FaPlus />}</span>
        )}
        <span className='button__text'>{text}</span>
      </Link>
    )
  } else {
    return (
      <button className='button button--link'>
        {icon && (
          <span className='button__icon'>{icon === 'plus' && <FaPlus />}</span>
        )}
        <span className='button__text'>{text}</span>
      </button>
    )
  }
}

export default LinkButton
