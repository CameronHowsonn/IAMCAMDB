import { FaMinus, FaPlus } from 'react-icons/fa'
import { addFilm, removeFilm } from '../helpers/localStorage.js'

const AddListButton = ({
  text = 'Add to List',
  icon,
  id,
  disabled,
  setElementIndex,
}) => {
  return (
    <button
      className="add-list-button button button--add"
      onClick={() => {
        disabled ? removeFilm(id) : addFilm(id)
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
