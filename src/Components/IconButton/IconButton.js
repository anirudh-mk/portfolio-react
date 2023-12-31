import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconButton.css'

function IconButton({icon, icon_button_color, icon_color, top, left}) {
  return (
      <div className="icon-button" style={{backgroundColor:icon_button_color, top:top, left:left}}>
         <FontAwesomeIcon icon={icon} size="lg" style={{color:icon_color, paddingTop:'8'}} />
      </div>
  )
}

export default IconButton