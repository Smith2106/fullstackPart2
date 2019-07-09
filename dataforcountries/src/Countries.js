import React from 'react';

import Country from './Country'
import CountryListing from './CountryListing'

const Countries = ({countries, showCountry}) => {
  const listCountries = () => countries.map(country => <CountryListing key={country.name} country={country} />)

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter.</div>
  }
  else if (countries.length < 1) {
    return <div>No matches, try another filter.</div>
  }
  else if (countries.length > 1) {
    return <div>{listCountries()}</div>
  }

  return (
    <Country country={countries[0]} />
  )
}

export default Countries