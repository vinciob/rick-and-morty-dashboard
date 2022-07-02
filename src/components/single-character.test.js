import { render, screen } from '@testing-library/react';
import SingleCharacter from './single-character'
import '@testing-library/jest-dom'
import { GlobalContext } from '../utils/context';

const dummyCharacter = {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
}

/*-------------------------------------------------------*/

test('Check Character info', () => {
    render( 
        <GlobalContext.Provider value={{favoritesCharacters: []}}>
            <SingleCharacter characterData={dummyCharacter} />
        </GlobalContext.Provider> 
    )
    const name = screen.getByTestId('character-name')
    const species = screen.getByTestId('character-species')
    const image = screen.getByTestId('character-image')

    expect(name).toHaveTextContent(dummyCharacter.name)
    expect(species).toHaveTextContent(dummyCharacter.species)
    expect(image).toHaveAttribute('src', dummyCharacter.image)
})

/*-------------------------------------------------------*/

test('Check character info are not empty', () => {
    render( 
        <GlobalContext.Provider value={{favoritesCharacters: []}}>
            <SingleCharacter characterData={dummyCharacter} />
        </GlobalContext.Provider> 
    )
    const name = screen.getByTestId('character-name')
    const species = screen.getByTestId('character-species')
    const image = screen.getByTestId('character-image')

    expect(name).not.toBeEmptyDOMElement()
    expect(species).not.toBeEmptyDOMElement()
    expect(image).not.toHaveAttribute('src', '')
})