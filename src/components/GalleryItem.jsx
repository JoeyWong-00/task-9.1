import React from 'react'

function GalleryItem({ image, name, desc}) {
    return (
      <div className="gallery">
            <img src={image} alt="pic1" width="600" height="400"/>
            <div className="desc"><strong>{name}</strong></div>
            <text>{desc}</text>
      </div>  
    )
}

export default GalleryItem;