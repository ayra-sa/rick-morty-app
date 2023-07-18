import Hero from "@/components/hero";
import Container from "@/components/layouts/page-container";
import PageLayout from "@/components/layouts/page-layout";
import client from "@/graphql/client";
import GET_EPISODES from "@/graphql/queries/get-episodes";
import { EpisodeInterface, EpisodesResponse } from "@/interfaces/episodes-interface";
import { HeadContext } from "@/interfaces/head-interface";
import { GetServerSideProps } from "next";
import episodesImg from "../../public/episodes-hero.png";
import { useState } from "react";
import ContainerCard from "@/components/cards/container-card";
import EpisodeCard from "@/components/cards/episode-card";
import Loading from "@/components/loading";
import LoadMore from "@/components/buttons/load-more";
import handleMore from "@/lib/handle-load-more";
import EpisodesFilter from "@/components/filters/episodes-filter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Props = {
  initialEpisodes: EpisodeInterface[];
};

const Episodes = ({ initialEpisodes }: Props) => {
  const [episodes, setEpisodes] = useState<EpisodeInterface[]>(initialEpisodes);
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const headContext: HeadContext = {
    title: "All Episodes",
    meta: [],
  };

  const { episodeQuery } = useSelector(
    (state: RootState) => state.filter
  );

  const filteredEpisodes = episodes.filter((episode) => (
    episodeQuery === "" || episode.name.toLowerCase().includes(episodeQuery.toLowerCase()) || episode.episode.toLowerCase().includes(episodeQuery.toLowerCase())
  ))


  const handleMoreEpisodes = async () => {
    await handleMore(page + 1, GET_EPISODES, setEpisodes, setPage, setIsLoading, "episodes")
  }

  return (
    <PageLayout headContext={headContext}>
      <Container>
        <Hero heroImage={episodesImg} />

        <EpisodesFilter />

        <ContainerCard>
          {filteredEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} id={episode.id} episode={episode.episode} episodeAirDate={episode.air_date} episodeName={episode.name} />
          ))}
        </ContainerCard>

        {isLoading ? <Loading /> : <LoadMore handleMore={handleMoreEpisodes} />}
      </Container>
    </PageLayout>
  );
};

export default Episodes;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<EpisodesResponse>({
    query: GET_EPISODES,
    variables: { page: 1 },
  });

  const initialEpisodes = data.episodes.results;

  return {
    props: { initialEpisodes },
  };
};
