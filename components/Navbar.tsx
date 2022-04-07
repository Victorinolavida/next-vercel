import React from "react";
import { ActiveLink } from "./ActiveLink";

import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  console.log(menuItems);

  return (
    <nav className={styles["main-container"]}>
      {/* <ActiveLink href="/" texto="Home" />
      <ActiveLink href="/about" texto="About" />
      <ActiveLink href="/contact" texto="Contact" /> */}
      {menuItems.map((item, i) => (
        <ActiveLink key={i} href={item.href} texto={item.text} />
      ))}
    </nav>
  );
};
