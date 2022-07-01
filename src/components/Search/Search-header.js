const SearchHeader = ({ term }) => {
  if (!term) {
    return false
  }
  return (
    <section className="search-header">
      <h1>Showing results for {term}</h1>
    </section>
  )
}

export default SearchHeader
