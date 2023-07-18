import Link from "next/link";
import React from "react";

type Props = {
    link: string
    menu: string
};

const MenuList = ({link, menu}: Props) => {
  return (
    <li className="font-semibold">
      <Link href={link}>{menu}</Link>
    </li>
  );
}

export default MenuList