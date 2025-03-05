import React from 'react'
import img_logo from "../images/logo_img.png"
import fasebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import '../style/coffefoot.css'
function CoffeFooter() {
  return (
    <div className='container'>
      <div className="coffe_footer">
        <div className="coffe_footer_links">
        

           <div className="coffe_foot_group">
           <a className='coffe_foot_a' href="/">
           <img className='coffe_foot_img_logo' src={img_logo} alt="" />
            Coffeeroasters

           </a>

           <a className='coffe_foot_a1' href="/home">Home</a>
           <a className='coffe_foot_a2' href="/about">About Us</a>
           <a className='coffe_foot_a3' href="/create">Create your plan</a>
           </div>
        </div>
        <div className="coffe_foot_imagepak">
          <img className='foot_imagepak' src={fasebook} alt="" />
          <img className='foot_imagepak' src={twitter} alt="" />
          <img className='foot_imagepak' src={instagram} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CoffeFooter
