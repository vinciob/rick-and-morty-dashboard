/*************************************************************
This custom hook takes the array links of episode endpoint
and returns an object with loading status and array with 
episodes info.
***********************************************************/

import { useEffect, useState } from "react";
import { getEpisodes } from "./apiUtils";
//Types
import { AxiosResponse } from "axios";

export default function useEpisodes(episodesLink: string[] | undefined){
    const [ episodes, setEpisodes ] = useState<AxiosResponse<any, any>[] | undefined>()
    const [ loading, setIsLoading ] = useState<boolean>(false)

    useEffect(()=>{
        setIsLoading(true)
        getEpisodes(episodesLink).then(episodes => {
            setEpisodes(episodes)
            setIsLoading(false)
        })
    },[ episodesLink ])
    
    return { loading, episodes }
}