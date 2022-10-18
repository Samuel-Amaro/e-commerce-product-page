import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";
import iconCart from "../images/icon-cart-white.svg";
import "./Content.css";

export default function Content() {
    return (
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
            >
              <img src={iconMinus} alt="" aria-hidden="true" />
            </button>
            <span className="Main__view-Quantity" aria-live="assertive" aria-atomic="true">0</span>
            <button
              className="Main__button-Increment-Quantity"
              type="button"
              aria-label="Button increment quantidade orders product"
            >
              <img src={iconPlus} alt="" aria-hidden="true" />
            </button>
          </div>
          <button
            className="Main__button-Add-Produc-Cart"
            type="button"
            aria-label="Button Add Produc orders in cart"
            title="Add products ordes in cart"
          >
            <img src={iconCart} alt="" aria-hidden="true" /> Add to cart
          </button>
        </div>
      </section>
    );
}