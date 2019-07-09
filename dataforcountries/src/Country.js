import React, { useState, useEffect } from 'react'
import axios from 'axios';

import GeneralInfo from './GeneralInfo'
import Languages from './Languages'
import Flag from './Flag'
import Weather from './Weather'

const Country = ({country}) => {
  const [weather, setWeather] = useState({})
  
  useEffect(() => {
    axios
      .get(`https://api.apixu.com/v1/current.json?key=b1bc0cba0a60429eadc195746190907&q=${country.capital}`)
      .then(response => setWeather(response.data))
      .catch(err => setWeather({}))
  })

  return (
    <div>  
      <GeneralInfo name={country.name} capital={country.capital} population={country.population} />
      <Languages languages={country.languages} />
      <Flag flagSource={country.flag} />
      <Weather weather={weather} />
    </div>
  )
}

export default Country