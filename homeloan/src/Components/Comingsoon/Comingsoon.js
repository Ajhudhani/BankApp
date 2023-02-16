import React from 'react'
import image from './comingsoon.jpg'

export default function Comingsoon() {
  return (
    <div className='imagecontainer p-5' style={{backgroundColor: "#A58CC3", alignItems:"center"}}>
        <div className='row mx-5 p-5' >
      <img className='abc' src={image} alt='Coming Soon'></img>
      </div>
    </div>
  )
}
