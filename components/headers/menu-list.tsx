import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
    link: string
    menu: string
    linkId: string
};

const MenuList = ({link, menu, linkId}: Props) => {
  const router = useRouter()

  return (
    <li className="font-semibold">
      <Link href={link}>
        <span className={`text-xl md:text-base ${router.pathname === link || router.pathname === linkId ? "text-green-500" : ""}`}>{menu}</span>
      </Link>
    </li>
  );
}

export default MenuList