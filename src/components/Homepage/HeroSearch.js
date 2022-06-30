import React, { useCallback, useEffect, useState } from 'react'
import { FaFilter, FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const HeroSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [errors, setErrors] = useState(false)
  const [placeholder, setPlaceholder] = useState('Search for films')
  let navigate = useNavigate()

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setErrors(false)
    }
    setSearchTerm(e.target.value)
  }

  const handleSubmit = useCallback(() => {
    if (searchTerm.length > 0) {
      setErrors(false)
      navigate(`/search/${searchTerm}`)
    } else {
      setErrors(true)
    }
  }, [searchTerm, navigate])

  useEffect(() => {
    if (errors) {
      setPlaceholder('Please enter a search term')
    } else {
      setPlaceholder('Search for films')
    }
  }, [errors])

  return (
    <div className={`homepage__hero-search ${errors ? 'error' : ''}`}>
      <div className='homepage__hero-search__inner'>
        <div className='homepage__hero-search__inner--search'>
          <input
            type='text'
            placeholder={placeholder}
            onChange={(e) => handleSearch(e)}
          />
          <div className='homepage__hero-search__inner--buttons'>
            <button
              onClick={() => {
                handleSubmit()
              }}
            >
              <FaSearch />
            </button>
          </div>
          {errors ? (
            <div className='homepage__hero-search__inner--error'>
              Please enter a search term
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  )
}
export default HeroSearch
