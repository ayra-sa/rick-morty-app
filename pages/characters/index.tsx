import client from "@/graphql/client";
import GET_CHARACTERS from "@/graphql/queries/get-characters";
import {
  Character,
  CharactersResponse,
} from "@/interfaces/characters-interface";
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import PageLayout from "@/components/layouts/page-layout";
import { HeadContext } from "@/interfaces/head-interface";
import Container from "@/components/layouts/page-container";
import Loading from "@/components/loading";
import Hero from "@/components/hero";
import heroImg from "../../public/character-hero.png";
import ContainerCard from "@/components/cards/container-card";
import CharactersFilter from "@/components/filters/characters-filter";
import CharacterCard from "@/components/cards/character-card";
import LoadMore from "@/components/buttons/load-more";
import handleMore from "@/lib/handle-load-more";

type Props = {
  initialCharacters: Character[];
};

const Characters = ({ initialCharacters }: Props) => {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])

  const handleMoreCharacters = async () => {
    await handleMore(
      page + 1,
      GET_CHARACTERS,
      setCharacters,
      setPage,
      setIsLoading,
      "characters"
    );
  };

  const { species, gender, status, characterQuery } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    const filtered = characters.filter(
      (character) =>
        (species === "" || character.species === species) &&
        (gender === "" || character.gender === gender) &&
        (status === "" || character.status === status) &&
        (characterQuery === "" || character.name.toLowerCase().includes(characterQuery.toLowerCase()))
    );
    setFilteredCharacters(filtered)
  }, [characters, species, gender, status, characterQuery])



  const headContext: HeadContext = {
    title: "All Characters",
    meta: [],
  };

  return (
    <PageLayout headContext={headContext}>
      <Container>
        <Hero heroImage={heroImg} />

        <CharactersFilter />

        <ContainerCard>
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              characterImg={character.image}
              characterName={character.name}
              characterSpecies={character.species}
              id={character.id}
            />
          ))}
        </ContainerCard>
        {isLoading ? (
          <Loading />
        ) : (
          <LoadMore handleMore={handleMoreCharacters} />
        )}
      </Container>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<CharactersResponse>({
    query: GET_CHARACTERS,
    variables: { page: 1 },
  });

  const initialCharacters = (await data).characters.results;

  return {
    props: { initialCharacters },
  };
};

export default Characters;
