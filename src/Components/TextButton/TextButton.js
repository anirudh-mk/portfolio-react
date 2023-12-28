import React from 'react'
import './TextButton.css'

function TextButton({button_text, button_color, font_color}) {
  return (
    <div className='text-button' style={{backgroundColor:button_color}}>
        <p style={{color:font_color}}>{button_text}</p>
    </div>
  )
}

export default TextButton