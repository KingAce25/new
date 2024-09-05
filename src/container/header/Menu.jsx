import React, { useState } from 'react';
import './menu.css';
import Hamburger from '../../assets/hamburger.svg'
import Close from '../../assets/close.svg'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id='menu'>
            <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>

                <div className="menu-btn__burger">
                    {
                        menuOpen ? <img src={Close} alt='' onClick={() => setMenuOpen(true)} /> : <img src={Hamburger} alt='' onClick={() => setMenuOpen(false)} />
                    }

                </div>
                {/* <img src={Hamburger} /> */}
            </div>


            {
                menuOpen && (
                    <div id="dropdown-menu">
                        <ul>
                            <li><a href="/" onClick={() => setMenuOpen(false)}><b>HOME</b></a></li>
                            <li><a href="/#browse" onClick={() => setMenuOpen(false)}><b>BROWSE</b></a></li>
                            <li><a href="/#how" onClick={() => setMenuOpen(false)}><b>HOW IT WORKS</b></a></li>
                            {/* <li><a href="/#faq"><b>FAQs</b></a></li> */}
                            <li><a href="/#contact" onClick={() => setMenuOpen(false)}><b>CONTACT</b></a></li>
                            {/* <li><p><b>PAGES</b></p> */}
                                {/* <div id="drop"> */}
                                    <b><a href="/topicslisting" onClick={() => setMenuOpen(false)}>Topics Listing</a></b>
                                    {/* <a href='/contactform'>Contact</a> */}
                                {/* </div></li> */}
                        </ul>
                    </div>
                )
            }

        </div >
    );
};

export default Menu;

