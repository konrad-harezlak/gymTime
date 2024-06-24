import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../../assets/styles/footer.scss";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer__copyright">
        © Copyright 2024. Wszystkie prawa zastrzeżone.
      </div>
      <div className="footer__contact">
        Odwiedź nas na:&nbsp;&nbsp; <FontAwesomeIcon icon={faFacebook} /> &nbsp;&nbsp;
        <FontAwesomeIcon icon={faInstagram} /> &nbsp;&nbsp;
        <FontAwesomeIcon icon={faTiktok} /> 
      </div>
    </div>
  );
}

export default Footer;
