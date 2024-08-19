import React from 'react'
import './contactform.css'
const Contact = () => {
  return (
    <div id='contact-form'>
      <div className="texts">
        <div className="headers">
          <div className="heads"><p>Homepage / Contact Form</p></div>
          <h2>Contact Form</h2>
        </div>
        <div className="foots">
          <div className="love">
            <h3>We'd love to hear from you</h3>
            <div className="inputs">
              <div className="etext">
                <input type="text" placeholder='Name' id='name' />
                <input type="email" placeholder='Email address' id='email' />
              </div>
              <div className="subtell">
                <input type="text" placeholder='Subject' id='subject' />
                <input type="text" placeholder='Tell me about the project' id='tell' />
              </div>
              <button><p>Submit</p></button>
            </div>
          </div>
          <div className="map">
            <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Grace%20gas%20house,%20omo-%20bolanle,%20Ofatedo%20230103,%20Osun%20+(Anettcom%20Technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
            <h5>Topic Listing Center</h5>
            <p>Bay St & Larkin St, Francisco, CA 94109, United States</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
