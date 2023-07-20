import Link from "next/link";
import RMLogo from "../../public/logo.png";
import Image from "next/image";
import Container from "../layouts/page-container";
import MenuList from "./menu-list";

type Props = {};

const menu = [
  { menu: "Characters", link: "/characters", linkID: "/characters/[id]" },
  { menu: "Locations", link: "/locations", linkID: "/locations/[id]" },
  { menu: "Episodes", link: "/episodes", linkID: "/episodes/[id]" },
];

const Header = ({}: Props) => {
  return (
    <header className="shadow-md fixed z-10 bg-white w-full">
      <Container>
        <div className="drawer">
          <input id="drawer-navbar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <nav className="w-full navbar">
              <Link href="#" className="flex-1">
                <Image src={RMLogo} alt="logo" width={60} height={40} />
              </Link>
              {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
              <div className="flex-none hidden lg:block">
                <ul className="flex gap-x-10">
                  {menu.map((m) => (
                    <MenuList
                      key={m.menu}
                      link={m.link}
                      menu={m.menu}
                      linkId={m.linkID}
                    />
                  ))}
                </ul>
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="drawer-navbar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
            </nav>
          </div>
          <div className="drawer-side">
            <label htmlFor="drawer-navbar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200">
              {menu.map((m) => (
                <MenuList
                  key={m.menu}
                  link={m.link}
                  menu={m.menu}
                  linkId={m.linkID}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* <nav className="navbar">
          <div className="flex-1">
            <Link href="#">
              <Image src={RMLogo} alt="logo" width={60} height={40} />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="flex gap-5 items-center">
              {menu.map((m) => (
                <MenuList
                  key={m.menu}
                  link={m.link}
                  menu={m.menu}
                  linkId={m.linkID}
                />
              ))}
            </ul>
          </div>
        </nav> */}
      </Container>
    </header>
  );
};

export default Header;
