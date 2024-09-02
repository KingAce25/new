import React from 'react'
import './hero.css'
import Search from '../../assets/search.svg'
// import { Link } from 'react-router-dom'
import Facebook from '../../assets/facebook.svg'
import Pintrest from '../../assets/pinterest.svg'
import Twitter from '../../assets/twitter.svg'
import Bookmark from '../../assets/bookmark.svg'
// import { Link } from 'react-router-dom'
import WebD from '../../assets/undraw_Remote_design_team_re_urdx.png'

const Hero = () => {
  return (
    <div className="all-pages">
      <div className='hero'>
        <div className="hero1">
          <div className="hero-text">
            <h2><b>Discover. Learn. Enjoy</b></h2>
            <p>platform for creatives around the world</p>
          </div>
          <div className="hero-input">
            <img src={Search} alt='' />
            <input type='text' placeholder='   Design, Code, Marketing, Finance ...'></input>
            <button>Search</button>
          </div>
        </div>
        <div className="pictures">
          <div className="images justify-center ">
            
            <a href="web">
            <div id="webs">
                <h4><b>Web Design</b></h4>
                <p>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>
                <img src={WebD} alt='' />
              </div>
            </a>
            
            <div className="imag">
              <h4>Finance</h4>
              <p>Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.</p>
              <button><p>Learn More</p></button>
              <div className="imag2">
                <div className="text">
                  <h6>Share:</h6>
                  <div className="buttons">
                    <button><img src={Facebook} alt='' /></button>
                    <button><img src={Pintrest} alt='' /></button>
                    <button><img src={Twitter} alt=''></img></button>
                  </div>
                </div>
                <div className="bookmark">
                  <p><img src={Bookmark} alt="" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
