import React from 'react'

const PersonForm = ({addName, handleNameChange, handleNumberChange, newName, newNumber}) => (
  <div>
    <form onSubmit={addName}>
      <div>
        name: <input onChange={handleNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
)

export default PersonForm