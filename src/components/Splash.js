import "./Splash.css";
import skeleton from "../img/skeleton.png";
import NavBox from "./NavBox";
import NavBar from "./NavBar";
import logo from "../img/name-logo-2.png"

export default function Splash() {

  return (
    <div className="main">
      <div className="splash-wrapper" id="home"></div>
      <div className="splash">
        {/* <NavBox /> */}
        {/* <NavBar /> */}
        <img src={skeleton} className="skeleton" />
        {/* <img src={logo} className="logo"></img> */}
      </div>
    </div>
  );
}
