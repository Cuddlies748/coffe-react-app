import React from 'react'
import '../style/aboutitwork.css'
import AboutItworkCard from './AboutItworkCard'
function AboutItwork() {
  return (
    <div className='container'>
      <div className="aboutitwork">
      <div className="oval_about"></div>
        <div className="oval1_about"></div>
        <div className="oval2_about"></div>
        <div className="line_about"></div>
           <div className="AboutItworkWrapper">
           <AboutItworkCard h4={"01"} h2={"Pick your coffee"} p={"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."}/>
        <AboutItworkCard h4={"02"} h2={"Choose the frequency"} p={"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."}/>
        <AboutItworkCard h4={"03"} h2={"Receive and enjoy!"} p={"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}/>
           </div>
      </div>
    </div>
  )
}

export default AboutItwork
