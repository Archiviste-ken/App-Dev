import React from 'react'

const H1 = ({title, desc}, ) => {   // here props is object
  return (
    <div>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default H1