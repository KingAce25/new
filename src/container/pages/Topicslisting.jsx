import React from 'react'
import './topicslisting.css'
import Webimg from '../../assets/undraw_Remote_design_team_re_urdx.png'
import Online from '../../assets/undraw_online_ad_re_ol62.png'
import Podcast from '../../assets/undraw_Podcast_audience_re_4i5q.png'
// import { Link } from 'react-router-dom'
// import Web from '../hero/web/Web'
// import Background from '../../assets/businesswoman-using-tablet-analysis.jpg'
import Finance from '../../assets/undraw_Finance_re_gnv2.png'
import Facebook from '../../assets/facebook.svg'
import Pintrest from '../../assets/pinterest.svg'
import Twitter from '../../assets/twitter.svg'
import Bookmark from '../../assets/bookmark.svg'

const topicslisting = () => {
    return (
        <div className='topics-listing'>
            <div className="head">
                <p>Homepage / Topics Listing</p>
                <h2><b>Topics Listing</b></h2>
            </div>
            <div className="body">
                <div className="top">
                    <h3><b>Popular Topics</b></h3>
                </div>
                <div className="cards">

                    <div className="card">

                        <div className="img">
                            <img src={Webimg} alt='' />
                        </div>
                        <div className="texts">
                            <h4><b>Web Design</b></h4>
                            <p>Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your costom websites.</p>
                            <button><b>Learn More</b></button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img">
                            <img src={Online} alt='' />
                        </div>
                        <div className="texts">
                            <h4><b>Advertising</b></h4>
                            <p>Visit TemplateMo website to download free CSS templates. Lorem ipsum dolor, sit amet consectetur adipising elit animi necessitatibus</p>
                            <button><b>Learn More</b></button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={Podcast} alt='' />
                        </div>
                        <div className="texts">
                            <h4><b>Podcast</b></h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipising elit animi necessitatibus</p>
                            <button><b>Learn More</b></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigate">
                <button id='nav'>Prev</button>
                <button id='pge'>1</button>
                <button id='pges'>2</button>
                <button id='pges'>3</button>
                <button id='pges'>4</button>
                <button id='pges'>5</button>
                <button id='nav'>Next</button>
            </div>
            <div className="foot">
                <div className="top">
                    <h4><b>Trending Topics</b></h4>
                </div>
                <div className="cardz">
                    <div className="invest">
                        <h5><b>Investment</b></h5>
                        <p>Lorem Ipsum dolor sit amet consectetur</p>
                        <img src={Finance} alt="" />
                    </div>
                    <div className="finance">
                        <h5><b>Finance</b></h5>
                        <p>Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.</p>
                        <button id='learn'><b>Learn More</b></button>
                        <div className="imag2">
                            <div className="text">
                                <p><b>Share:</b></p>
                                <div className="buttons">
                                    <button id='logo'><img src={Facebook} alt='' /></button>
                                    <button id='logo'><img src={Pintrest} alt='' /></button>
                                    <button id='logo'><img src={Twitter} alt=''></img></button>
                                </div>
                            </div>
                            <div className="bookmark">
                                <p><img src={Bookmark} alt="" /></p>
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default topicslisting
