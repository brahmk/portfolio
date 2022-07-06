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
        <div className="column">
          <div className="card1">
            <div className="text-box">
              <h2>Garfield Street</h2>
              <div>
                <a href="http://garfieldst.web.app">Live | </a>
                <a href="https://github.com/brahmk/pball-app">Code</a>
                <p className="tech">
                  React | Node.js | Express | Firebase | CSS | SCSS
                </p>
                <p>
                  • Built full-stack webapp utilizing custom API to connect to a
                  database of users, then map information to corresponding
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
                <a href="https://aor-chatbot.web.app/">Live | </a>
                <a href="https://github.com/brahmk/socket-chat">Code</a>
                <p className="tech">React | JavaScript | AI </p>
                <p>
                  • Utilized rudimentary artifical intelligence to simulate
                  conversation by responding to user input
                </p>
                <p>
                  •Built custom UI in React to emulate old-school AOL experience
                  using React hooks to display messages and play sounds
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card4">
            <div className="text-box">
              <h2>Midi Modo NFT</h2>
              <div>
                <a href="http://midimodo.io">Live</a>
                <p className="tech">React | CSS </p>

                <p>
                  • Created web-app components using React.JS, HTML, and CSS to
                  match Figma mock-up provided by design team
                </p>
                <p>• NFT project to launch in late July</p>
              </div>
            </div>
          </div>
          <div className="card5">
            <div className="text-box">
              <h2>Super Monster Ball 3D</h2>
              <div>
                <p className="tech">Unity | C#</p>

                <p>• 3D video game demo built in Unity engine</p>
                <p>
                  • Utilized C# scripts for player controls, scorekeeping, and
                  3D object behavior
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card6">
            <div className="text-box">
              <h2>Free Reign</h2>
              <div>
                <p className="tech">Visual Basic </p>

                <p>
                  • Utilized Winsock to retrieve website IP address, then
                  applied algorithm to convert into new URL undetectable to web
                  content filters
                </p>
                <p>• For educational purposes only!</p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="text-box">
              <h2>Weather Reader</h2>
              <div>
                <a href="https://weather-react-bk-0604.netlify.app/">Live | </a>
                <a href="https://github.com/brahmk/weather2">Code</a>
                <p className="tech">React | JavaScript | CSS </p>

                <p>
                  • Utilized fetch to retrieve weather data from OpenWeatherMap
                  and city images from Unsplash using API keys
                </p>
                <p>
                  • Implemented React hooks to dynamically render incoming
                  weather data and images into JSX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
