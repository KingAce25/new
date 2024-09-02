import React from 'react'
import { Link } from 'react-router-dom'
import Square from '../../assets/square.svg'
import './footer.css'
import Dropdown from './Dropdown'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerimg"><Link to='/'><img src={Square} alt='' /><h1>Topic</h1></Link></div>
            <div className="ha">
                <div className="yo">
                    <div className="footer2">
                        <div className="text"><h4>Resources</h4></div>
                        <div className="links2">
                            <a href="/">Home</a>
                            <a href="/#browse">Browse</a>
                            <a href="/#how">How it works</a>
                            {/* <Link to='faq'>FAQs</Link> */}
                            <a href="/#contact">Contact</a>
                            <a href="topicslisting">Topics Listing</a>
                        </div>
                    </div>
                    <div className="footer2">
                        <div className="text"><h4>Information</h4></div>
                        <div className="links2">
                            <p>305-240-9671</p>
                            <p>info@company.com</p>
                            <a href="contactform">Email Us</a>

                        </div>
                    </div>
                </div>
                <div className="lan">
                    <div className="but">
                        <Dropdown />
                        <div className="text">
                            <p>Copyright © 2048 Topic Listing Center. All rights reserved.</p>
                            <p>Design:<Link to='https://templatemo.com'>templatemo.com</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
