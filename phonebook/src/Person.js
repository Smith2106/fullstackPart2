import React from 'react'

const Person = ({name, number, deletePerson}) => (
  <div>
    {name} {number} <button onClick={deletePerson}>Delete</button>
  </div>
)

export default Person