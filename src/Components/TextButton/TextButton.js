import React from 'react'
import './TextButton.css'

function TextButton({button_text, link, text_button_color, font_color, top, left}) {
  return (
    <div className='text-button' style={{backgroundColor:text_button_color, top:top, left:left}}>
        <a href={link}>
          <p style={{color:font_color}}>{button_text}</p>
        </a>
    </div>
  )
}

export default TextButton