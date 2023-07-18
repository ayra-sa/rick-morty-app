import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

type Props = {
    locationName: string
    locationType: string
    id: string
}

const LocationCard = ({locationName, locationType, id}: Props) => {
    const router = useRouter()

    const onClick = useCallback(() => {
        router.push(`/locations/${id}`)
    }, [id, router])

  return (
    <div className="card rounded-md shadow-md cursor-pointer bg-[#FAFAFA]" onClick={onClick}>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-lg">{locationName}</h2>
        <p className="text-sm">{locationType}</p>
      </div>
    </div>
  )
}

export default LocationCard