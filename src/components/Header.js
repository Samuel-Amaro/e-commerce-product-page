import logo from "../images/logo.svg";
import Nav from "./Nav";
import profile from "../images/image-avatar.png";
import iconMenu from "../images/icon-menu.svg";
import "./Header.css";
import React, { useEffect, useState } from "react";
import imgProduct from "../images/image-product-1.jpg";
import iconDelete from "../images/icon-delete.svg";

export default function Header(props) {
  const [btnMenuIsClicked, setBtnMenuIsClicked] = useState(false);
  const [btnCartIsClicked, setBtnCartIsClicked] = useState(false);

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
        {/*
          btnMenuIsClicked ? (
          <Nav setBtnMenuIsClicked={setBtnMenuIsClicked} />
        ) : (
          ""
        )
        */}
        {
          <Nav
            setBtnMenuIsClicked={setBtnMenuIsClicked}
            btnMenuIsClicked={btnMenuIsClicked}
          />
        }
      </div>
      <div className="header__row-Group">
        <button
          type="button"
          className="Cart-Button"
          aria-label="Button Cart from products selected and resume orders"
          value="Cart"
          name="Cart Products"
          title="Cart products selected and resume orders"
          onPointerDown={(event) => {
            setBtnCartIsClicked(!btnCartIsClicked);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setBtnCartIsClicked(!btnCartIsClicked);
            }
          }}
        >
          {props.qtdOrdersProduct > 0 ? (
            <span className="header__notifier-Qtd">
              {props.qtdOrdersProduct}
            </span>
          ) : (
            ""
          )}
        </button>

        <div className="header__Profile">
          <img src={profile} alt="Profile user" className="header__Profile" />
        </div>
      </div>
      {btnCartIsClicked && (
        <div className="header__basket-Products">
          <h3 className="header__title-Basket">Cart</h3>
          <hr className="header__diviser" />
          <div className="header__basket">
            {props.qtdOrdersProduct > 0 ? (
              <div className="header__content-Basket">
                <div className="header__order">
                  <img
                    src={imgProduct}
                    alt="Product sneakers, a pair of tennis shoes, the pair of the left foot standing on the tip with the sole being shown, and the pair of the right foot resting on a floor."
                    className="header__img-Product"
                  />
                  <div className="header__datas-Order">
                    <h4 className="header__name-Product">
                      Fall Limited Edition Sneakers
                    </h4>
                    <p className="header__values">
                      <span className="header__price-Product">$125.00</span> x{" "}
                      <span className="header__qtd-Order">
                        {props.qtdOrdersProduct}
                      </span>{" "}
                      <span className="header__payment-Amount">
                        ${(125 * props.qtdOrdersProduct).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    className="header__btn-Delete-Order"
                    type="button"
                    title="Delete order product"
                    aria-label="Delete order product"
                    onPointerDown={(event) => {
                      props.setQtdOrdersProduct(0);
                    }}
                    onKeyDown={(event) => {
                      if (event.code === "Enter") {
                        props.setQtdOrdersProduct(0);
                      }
                    }}
                  >
                    <img src={iconDelete} alt="" aria-hidden="true" />
                  </button>
                </div>
                <button
                  className="header__btn-Checkout"
                  type="button"
                  title="Chekout"
                  aria-label="Checkout orders"
                >
                  Checkout
                </button>
              </div>
            ) : (
              <p className="header__description-Empty">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
