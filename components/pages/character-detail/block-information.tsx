import Image from "next/image";
import arrowIcon from "../../../public/chevron_right_24px.png";

type Props = {
  label: string;
  value: string;
};

const BlockInformation = ({ label, value }: Props) => {
  const location = label === "Location"

  const handleClick = () => {
    if (location) console.log("Hei")
  }


  return (
    <div onClick={handleClick} className={`${location ? "cursor-pointer" : "cursor-default"}`}>
      <div className="flex items-center">
        <div className="w-11/12">
          <p className="font-semibold">{label}</p>
          <p>{value}</p>
        </div>

        {location && (
          <Image src={arrowIcon} alt="arrow icon" width={25} height={25} />
        )}
      </div>
      <div className="divider" />
    </div>
  );
};

export default BlockInformation;
