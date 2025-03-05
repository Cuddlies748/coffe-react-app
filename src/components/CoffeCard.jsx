import React from 'react'
import '../style/CoffeCard.css'
function CoffeCard(props) {
  return (
    <div className='Coffe_card'>
      <img className='coffe_card_img' src={props.img} alt="" />
      <h2 className='coffe_card_h2'>{props.h2}</h2>
      <p className='coffe_card_p'>{props.p}</p>
    </div>
  )
}

export default CoffeCard
