import { Character } from "./characters-interface";
import { Episode } from "./episodes-interface";
import { LocationInterface } from "./locations-interface";

export interface CharacterFullData extends Character {
    origin: LocationInterface
    location: LocationInterface
    episode: Episode[]
}