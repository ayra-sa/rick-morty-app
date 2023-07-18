import client from "@/graphql/client";
import GET_CHARACTERS from "@/graphql/queries/get-characters";
import {
  Character,
  CharactersResponse,
} from "@/interfaces/characters-interface";
import { HeadContext } from "@/interfaces/head-interface";
import { useState } from "react";
import PageLayout from "../layouts/page-layout";
import Hero from "../hero";
import CharacterCard from "../cards/character-card";
import Loading from "../loading";
import heroImg from "../../public/character-hero.png";
import Container from "../layouts/page-container";
import CharactersFilter from "../filters/characters-filter";
import ContainerCard from "../cards/container-card";
import LoadMore from "../buttons/load-more";

type Props = {
  initialCharacters: Character[];
};

const CharactersContent = ({ initialCharacters }: Props) => {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const headContext: HeadContext = {
    title: "All Characters",
    meta: [],
  };

  const handleMoreCharacters = async () => {
    setIsLoading(true);

    try {
      const nextPage = page + 1;
      const { data } = await client.query<Promise<CharactersResponse>>({
        query: GET_CHARACTERS,
        variables: { page: nextPage },
      });

      const moreCharacters = (await data).characters.results;
      setCharacters((prevCharacters) => [...prevCharacters, ...moreCharacters]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error loading more characters", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout headContext={headContext}>
      <Container>
        <Hero heroImage={heroImg} />

        <CharactersFilter />

        <ContainerCard>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              characterImg={character.image}
              characterName={character.name}
              characterSpecies={character.species}
            />
          ))}
        </ContainerCard>

        {isLoading ? <Loading /> : <LoadMore handleMore={handleMoreCharacters} /> }
      </Container>
    </PageLayout>
  );
};

export default CharactersContent;
