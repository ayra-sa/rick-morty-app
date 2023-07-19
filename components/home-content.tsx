import Image from "next/image";
import React from "react";
import rickMorty from "../public/home-image.png";
import Link from "next/link";

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col place-content-center items-center justify-center">
      <Image src={rickMorty} alt="rick and morty" width={230} height={230} />

      <div className="my-4 text-center w-2/5 mx-auto">
        <p>Hi Everyone!</p>
        <p>
          Are you a fan of Rick and Morty&apos;s TV series? if yes, then this is
          the right place for you to explore about Rick and Morty&apos;s tv
          series, but if you just found out about this, it&apos;s okay, you can
          definitely still enjoy it 🤗
        </p>
      </div>
      <Link href="/characters">
        <button className="btn">Let&apos;s Go</button>
      </Link>
    </div>
  );
};

export default HomeContent;
