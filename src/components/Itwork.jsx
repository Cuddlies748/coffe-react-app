import React from 'react'
import ItworkCard from './ItworkCard'
import '../style/itwork.css'
function Itwork() {
  return (
    <div className="container">

    <div className='it_work'>
        <h2 className='how_to_it_work'>How it works</h2>
        <div className="oval"></div>
        <div className="oval1"></div>
        <div className="oval2"></div>
        <div className="line"></div>
      <div className="itwork_wrapper">
        <ItworkCard h4={"01"} h2={"Pick your coffee"} p={"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."}/>
        <ItworkCard h4={"02"} h2={"Choose the frequency"} p={"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."}/>
        <ItworkCard h4={"03"} h2={"Receive and enjoy!"} p={"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}/>
      </div>
      <button>Create your plan</button>
    </div>
    </div>
  )
}

export default Itwork
