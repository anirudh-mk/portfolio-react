import React from 'react'
import './HeaddingText.css'
function HeaddingText({headding, color, href}) {
  return (
    <div className='headding'>
      <a href={href}>
        <h1 className='headding-text' style={{color:color}}>{headding}</h1>
      </a>
    </div>
  )
}

export default HeaddingText