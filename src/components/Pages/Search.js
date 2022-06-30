import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchHeader from '../Search/Search-header'
import { search } from '../helpers/search'
import SearchResults from '../Search/SearchResults'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Search = ({ config, filmList }) => {
  let { searchTerm } = useParams()
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  useLayoutEffect(() => {
    const getSearch = async () => {
      const data = await search(searchTerm, page)
      setResults(data.results)
      setTotalPages(data.total_pages)
      return data
    }
    getSearch()
  }, [page, searchTerm])

  return (
    <section className='search'>
      <SearchHeader term={searchTerm} />
      <SearchResults
        results={results}
        totalPages={totalPages}
        filmList={filmList}
        config={config}
      />

      {totalPages > 1 ? (
        <div className='search__pagination'>
          <button
            className='search__pagination__button button prev'
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <FaLongArrowAltLeft />
            Previous
          </button>
          <button
            className='search__pagination__button button next'
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
            <FaLongArrowAltRight />
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default Search
