import React from 'react'

const GeneralInfo = ({name, capital, population}) => (
  <div>
    <h2>{name}</h2>
    Capital {capital}
    <br />
    Population {population}
  </div>
)

export default GeneralInfo