import Image from "next/image";
import React from "react";

type Props = {
    charImage: string
    charName: string
};

const Avatar = ({charImage, charName}: Props) => {
  return (
    <div className="avatar">
      <div className="rounded-full w-56 shadow-xl">
        <Image
          src={charImage}
          alt={charName}
          className="w-full h-auto"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Avatar;
