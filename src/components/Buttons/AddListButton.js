import { FaMinus, FaPlus } from 'react-icons/fa'
import { addFilm } from '../helpers/localStorage.js'

const AddListButton = ({ text = 'Add to List', icon, id, disabled }) => {
  return (
    <button
      className="add-list-button button button--add"
      disabled={disabled}
      onClick={() => {
        addFilm(id)
      }}
    >
      <span className="add-list-button__icon">
        {icon === 'plus' && (disabled ? <FaMinus /> : <FaPlus />)}
      </span>
      <span className="add-list-button__text">{text}</span>
    </button>
  )
}

export default AddListButton
