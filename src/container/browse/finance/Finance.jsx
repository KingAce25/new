import React from 'react'
import Investment from '../../../assets/undraw_Finance_re_gnv2.png'
import Twitter from '../../../assets/twitter.svg'
import Facebook from '../../../assets/facebook.svg'
import Pintrest from '../../../assets/pinterest.svg'

const Finance = () => {
  return (
    <div className="finances">
      <div className="invest">
        <h5><b>Investment</b></h5>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Investment} alt="" />
      </div>
      <div className="invests">
        <h5><b>Finance</b></h5>
        <p>Lorem Ipsum dolor, sit amet consectetur adipising elit. Sint animi necessitatibus aperiam repudiandae nam omnis</p>
        <button id='learn'><b>Learn More</b></button>
        <div className="web-pages">
            <p>Share:</p>
            <div className="webs-logo">
                <button><img src={Twitter} alt="" /></button>
                <button><img src={Facebook} alt="" /></button>
                <button><img src={Pintrest} alt="" /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Finance
