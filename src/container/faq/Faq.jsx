import React, { useState } from 'react'
import './faq.css'
import Faqs from '../../assets/faq_graphic.jpg'
// import Dropdown from './Dropdown'
// import './dropdownMenu1.css'

const DropdownButton = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topics-dropdown" id='topics-dropdown'>
      <button onClick={toggleDropdown} id='dropdown-button' className="dropdown-button">
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}
const Faq = () => {

  return (
    <div id='faq' className='faq'>
      <div id="faq-header" className='faq-header '>
        <h2><b>Frequently Asked Questions</b></h2>
      </div>
      <div id="faq-body">
        <div id="faq-image">
          <img src={Faqs} alt="Faq"/>
        </div>
        <div id="faq-dropdown" className=''>
          <div id='but'>
            <DropdownButton title="What is Topic Listing?">
              <div>Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.</div>
            </DropdownButton>

            <DropdownButton title="How to find a topic?">
              <div>You can search on Google with <b>keywords</b> such as templatemo portfolio, templatemo one-page layouts, photography, digital marketing, etc.</div>
            </DropdownButton>

            <DropdownButton title="Does it need to be paid?">
              <div>You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</div>
            </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
