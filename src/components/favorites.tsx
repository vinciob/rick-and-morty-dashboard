import { useState, useEffect, useContext } from 'react'
// Components
import SingleCharacter from './single-character'
import Loading from './loading'
// Context
import { GlobalContext } from '../utils/context'
// Utils
import { getCharacterById, getCharactersByIdArray } from '../utils/apiUtils'
// CSS
import './list-characters.css'
// Types
import { Character } from '../utils/types'
interface FavoritesProps{ setFavoriteScreen: React.Dispatch<React.SetStateAction<boolean>>}

const Favorites = ( {setFavoriteScreen} : FavoritesProps) => {
    // Define States
    const [dataCharacters, setDataCharacters] = useState<Character[] | Character | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // Global States
    const { favoritesCharacters } = useContext(GlobalContext)

    useEffect(()=>{

        // If favoriteCharcaters contains a single ID invoke "getCharacterById" function
        if ( favoritesCharacters && favoritesCharacters.length === 1 ) {
            setIsLoading(true)
            getCharacterById( favoritesCharacters.toString() )
            .then( res => {
                setDataCharacters( res.data )
                setIsLoading(false)
            }).catch( err => { 
                setIsLoading(false)
                throw new Error("There was an error with API") 
            })
        }

        // If favoriteCharcaters contains multiple ID invoke "getCharactersByIdArray" function
        if ( favoritesCharacters && favoritesCharacters.length > 1 ) {
            setIsLoading(true)
            getCharactersByIdArray(favoritesCharacters)
            .then( res => {
                setDataCharacters(res.data)
                setIsLoading(false)
            }).catch( err =>{
                setIsLoading(false)
                throw new Error("There was an error with API");
            })   
        }

        if (favoritesCharacters.length < 1) {
            setDataCharacters(undefined)
        }

    },[favoritesCharacters])

    return <div className="list-characters__container wrapper">
        {/* Go back butotn */}
        <button 
            onClick={() => setFavoriteScreen(false)}
            className="favorites__go-button"
        > 
            {'<'} Go Back
        </button>

        {/* Handle Loading and titles */}
        { isLoading && <Loading /> }
        { !isLoading && !dataCharacters && <h1>Still no favorite characters</h1>}
        { !isLoading && dataCharacters && <h1>Favorites characters</h1> }
        
        {/* Check if "dataCharacters" is an Array or a single Character Object */}
        { !isLoading && dataCharacters && !Array.isArray(dataCharacters) && (             
            <SingleCharacter key={dataCharacters.id} characterData={dataCharacters} />
        )}

        { !isLoading && Array.isArray(dataCharacters) && ( 
            <>
            { dataCharacters.map( (character) => <SingleCharacter key={character.id} characterData={character} />) }
            </>
        )}
        
  </div>
}

export default Favorites