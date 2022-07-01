export type Character = {
    id: number,
    name: string,
    status: 'Dead' | 'Alive' | 'unknown',
    species: string,
    type: string,
    gender: 'Female' | 'Male' | 'unknown',
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string, 
    episode: string[],
    url: string,
    created: Date
}

export type Pagination = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}

export type Episode = {
    id: number,
    name: string,
    air_date: string, 
    episode: string,
    characters: string[],
    url: string,
    created: Date
}