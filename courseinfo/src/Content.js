import React from 'react'

import Part from './Part'
import Total from './Total'

const Content =  ({parts}) => {
  const rows = () => parts.map((part) => 
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  )

  return (
    <div>
      {rows()}
      <Total parts={parts}/>
    </div>
  )
}

export default Content