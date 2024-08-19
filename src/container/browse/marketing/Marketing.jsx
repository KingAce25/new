import React from 'react'
import Advertising from '../../../assets/undraw_online_ad_re_ol62.png'
import Video from '../../../assets/undraw_Group_video_re_btu7.png'
import Tweet from '../../../assets/undraw_viral_tweet_gndb.png'
const Marketing = () => {
  return (
    <div className='design'>
      <div className="webs">
        <h4><b>Advertising</b></h4>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Advertising} alt="" />
      </div>
      <div className="webs">
        <h4><b>Video Content</b></h4>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Video} alt="" />
      </div>
      <div className="webs">
        <h4><b>Viral Tweet</b></h4>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Tweet} alt="" />
      </div>
    </div>
  )
}

export default Marketing
