import BlockEpisode from '@/components/pages/character-detail/block-episode'
import BlockInformation from '@/components/pages/character-detail/block-information'
import ButtonBack from '@/components/buttons/button-back'
import Container from '@/components/layouts/page-container'
import PageLayout from '@/components/layouts/page-layout'
import Avatar from '@/components/pages/character-detail/avatar'
import client from '@/graphql/client'
import GET_CHARACTER from '@/graphql/queries/get-character'
import { CharacterFullData } from '@/interfaces/character-interface'
import { Params } from '@/interfaces/generals'
import { HeadContext } from '@/interfaces/head-interface'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'


type Props = {
  characterDetail: CharacterFullData
}

const Character = ({characterDetail}: Props) => {
  const router = useRouter()
  // console.log(router)
  const {name, image, gender, species, status, origin, type, location, episode} = characterDetail

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
          <Avatar charImage={image} charName={name} />

          <h1 className="text-4xl mt-3">{name}</h1>

          <div className="flex flex-col md:flex-row gap-10 w-[80%] mt-7">
            <div className="flex-1">
              <h3 className="text-lg mb-5">Informations</h3>
              <BlockInformation label='Gender' value={gender} />
              <BlockInformation label='Status' value={status} />
              <BlockInformation label='Species' value={species} />
              <BlockInformation label='Origin' value={origin.name} />
              <BlockInformation label='Type' value={type.length === 0 ? "-" : type} />
              <BlockInformation label='Location' value={location.name} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-5">Episodes</h3>

              {episode.map((eps) => (
                <BlockEpisode key={eps.id} airDate={eps.air_date} episode={eps.episode} episodeName={eps.name} />
              ))}
            </div>
          </div>
        </div>


      </Container>
    </PageLayout>
  )
}

export default Character


export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params as Params
  const {data} = await client.query<CharacterFullData>({
    query: GET_CHARACTER,
    variables: {id: id || 1}
  })

  const characterDetail = data.character

  return {
    props: {characterDetail}
  }
}