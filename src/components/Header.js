import logo from "../images/logo.svg";
import Nav from "./Nav";
import Cart from "./Cart";
import profile from "../images/image-avatar.png";
import iconMenu from "../images/icon-menu.svg";
import "./Header.css";
import React, {useEffect, useState} from "react";

export default function Header() {
    const [btnMenuIsClicked, setBtnMenuIsClicked] = useState(false);

    useEffect(() => {
      if (btnMenuIsClicked) {
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
            title="Expanded Menu"
            aria-expanded={btnMenuIsClicked ? "false" : "true"}
            onPointerDown={() => {
              setBtnMenuIsClicked(!btnMenuIsClicked);
            }}
            onKeyDown={(event) => {
              //event.preventDefault();
              if (event.code === "Enter") {
                setBtnMenuIsClicked(!btnMenuIsClicked);
                event.target.blur();
              }
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
          {btnMenuIsClicked ? (
            <Nav
              setBtnMenuIsClicked={setBtnMenuIsClicked}
          />
          ) : (
            ""
          )}
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