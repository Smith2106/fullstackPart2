import React from 'react'

const Weather = ({weather}) => {
  if (Object.entries(weather).length === 0 && weather.constructor === Object) {
    return (
      <div>No weather data available.</div>
    )
  }

  return (
    <div>
      <h3>Weather in {weather.location.name}</h3>
      <strong>Temperature:</strong> {weather.current.temp_c} Celcius
      <br />
      <img src={`https:${weather.current.condition.icon}`} />
      <br />
      <strong>Wind:</strong> {weather.current.wind_kph} kph direction {weather.current.wind_dir}
    </div>
  )
}

export default Weather