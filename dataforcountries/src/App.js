import React, {useState, useEffect} from 'react';
import axios from 'axios'

import SearchForm from './SearchForm'
import Countries from './Countries'

function App() {
  const [newQuery, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${newQuery}`)
      .then(response => {
        setCountries(response.data)
      })
      .catch(err => {
        setCountries([])
      })

  }, [newQuery])

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const showCountry = (country) => {
    setCountries([country])
  }

  return (
    <div>
      <SearchForm handleQueryChange={handleQueryChange} />
      <Countries countries={countries} showCountry={showCountry} />
    </div>
  );
}

export default App;
