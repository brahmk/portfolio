import "./Splash.css";
import skeleton from "../img/skeleton.png";
import NavBox from "./NavBox";

export default function Splash() {
  return (
    <div className="main">
      <div className="splash-wrapper" id="home"></div>
      <div className="splash">
        {" "}
        <NavBox />
        <img src={skeleton} className="skeleton" />
      </div>
    </div>
  );
}
