import { useLayoutEffect, useRef, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { search } from '../helpers/search.js'
import SearchHeader from '../Search/Search-header'
import SearchResults from '../Search/SearchResults'

const Search = ({ config, filmList }) => {
  let { searchTerm } = useParams()
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const header = useRef()

  useLayoutEffect(() => {
    if (page > 1) {
      document.body.scrollIntoView({ block: 'start', behavior: 'auto' })
    }
    const getSearch = async () => {
      const data = await search(searchTerm, page)
      setResults(data.results)
      setTotalPages(data.total_pages)
      return data
    }
    getSearch()
  }, [page, searchTerm])

  return (
    <section className="search">
      <div className="search-header-container" ref={header}>
        {searchTerm && <SearchHeader term={searchTerm} />}
      </div>
      {results && totalPages && filmList && config && (
        <SearchResults
          results={results}
          totalPages={totalPages}
          filmList={filmList}
          config={config}
        />
      )}

      {totalPages > 1 ? (
        <div className="search__pagination">
          <button
            className="search__pagination__button button prev"
            onClick={() => {
              setPage(page - 1)
            }}
            disabled={page === 1}
          >
            <FaLongArrowAltLeft />
            Previous
          </button>
          <button
            className="search__pagination__button button next"
            onClick={() => {
              setPage(page + 1)
            }}
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
