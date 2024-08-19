import React from 'react'
import './browse.css'
import View from './View'
// import { Link } from 'react-router-dom'
const Browse = () => {
  return (
    <div className='browse' id='browse'>
      <h2><b>Browse Topics</b></h2>
      <div id="view">
        <View/>
      </div>
    </div>
  )
}

export default Browse
