import React from 'react'
import './NavigationButton.css'

function NavigationButton({title, width, top, left, background}) {
  return (
    <div className="navigation-button" style={{width:width, top:top, left:left, background:background}}>
        <p>{title}</p>
    </div>
  )
}

export default NavigationButton