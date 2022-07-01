//Context
import { useContext } from 'react'
import { GlobalContext } from '../utils/context'
// CSS
import './single-character.css'
// Icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai' 
// Types
import type { Character } from '../utils/types'
interface CharacterData{ characterData: Character }


function SingleCharacter({characterData} : CharacterData) {
  // Global States
  const { 
    setIdCharacterSelected, 
    addFavoritesCharacter, 
    removeFavoritesCharacter, 
    favoritesCharacters 
} = useContext(GlobalContext)
  
  // Extract Character information
  const {id, name, image, species} = characterData
  
  // Check if character is favorite
  const isFavorite: boolean = favoritesCharacters.includes(id)

  return <div className="single-character__container">
    
    {/* Image */}
    <div className="single-character__image">
      <img src={image} alt={name} />
    </div>

    {/* Name and Buttons */}
    <div className='single-character__info'>

      <div className="single-character__name">
        <h3>{name}</h3>
        <p>{species}</p>
      </div>
      
      <div className="single-character__buttons">
        <button onClick={() => setIdCharacterSelected(id)}>INFO</button>

        {isFavorite ? ( 
            <AiFillStar onClick={() => removeFavoritesCharacter(id)} className="single-character__favorite-icons"/>
          ) : ( 
            <AiOutlineStar onClick={() => addFavoritesCharacter(id)} className="single-character__favorite-icons"/>
        )}
      </div>
    </div>

  </div>
}

export default SingleCharacter