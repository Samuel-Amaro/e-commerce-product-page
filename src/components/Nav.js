import iconClose from "../images/icon-close.svg";
import "./Nav.css";

export default function Nav() {
    return (
      <nav className="Nav">
        <button type="button" className="nav__Button-Close-Menu" aria-label="Button Close Menu">
            <img src={iconClose} alt="" aria-hidden="true"/>
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