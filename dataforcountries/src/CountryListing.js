import React from 'react'

const CountryListing = ({name, showCountry}) => (
  <div>
    {name} <button onClick={showCountry}>Show</button>
  </div>
)

export default CountryListing