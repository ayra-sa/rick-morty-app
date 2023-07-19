import React, { useCallback } from "react";
import ImageCard from "../image-card";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
  characterImg: string;
  characterName: string;
  characterSpecies: string;
  id: string;
};

const CharacterCard = ({
  characterImg,
  characterName,
  characterSpecies,
  id,
}: Props) => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(`/characters/${id}`);
  }, [router, id]);

  return (
    <motion.div
      className="card shadow-md cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="h-48">
        <ImageCard src={characterImg} alt={characterName} height="h-48" />
      </figure>
      <div className="card-body py-4">
        <h2 className="card-title text-lg">{characterName}</h2>
        <p className="text-sm">{characterSpecies}</p>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
