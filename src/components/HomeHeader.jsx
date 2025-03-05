import React from 'react'
import '../style/homeheader.css'
import home_bac from '../images/bacground_2.png'
function HomeHeader() {
  return (
    <div className='container'>
      <div className="home_header">
      <div className="home_head_bac" style={{ backgroundImage: `url(${home_bac})`}}>

      <div className="home_head_text">
        <h2>About Us</h2>
        <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default HomeHeader

