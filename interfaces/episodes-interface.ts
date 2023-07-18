import { Character } from "./characters-interface"
import { Info } from "./info"

export interface EpisodeInterface {
    id: string
    name: string
    air_date: string
    episode: string
    characters: Character[]
    [key: string]: any
}

export interface EpisodesResponse {
    episodes: {
        info: Info
        results: EpisodeInterface[]
    }
}

// export interface EpisodeResponse {
//     episode: Episode
// }