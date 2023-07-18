import ButtonBack from "@/components/buttons/button-back";
import CharacterCard from "@/components/cards/character-card";
import ContainerCard from "@/components/cards/container-card";
import Container from "@/components/layouts/page-container";
import PageLayout from "@/components/layouts/page-layout";
import client from "@/graphql/client";
import GET_EPISODE from "@/graphql/queries/get-episode";
import { EpisodeInterface } from "@/interfaces/episodes-interface";
import { Params } from "@/interfaces/generals";
import { HeadContext } from "@/interfaces/head-interface";
import { GetServerSideProps } from "next";

type Props = {
  episodeDetail: EpisodeInterface;
};

const Episode = ({ episodeDetail }: Props) => {
  const { id, name, air_date, episode, characters } = episodeDetail;

  const headContext: HeadContext = {
    title: name,
    meta: [],
  };

  return (
    <PageLayout headContext={headContext}>
      <Container>
        <div className="pt-20">
          <ButtonBack />
        </div>

        <div className="flex flex-col items-center mb-10">
          <h1 className="text-5xl mb-5">{name}</h1>
          <div className="flex gap-x-5 w-1/2 justify-center">
            <div>
              <b>Episode</b>
              <p>{episode}</p>
            </div>
            <div>
              <b>Date</b>
              <p>{air_date}</p>
            </div>
          </div>
        </div>

        <ContainerCard>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              characterImg={character.image}
              characterName={character.name}
              characterSpecies={character.species}
              id={character.id}
            />
          ))}
        </ContainerCard>
      </Container>
    </PageLayout>
  );
};

export default Episode;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;
  const { data } = await client.query<EpisodeInterface>({
    query: GET_EPISODE,
    variables: { id: id || 1 },
  });

  const episodeDetail = data.episode;

  return {
    props: { episodeDetail },
  };
};
