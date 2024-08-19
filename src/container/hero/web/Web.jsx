import React from 'react'
import Bookmark from '../../../assets/bookmark.svg'
import './web.css'
import Webs from '../../../assets/undraw_Remote_design_team_re_urdx.png'
import Frimg from '../../../assets/businesswoman-using-tablet-analysis.jpg'
import Frimg1 from '../../../assets/colleagues-working-cozy-office-medium-shot.jpg'
import Newimg from '../../../assets/rear-view-young-college-student.jpg'
const Web = () => {
  return (
    <div className='web'>
      <div className="web-header ">
        <div className="web-text">
          <p>Homepage / Web Design</p>
          <h2>Introduction to Web Design 101</h2>
          <div className="web-button">
            <button>Read More</button>
            <img src={Bookmark} alt="" />
          </div>
        </div>
        <div className="web-image">
          <img src={Webs} alt="" />
        </div>
      </div>
      <div className="second-page">
        <h5>Introduction to Web Design</h5>
        <p>So how can you stand out, do something unique and interesting, build an online business, and get paid enough to change life. Please visit TemplateMo website to download free website  templates.</p>
        <p>There are so many ways to make money online. Below are several platforms you can use to find success. Keep in mind that there is no path everyone can take. If that were the case, everyone would have a million dollars.</p>
      </div>
      <div className="freelance">
        <div className="freelance-header"><h4><b>Freelancing your skills isn't going to make you a millionaire overnight.</b></h4></div>
        <div className="freelance-pics">
          <img src={Frimg} alt="" />
          <img src={Frimg1} alt="" />
        </div>
        <div className="freelance-text">
          <p>Most people start with freelancing skills as they already have as a side hustle to build up income. This extra cash can be used for a vacation, to boost up savings, investing, build business.</p>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-img">
          <img src={Newimg} alt="" />
        </div>
        <div className="newsletter-mail">
          <p><b>Get Newsletter</b></p>
          <input type="email" placeholder='Email Address' />
          <button><b>Subscribe</b></button>
        </div>
      </div>
    </div>
  )
}

export default Web
