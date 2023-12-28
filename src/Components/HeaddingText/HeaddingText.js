import React from 'react'
import './HeaddingText.css'
function HeaddingText({headding, color}) {
  return (
    <div className='headding'>
        <h1 className='headding-text' style={{color:color}}>{headding}</h1>
    </div>
  )
}

export default HeaddingText