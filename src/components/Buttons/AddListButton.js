import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { addFilm } from '../helpers/localStorage'

const AddListButton = ({ text = 'Add to List', icon, id }) => {
  return (
    <button
      className='add-list-button button button--add'
      onClick={() => {
        addFilm(id)
      }}
    >
      <span className='add-list-button__icon'>
        {icon === 'plus' && <FaPlus />}
      </span>
      <span className='add-list-button__text'>{text}</span>
    </button>
  )
}

export default AddListButton
