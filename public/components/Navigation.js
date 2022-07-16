import React from "react";
import Link from "next/link";
import { Nav, NavList, NavLogo } from "./styled";

export default function Navigation() {
  const styles = {
    marginRight: "2em",
  };

  return (
    <Nav>
      <NavLogo></NavLogo>
      <NavList>
        <li style={styles}>
          {" "}
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li style={styles}>
          {" "}
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li style={styles}>
          {" "}
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </NavList>
    </Nav>
  );
}
