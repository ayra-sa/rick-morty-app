import { useRouter } from 'next/router'
import { useCallback } from 'react'

type Props = {
    episodeName: string
    episode: string
    id: string
    episodeAirDate: string
}

const EpisodeCard = ({episodeName, episode, id, episodeAirDate}: Props) => {
    const router = useRouter()

    const onClick = useCallback(() => {
        router.push(`/locations/${id}`)
    }, [id, router])

  return (
    <div className="card rounded-md shadow-md cursor-pointer bg-[#FAFAFA]" onClick={onClick}>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-lg">{episodeName}</h2>
        <p className='text-sm'>{episodeAirDate}</p>
        <p className="text-base">{episode}</p>
      </div>
    </div>
  )
}

export default EpisodeCard