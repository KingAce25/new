import React from 'react'
import Graduation from '../../../assets/undraw_Graduation_re_gthn.png'
import Educator from '../../../assets/undraw_Educator_re_ju47.png'

const Education = () => {
  return (
    <div className='education'>
      <div className="graduation">
        <h4><b>Graduation</b></h4>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Graduation} alt="" />
      </div>
      <div className="graduation">
        <h4><b>Educator</b></h4>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Educator} alt="" />
      </div>
    </div>
  )
}

export default Education
