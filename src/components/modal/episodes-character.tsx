// Utils
import useEpisodes from '../../utils/useEpisodes'
// Types
interface EpisodesCharacterProps {
  episodes: string[];
}

function EpisodesCharacter({ episodes }: EpisodesCharacterProps) {
    
    // Extract episodes info
    const {loading, episodes: episodesFetched } = useEpisodes(episodes)

    return <div className="modalcharacter__list-episodes">
        <h3>LIST EPISODE</h3>

        {/* Handle Loading and Error */}
        { loading && <p>Loading...</p>}
        { !episodesFetched && <p>There is no episodes</p>}

        { !loading && episodesFetched &&  (
            <ul>
                { episodesFetched.map((episode) => <li key={episode.data.id}><b>{episode.data.name}</b> <em>({episode.data.episode})</em></li> )}
            </ul>
        )} 
    </div>
}

export default EpisodesCharacter;