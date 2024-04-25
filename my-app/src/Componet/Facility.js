import React from 'react'

function Facility({Linka,titlea}) {
  return (
    <div>
      <img src={Linka} alt="" />
      <h3>{titlea}</h3>
    </div>
  )
}

export default Facility
