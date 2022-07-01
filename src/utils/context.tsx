import React, { createContext, useState } from "react";
//Type
export type GlobalContextProps = {
    idCharacterSelected: null | number,
    // setIdCharacterSelected: () => void,
    querySearch: null | string,
    // setQuerySearch: React.Dispatch<React.SetStateAction<string | null>>,
    favoritesCharacters: [] | string[],
    //addFavoritesCharacter: (id:string) => void
}

// Declare Context
const GlobalContext = createContext<any>({});

// Define Provider Wrapper and Method
function GlobalProvider({children} : any) {
    // define Global States
    const [idCharacterSelected, setIdCharacterSelected] = useState<number | null>(null)
    const [querySearch, setQuerySearch] = useState<string>()
    const [favoritesCharacters, setFavoritesCharacters] = useState<string[]>([])

    // Add character id in favorites array
    const addFavoritesCharacter = (id: string) => {
        setFavoritesCharacters( prevState => [...prevState, id] )
    }

    //Remove character id in favorites array
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