import { Character } from "./characters-interface"
import { Info } from "./info"

export interface Episode {
    id: string
    name: string
    air_date: string
    episode: string
    characters: Character[]
}

export interface EpisodesResponse {
    episodes: {
        info: Info
        results: Episode[]
    }
}

export interface EpisodeResponse {
    episode: Episode
}