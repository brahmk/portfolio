import "./Splash.css";
import skeleton from "../img/skeleton.png";

export default function Splash() {
  return (
    <div className="main">
      <div className="splash-wrapper"></div>
      <div className="splash">
        <img src={skeleton} className="skeleton" />
      </div>
    </div>
  );
}
