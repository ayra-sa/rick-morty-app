import Hero from '@/components/hero'
import Container from '@/components/layouts/page-container'
import PageLayout from '@/components/layouts/page-layout'
import client from '@/graphql/client'
import GET_LOCATIONS from '@/graphql/queries/get-locations'
import { HeadContext } from '@/interfaces/head-interface'
import { LocationInterface, LocationsResponse } from '@/interfaces/locations-interface'
import { GetServerSideProps } from 'next'
import locationsImg from '../../public/location-hero.png'
import ContainerCard from '@/components/cards/container-card'
import LocationCard from '@/components/cards/location-card'
import { useState } from 'react'
import Loading from '@/components/loading'
import LoadMore from '@/components/buttons/load-more'
import handleMore from '@/lib/handle-load-more'

type Props = {
  initialLocations: LocationInterface[]
}

const Locations = ({initialLocations}: Props) => {
  const [locations, setLocations] = useState<LocationInterface[]>(initialLocations)
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const headContext: HeadContext = {
    title: 'All Locations',
    meta: []
  }

  const handleMoreLocations =async () => {
    await handleMore(page + 1, GET_LOCATIONS, setLocations, setPage, setIsLoading, "locations")
  }



  return (
    <PageLayout headContext={headContext}>
      <Container>
        <Hero heroImage={locationsImg} />

        <ContainerCard>
          {locations.map((location) => (
            <LocationCard key={location.id} id={location.id} locationName={location.name} locationType={location.type} />
          ))}
        </ContainerCard>

        {isLoading ? <Loading /> : <LoadMore handleMore={handleMoreLocations} />}
      </Container>
    </PageLayout>
  )
}

export default Locations

export const getServerSideProps: GetServerSideProps = async () => {
  const {data} = await client.query<LocationsResponse>({
    query: GET_LOCATIONS,
    variables: {page: 1}
  })

  const initialLocations = data.locations.results

  return {
    props: {initialLocations}
  }
}