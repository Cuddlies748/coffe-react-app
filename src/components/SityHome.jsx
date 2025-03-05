import '../style/sityhome.css'
import React from 'react'
import SityCard from './SityCard'
import united_sity from '../images/United Kingdom_sity.png'
import canada_sity from '../images/canada_sity.png'
import ausraliy_sity from '../images/austrailia_sity.png'
function SityHome() {
  return (
    <div className='container' >
        <div className="sity">
           <h2 className='sity_our_h2'>Our headquarters</h2>
      <div className="Sity_wrapper">
        <SityCard img={united_sity} h2={"United Kingdom"} p={"68  Asfordby Rd"}p1={"Alcaston"}p2={"SY6 1YA"}p3={"+44 1241 918425"}/>
        <SityCard img={canada_sity} h2={"Canada"} p={"1528  Eglinton Avenue"}p1={"Toronto"}p2={"Ontario M4P 1A6"}p3={"+1 416 485 2997"}/>
        <SityCard img={ausraliy_sity} h2={"Australia"} p={"   36 Swanston Street"}p1={"Kewell"}p2={"Victoria"}p3={"+61 4 9928 3629"}/>
      </div>

        </div>
    </div>
  )
}

export default SityHome
