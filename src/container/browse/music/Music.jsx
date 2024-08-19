import React from 'react'
import Song from '../../../assets/undraw_Compose_music_re_wpiw.png'
import Online from '../../../assets/undraw_happy_music_g6wc.png'
import Podcast from '../../../assets/undraw_Podcast_audience_re_4i5q.png'

const Music = () => {
  return (
    <div className='design'>
      <div className="webs">
        <h4><b>Composing Song</b></h4>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Song} alt="" />
      </div>
      <div className="webs">
        <h4><b>Online Music</b></h4>
        <p>Lorem Ipsum dolor sit amet consectetur</p>
        <img src={Online} alt="" />
      </div>
      <div className="webs">
        <h4><b>Podcast</b></h4>
        <p>Lorem Ipsum door sit amet consectetur</p>
        <img src={Podcast} alt="" />
      </div>
    </div>
  )
}

export default Music
