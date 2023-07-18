import ButtonBack from "@/components/buttons/button-back";
import CharacterCard from "@/components/cards/character-card";
import ContainerCard from "@/components/cards/container-card";
import Container from "@/components/layouts/page-container";
import PageLayout from "@/components/layouts/page-layout";
import client from "@/graphql/client";
import GET_LOCATION from "@/graphql/queries/get-location";
import { Params } from "@/interfaces/generals";
import { HeadContext } from "@/interfaces/head-interface";
import { LocationInterface } from "@/interfaces/locations-interface";
import { GetServerSideProps } from "next";


type Props = {
  locationDetail: LocationInterface;
};

const Location = ({ locationDetail }: Props) => {
  console.log(locationDetail.residents)
  const { id, name, type, dimension, residents } = locationDetail;


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
              <b>Type</b>
              <p>{type}</p>
            </div>
            <div>
              <b>Dimension</b>
              <p>{dimension}</p>
            </div>
          </div>
        </div>

        <ContainerCard>
          {residents.map((resident) => (
            <CharacterCard key={resident.id} characterImg={resident.image} characterName={resident.name} characterSpecies={resident.species} id={resident.id} />
          ))}
        </ContainerCard>
      </Container>
    </PageLayout>
  );
};

export default Location;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;
  const { data } = await client.query<LocationInterface>({
    query: GET_LOCATION,
    variables: { id: id || 1 },
  });

  const locationDetail = data.location

  return {
    props: { locationDetail },
  };
};
