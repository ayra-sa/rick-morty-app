import Image from "next/image";
import arrowIcon from "../../../public/chevron_right_24px.png";

type Props = {
  episode: string;
  episodeName: string;
  airDate: string;
};

const BlockEpisode = ({ episode, episodeName, airDate }: Props) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-11/12">
          <p className="font-semibold">{episode}</p>
          <p>{episodeName}</p>
          <p>{airDate}</p>
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
