import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconButton.css'

function IconButton({icon, link, icon_button_color, icon_color, top, left}) {
  return (
      <div className="icon-button" style={{backgroundColor:icon_button_color, top:top, left:left}}>
        <a href={link} target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={icon} size="lg" style={{color:icon_color, paddingTop:'8'}} />
        </a>
      </div>
  )
}

export default IconButton