import React from 'react'
import './TextButton.css'

function TextButton({button_text, text_button_color, font_color, top, left}) {
  return (
    <div className='text-button' style={{backgroundColor:text_button_color, top:top, left:left}}>
        <p style={{color:font_color}}>{button_text}</p>
    </div>
  )
}

export default TextButton