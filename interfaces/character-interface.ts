import { Character } from "./characters-interface";
import { EpisodeInterface } from "./episodes-interface";
import { LocationInterface } from "./locations-interface";

export interface CharacterFullData extends Character {
    origin: LocationInterface
    location: LocationInterface
    episode: EpisodeInterface[]
}