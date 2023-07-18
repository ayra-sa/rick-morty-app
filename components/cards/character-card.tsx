import React, { useCallback } from "react";
import ImageCard from "../image-card";
import { useRouter } from "next/router";

type Props = {
    characterImg: string
    characterName: string
    characterSpecies: string
    id: string
};

const CharacterCard = ({characterImg, characterName, characterSpecies, id}: Props) => {
  const router = useRouter()

  const onClick = useCallback(() => {
    router.push(`/characters/${id}`)
  }, [router, id])


  return (
    <div className="card shadow-md cursor-pointer" onClick={onClick}>
      <figure className="h-48">
        <ImageCard src={characterImg} alt={characterName} height="h-48" />
      </figure>
      <div className="card-body py-4">
        <h2 className="card-title text-lg">{characterName}</h2>
        <p className="text-sm">{characterSpecies}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
