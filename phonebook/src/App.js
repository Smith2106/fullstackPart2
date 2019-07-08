import React, { useState } from 'react'

import Person from './Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    
    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons([...persons, {name: newName}])
      setNewName('')
    }
  }

  const loadNames = () => persons.map((person) => <Person key={person.name} name={person.name} />)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {loadNames()}
    </div>
  )
}

export default App