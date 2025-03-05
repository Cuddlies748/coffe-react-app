import React from 'react'
import img_logo from "../images/logo_img.png"
import '../style/header.css'

function Header() {
  return (
    <div>
             <div className="ancor">
           <img className='img_logo' src={img_logo} alt="" />

           <a className='a' href="/">Coffeeroasters</a>
           <div className="ancor_group">

           <a className='a1' href="/home">Home</a>
           <a className='a2' href="/about">About Us</a>
           <a className='a3' href="/create">Create your plan</a>
           </div>
           
         </div>
    </div>
  )
}

export default Header
