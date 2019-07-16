import React, { useState, useEffect } from 'react'

import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })

  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    
    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      personService
        .create({name: newName, number: newNumber})
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deleteObject(id)
        .then(response => setPersons(persons.filter(person => person.id != id)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} newFilter={newFilter} />
      <h3>Add a New</h3>
      <PersonForm
        addName={addName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={newFilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App