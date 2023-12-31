import React from 'react'
import './ProfileImage.css'

function ProfileImage({image, width, height, left, image_background_top, image_container_top, border_radius}) {
  return (
    <div className='profile-image'>
        <div class="profile-outer-circle" style={{width:width, height:width, top:image_background_top, left:left, borderRadius:border_radius}}/>
            <div class="profile-image-outer" style={{width:width, height:height, top:image_container_top, left:left, borderBottomLeftRadius:border_radius, borderBottomRightRadius:border_radius}}>
            <img src={image} alt="Anirudh"/>
        </div>
    </div>
  )
}

export default ProfileImage