import React from 'react'

import Part from './Part'

const Content =  ({parts}) => {
  const rows = () => parts.map((part) => 
    <Part key={parts.id} name={part.name} exercises={part.exercises} />
  )

  return (
    <div>
      {rows()}
    </div>
  )
}

export default Content