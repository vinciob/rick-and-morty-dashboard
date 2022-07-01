import { createContext, useState } from "react";

// Declare Context
const GlobalContext = createContext<any>({});

// Define Provider wrapper and functions
function GlobalProvider({children} : any) {
    // Define Global States
    const [idCharacterSelected, setIdCharacterSelected] = useState<number | null>(null)
    const [querySearch, setQuerySearch] = useState<string>()
    const [favoritesCharacters, setFavoritesCharacters] = useState<string[]>([])

    // Add character ID in favorites array
    const addFavoritesCharacter = (id: string) => {
        setFavoritesCharacters( prevState => [...prevState, id] )
    }

    //Remove character ID in favorites array
    const removeFavoritesCharacter = (id: string) => {
        setFavoritesCharacters( prevState => prevState.filter(idCharacter => idCharacter !== id) )
    }

    return <GlobalContext.Provider value={{
            idCharacterSelected, 
            setIdCharacterSelected,
            querySearch,
            setQuerySearch,
            favoritesCharacters,
            addFavoritesCharacter,
            removeFavoritesCharacter
        }}>
            {children}
        </GlobalContext.Provider>
}

export { GlobalProvider, GlobalContext }