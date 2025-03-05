import React from 'react'
import '../style/aboutitwork.css'
function AboutItworkCard(props) {
  return (
    <div className='about_itwork_card'>
    <h4 >{props.h4}</h4>
    <h2>{props.h2}</h2>
    <p>{props.p}</p>
  </div>
  )
}

export default AboutItworkCard
