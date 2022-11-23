import iconClose from "../images/icon-close.svg";
import "./Nav.css";
import React, {useState, useRef } from "react";

export default function Nav(props) {
  const [btnCloseIsPressed, setBtnCloseIsPressed] = useState(false);
  const nav = useRef(null);

  window.addEventListener("resize", handleResizeWindow);

  function handleResizeWindow(event) {
    if (btnCloseIsPressed || window.matchMedia("min-width: 960px").matches) {
      document.body.classList.remove("body_overlay");
      props.setBtnMenuIsClicked(false);
      setBtnCloseIsPressed(false);
    }
  }

    return (
      <nav
        className={
          props.btnMenuIsClicked
            ? "Nav nav_collapse-show"
            : btnCloseIsPressed
            ? "Nav"
            : "Nav"
        }
        ref={nav}
      >
        <button
          type="button"
          className="nav__Button-Close-Menu"
          aria-label="Button Close Menu"
          title="Close Menu"
          onPointerDown={() => {
            setBtnCloseIsPressed((prevState) => {
              document.body.classList.remove("body_overlay");
              props.setBtnMenuIsClicked(false);
              return !prevState;
            });
          }}
          onKeyDown={(event) => {
            //event.preventDefault();
            if (event.code === "Enter") {
              setBtnCloseIsPressed((prevState) => {
                document.body.classList.remove("body_overlay");
                props.setBtnMenuIsClicked(false);
                return !prevState;
              });
              event.target.blur();
            }
          }}
        >
          <img src={iconClose} alt="" aria-hidden="true" />
        </button>
        <ul className="nav__List" aria-label="List links navigation">
          <li className="nav__Item" key={"link-collections"}>
            <a
              href="#collections"
              target="_self"
              rel="next"
              className="nav__Link"
            >
              Collections
            </a>
          </li>
          <li className="nav__Item" key={"link-men"}>
            <a href="#men" target="_self" rel="next" className="nav__Link">
              Men
            </a>
          </li>
          <li className="nav__Item" key={"link-women"}>
            <a href="#women" target="_self" rel="next" className="nav__Link">
              Women
            </a>
          </li>
          <li className="nav__Item" key={"link-about"}>
            <a href="#about" target="_self" rel="next" className="nav__Link">
              About
            </a>
          </li>
          <li className="nav__Item" key={"link-contact"}>
            <a href="#contact" target="_self" rel="next" className="nav__Link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
}
