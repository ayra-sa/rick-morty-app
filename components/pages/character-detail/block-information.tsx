import Image from "next/image";
import arrowIcon from "../../../public/chevron_right_24px.png";
import { useRouter } from "next/router";
import { useCallback } from "react";

type Props = {
  label: string;
  value: string;
  id?: string
};

const BlockInformation = ({ label, value, id }: Props) => {
  const location = label === "Location"
  const router = useRouter()

  const handleClick = useCallback(() => {
      router.push(`/locations/${id}`)
    }, [router, id])

  const locationClick = () => {
    location && handleClick()
  }


  return (
    <div onClick={locationClick} className={`${location ? "cursor-pointer" : "cursor-default"}`}>
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
