// Context
import { useContext } from 'react'
import { GlobalContext } from '../../utils/context'
// Type
import type { Character } from '../../utils/types'
interface InfoCharacterProps{ data: Character }

function InfoCharacter({data} : InfoCharacterProps) {
    // Global States
    const { 
        addFavoritesCharacter, 
        removeFavoritesCharacter, 
        favoritesCharacters // IDs Array of Characters
    } = useContext(GlobalContext)

    // Check if character is favorite
    const isFavorite: boolean = favoritesCharacters.includes(data.id)

    return <div className="modalcharacter__info">
      {/* Name */}
      <span>Name</span>
      <h1 data-testid={'character-name'}>{data.name}</h1>

      {/* Info */}
      <ul>
        <li data-testid={'character-status'}>Status: <b>{ data.status }</b></li>
        <li data-testid={'character-species'}>Species: <b>{ data.species }</b></li>
        { data.type && <li data-testid={'character-type'}>Type: <b>{ data.type }</b></li> }
        <li data-testid={'character-gender'}>Gender: <b>{ data.gender }</b></li>
        <li data-testid={'character-origin'}>Origin: <b>{ data.origin.name }</b></li>
        <li data-testid={'character-location'}>Location: <b>{ data.location.name }</b>
        </li>
      </ul>
      
      {/* Favorite button */}
      {isFavorite ? (
        <button onClick={() => removeFavoritesCharacter(data.id)}>Remove from favorites</button>
      ) : (
        <button onClick={() => addFavoritesCharacter(data.id)}>Add to favorites</button>
      )}
    </div>
}

export default InfoCharacter;
