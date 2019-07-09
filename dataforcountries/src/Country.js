import React from 'react'

import GeneralInfo from './GeneralInfo'
import Languages from './Languages'
import Flag from './Flag'

const Country = ({country}) => (
  <div>  
    <GeneralInfo name={country.name} capital={country.capital} population={country.population} />
    <Languages languages={country.languages} />
    <Flag flagSource={country.flag} />
  </div>
)

export default Country