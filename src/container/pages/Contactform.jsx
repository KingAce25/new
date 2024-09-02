import React, { useState } from 'react'
import './contactform.css'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('okikiola625@gmail.com');
  const [subject, setSubject] = useState('');
  const [summary, setSummary] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleSummaryChange = (e) => setSummary(e.target.value);


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
              {/* <div className="etext"> */}
                {/* <input type="text" placeholder='Name' id='name' />
                <input type="email" placeholder='Email address' id='email' /> */}
                <div className='etext'>
                  <input
                    type="text"
                    value={name}
                    id='name'
                    onChange={handleNameChange}
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    id='email'
                    onChange={handleEmailChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="subtell">
                  {/* <input type="text" placeholder='Subject' id='subject' />
                  <input type="text" placeholder='Tell me about the project' id='tell' /> */}
                  <input
                    type="text"
                    value={subject}
                    id='subject'
                    onChange={handleSubjectChange}
                    placeholder="Enter email subject"
                    required
                  />
                  <textarea
                    value={summary}
                    id='tell'
                    onChange={handleSummaryChange}
                    placeholder="Enter email summary"
                    required
                  />
                </div>
                <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\n${summary}`)}`}>
                  <button><p>Submit</p></button>
                </a>
              {/* </div> */}
            </div>
            <div className="map">
              <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Grace%20gas%20house,%20omo-%20bolanle,%20Ofatedo%20230103,%20Osun%20+(Anettcom%20Technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
              <h5>Topic Listing Center</h5>
              <p>Bay St & Larkin St, Francisco, CA 94109, United States</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}
export default Contact
