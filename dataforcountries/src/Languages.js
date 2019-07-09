import React from 'react'

const Languages = ({languages}) => {
  const listLanguages = () => languages.map(language => <li>{language.name}</li>)

  return (
    <div>
      <h3>Languages</h3>
      <ul>
        {listLanguages()}
      </ul>
    </div>
  )
}

export default Languages