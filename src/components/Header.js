import logo from "../images/logo.svg";
import Nav from "./Nav";
import Cart from "./Cart";
import profile from "../images/image-avatar.png";
import iconMenu from "../images/icon-menu.svg";
import "./Header.css";
import React, {useEffect, useState} from "react";

export default function Header() {
    const [btnMenuIsPressed, setBtnMenuIsPressed] = useState(false);
    useEffect(() => {
      if(btnMenuIsPressed) {
        document.body.setAttribute("class", "body body_overlay");
      }
    });

    return (
      <header className="Header">
        <div className="header__row-Group">
          <button
            type="button"
            className="header__Button-Menu"
            aria-label="Button Menu"
            aria-expanded={btnMenuIsPressed ? "false" : "true"}
            onClick={() => {
                setBtnMenuIsPressed(!btnMenuIsPressed);
            }}
          >
            <img src={iconMenu} alt="" aria-hidden="true" />
          </button>
          <div className="header__Logo">
          <img
            src={logo}
            alt="logo sneakers product"
            className="header__Logo"
          />
          </div>
          {btnMenuIsPressed ? <Nav setBtnMenuIsPressed={setBtnMenuIsPressed}/> : ""}
        </div>
        <div className="header__row-Group">
          <Cart />
          <div className="header__Profile">
            <img src={profile} alt="Profile user" className="header__Profile" />
          </div>
        </div>
      </header>
    );
}