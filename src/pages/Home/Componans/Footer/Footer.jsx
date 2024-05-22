import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
      <div className="br" />
        <div className="footer-by">
          <p>
            Copyright 2024 Your Company | Design : <span>Bahira Ibrahim</span>
          </p>
        </div>
        <div className="social">
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGoogle} />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
