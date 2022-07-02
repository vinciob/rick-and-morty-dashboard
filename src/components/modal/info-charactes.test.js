import { render, screen } from '@testing-library/react';
import InfoCharacter from './Info-character'
import { GlobalContext } from '../../utils/context';
import '@testing-library/jest-dom'

const dummyCharacter = {
    id: 1,
    name: "Rick Sanchez",
    status: 'unknown',
    species: "Human",
    type: "",
    gender: "Male",
    origin: { name: "Earth (C-137)" },
    location: { name: "Citadel of Ricks" },
    // image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
}

/*-------------------------------------------------------*/

test('Check Character values', () => {
    render( 
        <GlobalContext.Provider value={{favoritesCharacters: []}}>
            <InfoCharacter data={dummyCharacter} />
        </GlobalContext.Provider>
    )
    const name = screen.getByTestId('character-name')
    const species = screen.getByTestId('character-species')
    const status = screen.getByTestId('character-status')
    const gender = screen.getByTestId('character-gender')
    const origin = screen.getByTestId('character-origin')
    const location = screen.getByTestId('character-location')

    expect(name).toHaveTextContent(dummyCharacter.name)
    expect(species).toHaveTextContent(dummyCharacter.species)
    expect(status).toHaveTextContent(dummyCharacter.status)
    expect(gender).toHaveTextContent(dummyCharacter.gender)
    expect(origin).toHaveTextContent(dummyCharacter.origin.name)
    expect(location).toHaveTextContent(dummyCharacter.location.name)
})