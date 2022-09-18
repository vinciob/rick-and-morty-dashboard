import React from "react"
// Context
import { useContext } from "react"
import { GlobalContext } from "../utils/context"
// Types
interface HeaderProps{ 
  setFavoriteScreen: React.Dispatch<React.SetStateAction<boolean>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

function Header({setFavoriteScreen, setPage} : HeaderProps) {
  // GlobalState
  const {
    favoritesCharacters, // Array od IDs
    setQuerySearch // set query for function that fetch Characters data
  } = useContext(GlobalContext)

  function searchHandler(ev : React.ChangeEvent<HTMLInputElement>){
    // initialize Pagination
    setPage(1)
    // If it's rendering "fovorites" component, this function close it
    setFavoriteScreen(false)
    // Set the query string for fetch function
    setQuerySearch(ev.target.value)
  }
  
  return <header>
    <div className='wrapper'>

      {/* Logo */}
      <div className='logo-container'>
        <img src="logo.svg" alt="Rick and Morty Logo" />
      </div>

      {/* Search input */}
      <div className='search-form'>
        <input type="text" onChange={ev => searchHandler(ev)} placeholder="Search Character"/>
      </div>

      {/* Favourites Button */}
      <div className='favourite-button'>
        <button onClick={() => setFavoriteScreen(true)}>
          Favorites
          {favoritesCharacters.length > 0 && <span>{favoritesCharacters.length}</span>}
        </button>
         
      </div>

    </div>
  </header>
}

export default Header