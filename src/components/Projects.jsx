import React from "react";
import "./Projects.css";
import NavBar from "./NavBar";
import glyph1 from "../img/glyph1.png";
import glyph2 from "../img/glyph2.png";
import glyph3 from "../img/glyph3.png";
import Carousel from "./Carousel";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="glyphs">
        <img src={glyph2} id="glyph2" />
        <img src={glyph3} id="glyph3" />
      </div>
      <img src={glyph1} id="glyph1" />
      <Carousel />
    </div>
  );
}
