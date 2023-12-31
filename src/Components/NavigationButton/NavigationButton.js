import React from 'react'
import './NavigationButton.css'

function NavigationButton({href, title, width, top, left, background}) {
  return (
    <div>
      <a href={href}>
        <div className="navigation-button" style={{width:width, top:top, left:left, background:background}}>
            <p>{title}</p>
        </div>
      </a>
    </div>
  )
}

export default NavigationButton