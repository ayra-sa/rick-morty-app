import Link from "next/link";
import RMLogo from "../../public/logo.png";
import Image from "next/image";
import Container from "../layouts/page-container";
import MenuList from "./menu-list";


type Props = {};

const menu = [
  { menu: "Characters", link: "/characters" },
  { menu: "Locations", link: "/locations" },
  { menu: "Episodes", link: "/episodes" },
];

const Header = ({}: Props) => {
  return (
    <header className="shadow-md fixed z-10 bg-white w-full">
      <Container>
        <nav className="navbar">
          <div className="flex-1">
            <Link href="#">
              <Image src={RMLogo} alt="logo" width={60} height={40} />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="flex gap-5 items-center">
              {menu.map((m) => (
                <MenuList key={m.menu} link={m.link} menu={m.menu} />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header