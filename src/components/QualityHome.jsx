import React from 'react'
import '../style/quality_home.css'
import gualiy from '../images/quali_img.png'
function QualityHome() {
  return (
    <div className='container'>
      <div className="Quality_home">
           <div className="qulity_home_textpak">
              <h2>Uncompromising quality</h2>
              <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        <img src={gualiy} alt="" />
           </div>
      </div>
    </div>
  )
}

export default QualityHome
