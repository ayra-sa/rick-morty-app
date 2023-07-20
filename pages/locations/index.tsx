import Hero from "@/components/hero";
import Container from "@/components/layouts/page-container";
import PageLayout from "@/components/layouts/page-layout";
import client from "@/graphql/client";
import GET_LOCATIONS from "@/graphql/queries/get-locations";
import { HeadContext } from "@/interfaces/head-interface";
import {
  LocationInterface,
  LocationsResponse,
} from "@/interfaces/locations-interface";
import { GetServerSideProps } from "next";
import locationsImg from "../../public/location-hero.png";
import ContainerCard from "@/components/cards/container-card";
import LocationCard from "@/components/cards/location-card";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import LoadMore from "@/components/buttons/load-more";
import handleMore from "@/lib/handle-load-more";
import LocationsFilter from "@/components/filters/locations-filter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Props = {
  initialLocations: LocationInterface[];
};

const Locations = ({ initialLocations }: Props) => {
  const [locations, setLocations] = useState<LocationInterface[]>(initialLocations);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredLocations, setFilteredLocations] = useState<LocationInterface[]>([]);

  const headContext: HeadContext = {
    title: "All Locations",
    meta: [],
  };

  const handleMoreLocations = async () => {
    await handleMore(
      page + 1,
      GET_LOCATIONS,
      setLocations,
      setPage,
      setIsLoading,
      "locations"
    );
  };

  const { locationQuery, type, dimension } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    const filtered = locations.filter(
      (location) =>
        (locationQuery === "" || location.name.toLowerCase().includes(locationQuery.toLowerCase())) &&
        (type === "" || location.type === type) &&
        (dimension === "" || location.dimension === dimension)
    );
    setFilteredLocations(filtered)
  }, [locations, locationQuery, type, dimension])

  return (
    <PageLayout headContext={headContext}>
      <Container>
        <Hero heroImage={locationsImg} />

        <LocationsFilter />

        <ContainerCard>
          {filteredLocations.map((location) => (
            <LocationCard
              key={location.id}
              id={location.id}
              locationName={location.name}
              locationType={location.type}
            />
          ))}
        </ContainerCard>

        {isLoading ? (
          <Loading />
        ) : (
          <LoadMore handleMore={handleMoreLocations} />
        )}
      </Container>
    </PageLayout>
  );
};

export default Locations;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<LocationsResponse>({
    query: GET_LOCATIONS,
    variables: { page: 1 },
  });

  const initialLocations = data.locations.results;

  return {
    props: { initialLocations },
  };
};
