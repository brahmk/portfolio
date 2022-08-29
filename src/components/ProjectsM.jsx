import React from "react";
import work from "../img/work.png";
import "./ProjectsM.css";

export default function ProjectsM() {
  return (
    <div className="projects-m">
      {" "}
      <div className="header-m">
        <img src={work} />
      </div>
      <div className="card-box-m">
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
                front-end components
                <br /> • Custom graphics designed using Adobe Illustrator,
                Krita, and Inkscape
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
                <br />
                •Built custom UI in React to emulate old-school AOL experience
                using React hooks to display messages and play sounds
              </p>
            </div>
          </div>
        </div>
        <div className="card4">
          <div className="text-box">
            <h2>Midi Modo NFT</h2>
            <div>
              <a href="http://midimodo.io">Live</a>
              <p className="tech">React | CSS </p>

              <p>
                • Created web-app components using React.JS, HTML, and CSS to
                match Figma mock-up provided by design team
                <br />• NFT project to launch in late July
              </p>
            </div>
          </div>
        </div>
        <div className="card5">
          <div className="text-box">
            <h2>Super Monster Ball 3D</h2>
            <div>
              <p className="tech">Unity | C#</p>

              <p>
                • 3D video game demo built in Unity engine
                <br />• Utilized C# scripts for player controls, scorekeeping,
                and 3D object behavior
              </p>
            </div>
          </div>
        </div>
        <div className="card6">
          <div className="text-box">
            <h2>Web Content Filter Bypass</h2>
            <div>
              <p className="tech">Visual Basic </p>
              <p>
                • Utilized Winsock to retrieve website IP address, then applied
                algorithm to convert into new URL undetectable to web content
                filters
                <br />• For educational purposes only!
              </p>
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
                <br />• Implemented React hooks to dynamically render incoming
                weather data and images into JSX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
