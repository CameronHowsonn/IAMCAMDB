import { FaMinus, FaPlus } from 'react-icons/fa'
import {
  addFilm,
  addShow,
  removeFilm,
  removeShow,
} from '../helpers/localStorage.js'

const AddListButton = ({
  text = 'Add to List',
  icon,
  id,
  disabled,
  setElementIndex,
  type,
}) => {
  return (
    <button
      className="add-list-button button button--add"
      onClick={() => {
        if (type === 'movie') {
          disabled ? removeFilm(id) : addFilm(id)
        } else {
          disabled ? removeShow(id) : addShow(id)
        }
        setElementIndex(index => index + 1)
      }}
    >
      <span className="add-list-button__icon">
        {icon === 'plus' && (disabled ? <FaMinus /> : <FaPlus />)}
      </span>
      <span className="add-list-button__text">
        {disabled ? 'Remove from List' : text}
      </span>
    </button>
  )
}

export default AddListButton
