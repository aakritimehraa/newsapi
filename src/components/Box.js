import React from 'react'

function Box({title , autho , date , img}) {
  return (
    <div className='box'>


    <img src={img} />
    <h2>{title}</h2>
    <p>{autho}</p>
    <p>{date.substring(0, 10)}</p>
    </div>
  )
}

export default Box