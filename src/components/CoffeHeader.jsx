import React from 'react'
import '../style/coffehead.css'
import coffe_bac from "../images/bacground_1.png"
function CoffeHeader() {
  return (
    <div className='container'>
     <div className='coffe_head_img' style={{ backgroundImage: `url(${coffe_bac})` }}>
      <div className="coffe_head_text">
        <h2>Great coffee
made simple.</h2>
<p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
<button>Create your plan</button>
      </div>
     </div>
     
    </div>
  )
}

export default CoffeHeader
