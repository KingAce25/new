import React from 'react'
import Web from '../../../assets/undraw_Remote_design_team_re_urdx.png'
import Graphic from '../../../assets/undraw_Redesign_feedback_re_jvm0.png'
import Logo from '../../../assets/colleagues-working-cozy-office-medium-shot.png'
// import { Link } from 'react-router-dom'

const Design = () => {
    return (
        <div className='design'>
            {/* <Link to='/web'> */}
            <div className="webs">
                <h4><b>Web Design</b></h4>
                <p>Topic Listing Template Based on Bootstrap 5</p>
                <img src={Web} alt="" />
            </div>
            {/* </Link> */}
            <div className="webs">
                <h4><b>Graphic</b></h4>
                <p>Lorem Ipsum dolor sit amet consectetur</p>
                <img src={Graphic} alt="" />
            </div>
            <div className="webs">
                <h4><b>Logo Design</b></h4>
                <p>Lorem Ipsum dolor sit amet consectetur</p>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Design
