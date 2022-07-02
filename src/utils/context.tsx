import { createContext, useState } from "react";
import Cookies from 'universal-cookie';

// Declare Context
const GlobalContext = createContext<any>({});

// Define Provider wrapper and functions
function GlobalProvider({children} : any) {
    // Cookie
    const cookies = new Cookies();
    const cookieFavorites : number[] | [] = cookies.get('favorites') || []
    // Define Global States
    const [idCharacterSelected, setIdCharacterSelected] = useState<number | null>(null)
    const [querySearch, setQuerySearch] = useState<string>()
    const [favoritesCharacters, setFavoritesCharacters] = useState<number[] | []>(cookieFavorites)   

    // Add character ID in favorites array
    const addFavoritesCharacter = (id: number) => {
        setFavoritesCharacters( prevState => {
            const favoritesArray = [...prevState, id]
            
            // Handle Cookie
            const now = new Date()
            cookies.set('favorites', favoritesArray, { 
                path: '/' ,
                expires: new Date(now.getTime() + 1000000000),
                sameSite: true
            });
            
            return favoritesArray
        })
    }          

    //Remove character ID in favorites array
    const removeFavoritesCharacter = (id: number) => {
        const favoritesArray = favoritesCharacters.filter( (idCharacter: number) => idCharacter !== id)
        
        // Handle Cookie
        cookies.set('favorites', favoritesArray, { 
            path: '/' ,
            sameSite: true
        });
        
        setFavoritesCharacters(favoritesArray)
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