import "./Contact.css";
import NavBox from "./NavBox";

import sculptor from "../img/sculptor.png";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <img src={sculptor} id="sculptor" />
      <div className="contact-card">
        <div className="links-box">
          <a href="mailto:brahm.kelly@gmail.com">email x x x</a>
          <br />
          <a href="http://www.linkedin.com/in/b-andrew-kelly">
            LinkedIn x x x x x
          </a>
          <br />
          <a href="http://www.github.com/brahmk">gitHub x x x x</a>
        </div>
      </div>
    </div>
  );
}
