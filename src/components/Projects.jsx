import React from "react";
import "./Projects.css";
import NavBox from "./NavBox";
import glyph1 from "../img/glyph1.png";
import glyph2 from "../img/glyph2.png";
import glyph3 from "../img/glyph3.png";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      {/* <h1>Projects</h1> */}
      <NavBox />
      <div className="glyphs">
        <img src={glyph2} id="glyph2" />
        <img src={glyph3} id="glyph3" />
      </div>
      <img src={glyph1} id="glyph1" />
      <div className="card-box">
        <div className="card1">
          <div className="text-box">
            <h2>Garfield Street</h2>
            <div>
              <a href="http://garfieldst.web.app">Live | </a>
              <a href="https://github.com/brahmk/pball-app">Code</a>
              <p>
                • Built full-stack webapp utilizing custom API to connect to a
                database of users, then map information to corre- sponding
                front-end components{" "}
              </p>
              <p>
                • Custom graphics designed using Adobe Illustrator, Krita, and
                Inkscape
              </p>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="text-box">
            <h2>AOR Chatbot</h2>
            <div>
              <a href="http://garfieldst.web.app">Live | </a>
              <a href="https://github.com/brahmk/pball-app">Code</a>
              <p>
                • Created web-app components using React.JS, HTML, and CSS
                designed to match Figma mock-up provided by design team
              </p>
              <p>• NFT project to launch in late June/early July</p>
            </div>
          </div>
        </div>
        <div className="card4">
          <div className="text-box">
            <h2>Midi Modo NFT</h2>
            <div>
              <a href="http://midimodo.io">Live</a>
              <p>
                • Created web-app components using React.JS, HTML, and CSS to
                match Figma mock-up provided by design team
              </p>
              <p>• NFT project to launch in late June/early July</p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="text-box">
            <h2>Weather Reader</h2>
            <div>
              <a href="http://garfieldst.web.app">Live | </a>
              <a href="https://github.com/brahmk/pball-app">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
