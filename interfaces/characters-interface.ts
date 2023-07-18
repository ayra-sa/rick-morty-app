import { Info } from "./info";

export interface Character {
    id: string
    name: string
    status: string
    species: string
    gender: string
    type: string
    image: string
    [key: string]: any
}

export interface CharactersResponse {
    characters: {
        info: Info
        results: Character[]
    }
}