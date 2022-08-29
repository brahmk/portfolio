import React from "react";
import "./SplashM.css";
import splash from "../img/splasher-mb.png";
import about from "../img/about.png";
import work from "../img/work.png";

export default function SplashM() {
  return (
    <div className="splash-m">
      <img className="bg" src={splash} />
      <div className="img-box">
        <img className="work" src={work} />
        <img className="about" src={about} />
      </div>
    </div>
  );
}
