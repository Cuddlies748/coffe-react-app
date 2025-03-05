import React from 'react'
import '../style/chosecard.css'
function ChoseCard(props) {
  return (
    <div className='chose_cadr'>
        <img className='chose_card_img' src={props.img} alt="" />
      <h2 className='chose_card_h2'>{props.h2}</h2>
      <p className='chose_card_p'>{props.p}</p>
    </div>
  )
}

export default ChoseCard
