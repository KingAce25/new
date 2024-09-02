import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className="heads" id='contact'>
      <div className="top-text">
        <h2><b>Get in Touch</b></h2>
      </div>
      <div className="bodys">
        <div className="textd">
          <h5><b>Head Office</b></h5>
          <p>Bey St &, Larkin St, San Francisco, ACA 94109, United States</p>
          <p>Phone: 305-240-9671</p>
          <p>Email: info@company.com</p>
        </div>
        <div className="textd">
          <h5><b>Dubai Office</b></h5>
          <p>Burj Park, Downtown Dubai, United Arab Emirates</p>
          <p>Phone: 110-220-3400</p>
          <p>Email: info@company.com</p>
        </div>
        <div className="head-map">
        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Grace%20gas%20house,%20omo-%20bolanle,%20Ofatedo%20230103,%20Osun%20+(Anettcom%20Technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
        <h2>Topics Listing Center</h2>
        <p>Anettcom Technologies, Suite 1 Grace Gas House, Omobolanle, Osogbo, Osun State</p>
        </div>
      </div>
      <div className="contactform">
      <a href="contactform" id='emails'><button id='email'>Email Us</button></a>
      </div>
    </div>
  )
}

export default Contact
