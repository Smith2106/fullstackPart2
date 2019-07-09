import React from 'react'

const SearchForm = ({handleQueryChange}) => (
  <div>
    Find Countries <input onChange={handleQueryChange} />
  </div>
)

export default SearchForm