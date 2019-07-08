import React from 'react'

const Filter = ({handleFilterChange, newFilter}) => (
  <div>
    Filter shown with <input onChange={handleFilterChange} value={newFilter} />
  </div>
)

export default Filter