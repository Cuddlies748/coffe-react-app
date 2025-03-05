import React from 'react'
import '../style/chosecard.css'
import ChoseCard from './ChoseCard'
import coffe from '../images/coffee-bean.png'
import gift from '../images/gift.png'
import trak from '../images/truck.png'
function ChoseWrapp() {
  return (
    <div className='container'>
        <div className="chose">
         <div className="whu_choose_us">
            <h2>Why choose us?</h2>
            <p>A large part of our role is choosing which particular coffees will be featured 
in our range. This means working closely with the best coffee growers to give 
you a more impactful experience on every level.</p>
         </div>
        <div className="chose_wrapper">

      <ChoseCard h2={"Best quality"} p={"Discover an endless variety of the world’s best artisan coffee from each of our roasters."} img={coffe}/>
      <ChoseCard h2={"Exclusive benefits"} p={"Discover an endless variety of the world’s best artisan coffee from each of our roasters."} img={gift}/>
      {/* <ChoseCard h2={"Free shipping"} p={"Discover an endless variety of the world’s best artisan coffee from each of our roasters."} img={trak}/> */}
      <div className="track_card">

      <img src={trak} alt="" />
      <h2>Free shipping</h2>
      <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters</p>
      </div>
        </div>
        </div>
    </div>
  )
}

export default ChoseWrapp
