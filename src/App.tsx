import { useEffect, useState, useContext } from 'react';
// Components
import Header from './components/header';
import ListCharacters from './components/list-characters';
import Favorites from './components/favorites';
import Loading from './components/loading';
import ModalCharacter from './components/modal/modal-character';
import Footer from './components/footer';
import PaginationLink from './components/pagination';
// Utils
import { getCharactersByPage } from './utils/apiUtils'
import { getCharacterByQuery } from './utils/apiUtils'
// Context
import { GlobalContext } from './utils/context';
// Types
import { Character, Pagination } from './utils/types'

function App() {
  // Define States
  const [ characters, setCharacters ] = useState<Character[] | undefined>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ page, setPage ] = useState<number>(1)
  const [ paginationInfo, setPaginationInfo ] = useState<Pagination>()
  const [ favoritesScreen, setFavoriteScreen ] = useState<boolean>(false)
  // Global States
  const { idCharacterSelected, querySearch } = useContext(GlobalContext)

  useEffect(()=>{
    setIsLoading(true)

    // Get Cahracters by search query
    if (querySearch) {
      getCharacterByQuery(querySearch, page)
      .then(res => {
        setCharacters(res.data.results)
        setPaginationInfo(res.data.info) 
        setIsLoading(false)
      }).catch( err =>{
        setCharacters(undefined)
        setIsLoading(false)
        throw new Error("There was an error with API");
      })
    }

    // Get Cahracters by page number
    if (!querySearch) {
      getCharactersByPage(page)
      .then( res => {
          setCharacters(res.data.results)
          setPaginationInfo(res.data.info) 
          setIsLoading(false) 
        }).catch( err =>{
          setIsLoading(false)
          throw new Error("There was an error with API")
        })
    }
  }, [page, querySearch])

  return (
    <div className="App">
      <Header setFavoriteScreen={setFavoriteScreen} setPage={setPage}/>

      <div className='main-container'>
        {/* Loading */}
        { isLoading && <Loading /> }
      
        {/* List Characters */}
        { !isLoading && !favoritesScreen && (
          <ListCharacters data={characters} /> 
        )}
      
        {/* Pagination */}
        {!isLoading && !favoritesScreen && paginationInfo && characters &&
          <PaginationLink page={page} setPage={setPage} allPages={paginationInfo.pages}/> 
        }

        {/* Favorites */}
        {!isLoading && favoritesScreen && 
          <Favorites setFavoriteScreen={setFavoriteScreen} /> 
        }
      
        {/* Modal */}
        { idCharacterSelected && 
          <ModalCharacter id={idCharacterSelected}/> 
        } 
      </div>

      <Footer />
    </div>
  )
}

export default App;