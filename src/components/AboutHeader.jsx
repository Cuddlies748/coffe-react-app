import React from 'react'
import '../style/abouthead.css'
import about_bac from '../images/About_us.png'
function AboutHeader() {
  return (
    <div className='container'>
      <div className="about_header">
      <div className="about_head_bac" style={{ backgroundImage: `url(${about_bac})`}}>
        <div className="about_head_textpak">
            <h2>Create a plan</h2>
            <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutHeader
