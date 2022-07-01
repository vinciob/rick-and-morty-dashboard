import React from 'react'
interface ImageCharacterProps{
    image: string,
    alt: string
}

function ImageCharacter({ image, alt } : ImageCharacterProps) {
  return (
    <div className='modalcharacter__image'>
        <img src={image} alt={alt} />
    </div>
  )
}

export default ImageCharacter

