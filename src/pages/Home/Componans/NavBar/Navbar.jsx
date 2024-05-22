import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import {
  faArrowLeft,
  faList,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex ">
    <h1>New <span>Event</span></h1>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
      >
        <FontAwesomeIcon icon={faList} />
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li className="activ">
            <a href="#">intro</a>
          </li>
          <li>
            <a href="#">OverView</a>
          </li>
          <li>
            <a href="#">Spekers</a>
          </li>
          <li>
            <a href="#">Programs</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex "
      >
        {theme === "dark" ? (
          <span className="icon-moon-o">
            <FontAwesomeIcon icon={faMoon} />
          </span>
        ) : (
          <span className="icon-sun">
            <FontAwesomeIcon icon={faSun} />
          </span>
        )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </li>
            <li>
              <a href="#">intro</a>
            </li>
            <li>
              <a href="#">OverView</a>
            </li>
            <li>
              <a href="#">Spekers</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
