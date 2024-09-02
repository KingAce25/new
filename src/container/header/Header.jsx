import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Square from '../../assets/square.svg'
// import Arrow from '../../assets/arrow.svg'
import Pic from '../../assets/person.svg'
import Menu from './Menu'
// import Headerlinks from './Headerlinks'
// import Hamburger from '../../assets/hamburger.svg'

const Header = () => {
  return (
    <div className="header">

      <Link to='/'>
        <div className="headerimg">
          <img src={Square} alt='' />
          <h1>Topic</h1>
        </div>
      </Link>

      <div className="headerlinks">
        {/* <Headerlinks/> */}
        <Link to="/">HOME</Link>
        <a href='/#browse' >BROWSE</a>
        <a href="/#how">HOW IT WORKS</a>
        {/* <a href="/#faq">FAQs</a> */}
        <a href="/#contact">CONTACT</a>
        <a href="topicslisting">Topics Listing</a>
      </div>
      <div className="contact"><img src={Pic} alt="" /><div id="menu">
        <Menu/>
      </div></div>
    </div>
  )
}

export default Header
