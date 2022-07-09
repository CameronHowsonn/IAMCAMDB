const SortSelect = ({ setSortBy }) => {
  return (
    <select
      name="sort-by"
      id="sort-by"
      onChange={e => setSortBy(e.target.value)}
    >
      <option value="popularity.desc">Popularity (DESC)</option>
      <option value="popularity.asc">Popularity (ASC)</option>
      <option value="release_date.desc">Release Date (DESC)</option>
      <option value="release_date.asc">Relase Date (ASC)</option>
      <option value="revenue.desc">Revenue (DESC)</option>
      <option value="revenue.asc">Revenue (ASC)</option>
      <option value="vote_average.desc">Rating (DESC)</option>
      <option value="vote_average.asc">Rating (ASC)</option>
    </select>
  )
}

export default SortSelect
