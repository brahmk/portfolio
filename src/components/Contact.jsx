import "./Contact.css";
import NavBox from "./NavBox";

import sculptor from "../img/sculptor.png";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <img src={sculptor} id="sculptor" />
      <NavBox />
      <div className="contact-card">
        <div className="links-box">
          <a href="mailto:brahm.kelly@gmail.com">email</a>
          <br />
          <a href="www.linkedin.com/in/b-andrew-kelly">LinkedIn</a>
          <br />
          <a href="www.github.com/brahmk">gitHub</a>
        </div>
      </div>
    </div>
  );
}
