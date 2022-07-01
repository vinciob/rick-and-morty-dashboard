import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../utils/context'
// Components
import ImageCharacter from './image-character'
import InfoCharacter from './Info-character'
import EpisodesCharacter from './episodes-character'
// Utils
import { getCharacterById } from '../../utils/apiUtils'
// CSS
import './modal-character.css'
// Types
import { Character } from '../../utils/types'
interface ModalCharacterProps{ id: number }

function ModalCharacter( {id} : ModalCharacterProps) {
    // States
    const [ isLoading , setIsLoading ] = useState<boolean>(false)
    const [ characterData, setCharacterData ] = useState<Character>()
    // Global States
    const { setIdCharacterSelected } = useContext(GlobalContext)

    // Fetch Character data
    useEffect(()=>{
        // Get Character Info and stored in the "characterData" state
        setIsLoading(true)
        getCharacterById(id)
        .then(res => {
            if(res.statusText === "OK"){
                setCharacterData(res.data)
                setIsLoading(false)
            }
            setIsLoading(false)
        }).catch( err => { throw new Error("There was an error with API") })
      }, [id])
      
    return <div className="modalcharacter__background">
        <article className="modalcharacter__container">
            
            {/* Close Button */}
            <button className='modalcharacter__close-button' onClick={() => setIdCharacterSelected(null)}>Close</button>

            {isLoading ? (
                <h1>Loading...</h1>
            ) : characterData && ( <>

                {/* Image */}
                <ImageCharacter image={characterData.image} alt={characterData.name} />

                {/* Info */}
                <InfoCharacter data={ characterData } />

                {/* Episodes */}
                <EpisodesCharacter episodes={characterData.episode}/>

            </> )}
        </article>
    </div>
}

export default ModalCharacter