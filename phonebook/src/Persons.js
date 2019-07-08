import React from 'react'

import Person from './Person'

const Persons = ({persons, filter}) => {
  const loadPersons = () => persons
    .filter((person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || person.number.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    .map((person) => <Person key={person.name} name={person.name} number={person.number} />)

  return (
    <div>
      {loadPersons()}
    </div>
  )
}

export default Persons