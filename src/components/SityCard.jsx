import React from 'react'
import '../style/sityhome.css'
function SityCard(props) {
  return (
    <div className='sity_home_card'>
      <img src={props.img} alt="" />
      <h2>{props.h2}</h2>
      <div className="sity_card_p_wrapp">

      <p className='sity_p'>{props.p}</p>
      <p className='sity_p'>{props.p1}</p>
      <p className='sity_p'>{props.p2}</p>
      <p className='sity_p'>{props.p3}</p>
      </div>
    </div>
  )
}

export default SityCard
