import React, { useState } from "react";
import Logo from "/images/logo.svg";
import Burger from "/images/icon-hamburger.svg";
import Close from "/images/icon-close.svg";
import Arrow from "/images/icon-arrow-dark.svg";
import Button from "../Buttons/Button";

const products = [
  {
    label: "Overiew",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Marketplace",
    href: "#",
  },
  {
    label: "Features",
    href: "#",
  },
  {
    label: "Integrations",
    href: "#",
  },
];
const connects = [
  {
    label: "Contact",
    href: "#",
  },
  {
    label: "Newsletter",
    href: "#",
  },
  {
    label: "Linkedin",
    href: "#",
  },
];
const companies = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Team",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Careers",
    href: "#",
  },
];

const ProductList = ({ list }) => {
  return list.map((link, index) => (
    <li key={index}>
      <a
        href={link.href}
        className="text-footerBg hover:text-footer transition-colors "
      >
        {link.label}
      </a>
    </li>
  ));
};
const SubMenu = ({ name, categorie }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const toogleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };
  return (
    <>
      <span
        className="flex items-center justify-center gap-2 cursor-pointer text-xl"
        onClick={toogleSubMenu}
      >
        {name}
        <img
          src={Arrow}
          alt="arrow down"
          className={openSubMenu ? "rotate-180 transition-all " : ""}
        />
      </span>
      {openSubMenu && (
        <ul className="bg-footer/40 p-5 m-4 rounded flex flex-col gap-5">
          <ProductList list={categorie} />
        </ul>
      )}
    </>
  );
};
const Menu = () => {
  return (
    <div className="bg-white h-fit rounded-lg mt-10">
      <div className="font-ubuntu font-medium text-center p-10 flex flex-col gap-5 ">
        <SubMenu name="Product" categorie={products} />
        <SubMenu name="Company" categorie={companies} />
        <SubMenu name="Connect" categorie={connects} />
        <div className="h-[1px] mx-4 bg-footer"></div>
        <div className="flex flex-col items-center gap-2">
          <Button label="Login" />
          <Button label="Sign Up" full={true} />
        </div>
      </div>
    </div>
  );
};
const Nav = () => {
  const [Open, setOpen] = useState(false);

  const toogleOpen = () => {
    setOpen(!Open);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Logo Blogr" />
        {!Open ? (
          <img
            className="cursor-pointer"
            onClick={toogleOpen}
            src={Burger}
            alt="Logo Burger"
          />
        ) : (
          <img
            className="cursor-pointer"
            onClick={toogleOpen}
            src={Close}
            alt="Logo Burger"
          />
        )}
      </div>
      {Open && <Menu />}
    </>
  );
};

export default Nav;
