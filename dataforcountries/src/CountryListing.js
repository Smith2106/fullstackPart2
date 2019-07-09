import React, {useState} from 'react'

import Country from './Country'

const CountryListing = ({country}) => {
  const [showCountry, setShowCountry] = useState(false)

  const toggleShow = () => setShowCountry(!showCountry)

  if (showCountry) {
    return (
      <div>
        {country.name} <button onClick={toggleShow}>Hide</button>
        <Country country={country}/>
      </div>
    )
  }

  return (
    <div>
      {country.name} <button onClick={toggleShow}>Show</button>
    </div>
  )
}

export default CountryListing