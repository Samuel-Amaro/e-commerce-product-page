import logo from "../images/logo.svg";
import Nav from "./Nav";
import Cart from "./Cart";
import profile from "../images/image-avatar.png";
import iconMenu from "../images/icon-menu.svg";
import "./Header.css";

export default function Header() {
    return (
      <header className="Header">
        <div className="header__row-Group">
          <button
            type="button"
            className="header__Button-Menu"
            aria-label="Button Menu"
            aria-expanded="true"
          >
            <img src={iconMenu} alt="" aria-hidden="true" />
          </button>
          <div className="header__Logo">
            <img src={logo} alt="logo sneakers product" />
          </div>
          <Nav />
        </div>
        <div className="header__row-Group">
          <Cart />
          <div className="header__Profile">
            <img src={profile} alt="Profile user" />
          </div>
        </div>
      </header>
    );
}