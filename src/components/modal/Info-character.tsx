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
        favoritesCharacters 
    } = useContext(GlobalContext)

    // Check if character is favorite
    const isFavorite: boolean = favoritesCharacters.includes(data.id)
    return <div className="modalcharacter__info">
      {/* Name */}
      <span>Name</span>
      <h1>{data.name}</h1>

      <ul>
        <li>Status: <b>{ data.status }</b></li>
        <li>Species: <b>{ data.species }</b></li>
        {data.type && ( <li>Type: <b>{ data.type }</b></li> )}
        <li>Gender: <b>{ data.gender }</b></li>
        <li>Origin: <b>{ data.origin.name }</b></li>
        <li>Location: <b>{ data.location.name }</b>
        </li>
      </ul>
      {isFavorite ? (
        <button onClick={() => removeFavoritesCharacter(data.id)}>Remove from favorites</button>
      ) : (
        <button onClick={() => addFavoritesCharacter(data.id)}>Add to favorites</button>
      )}
    </div>
}

export default InfoCharacter;
