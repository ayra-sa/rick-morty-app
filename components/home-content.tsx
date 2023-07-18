import Image from "next/image";
import React from "react";
import rickMorty from "../public/home-image.png";

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col place-content-center items-center justify-center">
      <Image src={rickMorty} alt="rick and morty" width={230} height={230} />

      <div className="my-4 text-center w-2/5 mx-auto">
        <p>Hello Everyone!</p>
        <p>Are you a fans of Rick and Morty tv series? if yes, this place is fit for you to explore about Rick and Morty, or if you is new, it&apos;s ok, you still can enjoy this 🤗</p>
      </div>
      <button className="btn">Let&apos;s Go</button>
    </div>
  );
};

export default HomeContent;
