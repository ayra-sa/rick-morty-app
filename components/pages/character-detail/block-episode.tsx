import Image from "next/image";
import arrowIcon from "../../../public/chevron_right_24px.png";
import { useRouter } from "next/router";
import { useCallback } from "react";

type Props = {
  episode: string;
  episodeName: string;
  airDate: string;
  id: string
};

const BlockEpisode = ({ episode, episodeName, airDate, id }: Props) => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/episodes/${id}`)
  }, [router, id])

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="flex items-center">
        <div className="w-11/12">
          <p className="font-semibold">{episode}</p>
          <p>{episodeName}</p>
          <p className="tracking-widest uppercase">{airDate}</p>
        </div>

        <Image
          src={arrowIcon}
          alt="arrow icon"
          width={25}
          height={25}
        />
      </div>

      <div className="divider" />
    </div>
  );
};

export default BlockEpisode;
