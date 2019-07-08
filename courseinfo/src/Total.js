import React from 'react'

const Total =  ({parts}) => {
  const countExercises = () => parts.reduce((total, part) => total + part.exercises, 0)

  return (
    <div>
      <p><strong>Total of {countExercises()} exercises</strong></p>
    </div>
  )
}

export default Total