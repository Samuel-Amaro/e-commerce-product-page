import iconClose from "../images/icon-close.svg";
import "./Nav.css";
import React, { useEffect, useState, useRef } from "react";

export default function Nav(props) {
  const [btnCloseIsPressed, setBtnCloseIsPressed] = useState(false);
  const nav = useRef(null);

  useEffect(() => {
    if (btnCloseIsPressed) {
      document.body.classList.remove("body_overlay");
      props.setBtnMenuIsClicked(false);
    }
  });

  //arrumar aqui: esta mostrando e não mostrando o menu no mobile-first
  return (
    <nav
      className={
        props.btnMenuIsClicked
          ? "Nav"
          : btnCloseIsPressed
          ? "Nav nav_Hidden"
          : "Nav nav_Hidden"
      }
      ref={nav}
    >
      <button
        type="button"
        className="nav__Button-Close-Menu"
        aria-label="Button Close Menu"
        title="Close Menu"
        onPointerDown={() => {
          setBtnCloseIsPressed(!btnCloseIsPressed); 
        }}
        onKeyDown={(event) => {
          //event.preventDefault();
          if (event.code === "Enter") {
            setBtnCloseIsPressed(!btnCloseIsPressed);
            event.target.blur();
          }
        }}
      >
        <img src={iconClose} alt="" aria-hidden="true" />
      </button>
      <ul className="nav__List" aria-label="List links navigation">
        <li className="nav__Item">
          <a
            href="#collections"
            target="_self"
            rel="next"
            className="nav__Link"
          >
            Collections
          </a>
        </li>
        <li className="nav__Item">
          <a href="#men" target="_self" rel="next" className="nav__Link">
            Men
          </a>
        </li>
        <li className="nav__Item">
          <a href="#women" target="_self" rel="next" className="nav__Link">
            Women
          </a>
        </li>
        <li className="nav__Item">
          <a href="#about" target="_self" rel="next" className="nav__Link">
            About
          </a>
        </li>
        <li className="nav__Item">
          <a href="#contact" target="_self" rel="next" className="nav__Link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
