// CSS
import './list-characters.css'
// Components
import SingleCharacter from './single-character'
// Types
import type { Character } from '../utils/types'
interface ListCharactersProps{
    data: Character[] | undefined
}

const ListCharacters = ( {data} : ListCharactersProps) => {

  return <div className="list-characters__container wrapper">
    { data ? (
      <>
      <h1>Characters List</h1>
      { data.map(character => <SingleCharacter key={character.id} characterData={character} />) }
      </>
    ) : (
      <h1>No characters found</h1>
    ) }
    
  </div>
}

export default ListCharacters