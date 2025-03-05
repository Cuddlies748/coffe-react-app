import React from 'react'
import '../style/itwork.css'
function ItworkCard(props) {
  return (
    <div className='itwork_card'>
      <h4 >{props.h4}</h4>
      <h2>{props.h2}</h2>
      <p>{props.p}</p>
    </div>
    
  )
}

export default ItworkCard
