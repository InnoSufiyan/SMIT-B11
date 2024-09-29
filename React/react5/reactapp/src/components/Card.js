import React from 'react'
import logo from '../assets/logo.jpg'

function Card({name}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>loremloremloremloremloremloremloremloremlorem</p>
        <div>
        <img src={logo} alt='saylani logo'/>
        </div>
    </div>
  )
}

export default Card