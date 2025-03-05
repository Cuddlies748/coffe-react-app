import React from 'react'
import CoffeCard from './CoffeCard'
import '../style/CoffeCard.css'
import paket from '../images/paket.png'
import paket1 from'../images/paket1.png'
import paket2 from '../images/paket2.png'
import paket3 from '../images/paket3.png'
import bac_pak from '../images/paket_bac.png'
function CoffeCardWrapp() {
  return (
    <div className='container'>
      <img className='paket_bac' src={bac_pak} alt="" />
        <div className="Coffe_card_wrapper">

      <CoffeCard img={paket3}h2={"Gran Espresso"} p={"Light and flavorful blend with cocoa and black pepper for an intense experience."}/>
      <CoffeCard img={paket2}h2={"Planalto"} p={"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."}/>
      <CoffeCard img={paket1}h2={"Piccollo"} p={"Mild and smooth blend featuring notes of toasted almond and dried cherry."}/>
      <div className="coffe_card_paket">
      <img className='coffe_wrapp_img' src={paket} alt="" />
      <h2 className='coffe_wrapp_h2'>Danche</h2>
      <p className='coffe_wrapp_p'>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
      </div>
        </div>
    </div>
  )
}

export default CoffeCardWrapp
