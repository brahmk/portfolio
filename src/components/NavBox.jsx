import React from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBox.css";

export default function NavBox() {
  return (
    <div className="navbox-wrapper">
      {" "}
      <HashLink to="/#home">Main</HashLink>
      <HashLink to="/#projects">Projects</HashLink>
      <HashLink to="/#contact">Contact</HashLink>
    </div>
  );
}
