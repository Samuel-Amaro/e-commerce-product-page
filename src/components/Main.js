import ProductImages from "./ProductImages";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";
import iconCart from "../images/icon-cart-white.svg";
import "./Main.css";
import React, { useState } from "react";

export default function Main(props) {
  const [qtdProducts, setQtdProducts] = useState(0);

  return (
    <main className="Main">
      <ProductImages />
      <section className="Main__content">
        <span className="Main__product-Brand">Sneaker Company</span>
        <h1 className="Main__title">Fall Limited Edition Sneakers</h1>
        <p className="Main__description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="Main__prices">
          <div className="Main__row">
            <h2 className="Main__price">$125.00</h2>
            <span className="Main__discount">50%</span>
          </div>
          <del className="Main__previous-Price">$250.00</del>
        </div>
        <div className="Main__orders">
          <div className="Main__product-Quantity">
            <button
              className="Main__button-Decrement-Quantity"
              type="button"
              aria-label="Button decrement quantidade orders product"
              title="Decrement quantity orders from product"
              onPointerDown={(event) => {
                if (qtdProducts >= 1) {
                  setQtdProducts((previousStatte) => previousStatte - 1);
                }
              }}
              onKeyDown={(event) => {
                if (qtdProducts >= 1 && event.code === "Enter") {
                  setQtdProducts((previousStatte) => previousStatte - 1);
                }
              }}
            >
              <img src={iconMinus} alt="" aria-hidden="true" />
            </button>
            <span
              className="Main__view-Quantity"
              aria-live="assertive"
              aria-atomic="true"
              aria-label="Quantity from orders Products"
            >
              {qtdProducts}
            </span>
            <button
              className="Main__button-Increment-Quantity"
              type="button"
              aria-label="Button increment quantidade orders product"
              title="Increment quantity orders from product"
              onPointerDown={(event) => {
                setQtdProducts((previousStatte) => previousStatte + 1);
              }}
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  setQtdProducts((previousStatte) => previousStatte + 1);
                }
              }}
            >
              <img src={iconPlus} alt="" aria-hidden="true" />
            </button>
          </div>
          <button
            className="Main__button-Add-Produc-Cart"
            type="button"
            aria-label="Button Add Produc orders in cart"
            title="Add products ordes in cart"
            onPointerDown={(event) => {
              //active or desactivet button
              props.setBtnAddProdCartIsActive(
                (previousStatte) => !previousStatte
              );
              //update in state elevado
              props.setQtdOrdersProduct(qtdProducts);
            }}
            onKeyDown={(event) => {
              props.setBtnAddProdCartIsActive(
                (previousStatte) => !previousStatte
              );
              props.setQtdOrdersProduct(
                (previousState) => previousState + qtdProducts
              );
            }}
          >
            <img src={iconCart} alt="" aria-hidden="true" /> Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}
