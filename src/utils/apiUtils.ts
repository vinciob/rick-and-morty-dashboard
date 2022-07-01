import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/'

// Get Characters by Page
export async function getCharactersByPage(numberPage: number){
  return axios.get('/character', {
    params: {
      page: numberPage
    },
    baseURL: baseUrl
  })
}

// Get Single Character by ID
export async function getCharacterById(id: number){
  return axios.get(`/character/${id}`, {
    baseURL: baseUrl
  })
}

// Get Characters by query search
export async function getCharacterByQuery(query: string, page: number){
  return axios.get(`/character/`, {
    params: {
      name: query,
      page: page
    },
    baseURL: baseUrl
  })
}

// Get Episodes info by array links
export async function getEpisodes(EpisodesLinks: string[] | undefined){
  if (EpisodesLinks) {
    return Promise.all(EpisodesLinks.map( link => axios.get(link)))
    .then( axios.spread((...allData) => allData ))
  }
}

// Get Characters data by IDs array
export async function getCharactersByIdArray(idArray : number[]){
  const queryParameter = idArray.join(',')
  return axios.get(`/character/${queryParameter}`, {
    baseURL: baseUrl
  })
}