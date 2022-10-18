import iconCart from "../images/icon-cart.svg";
import "./Cart.css";

export default function Cart() {
    return (
        <button type="button" className="Cart-Button" aria-label="Button Cart from products" value="Cart" name="Cart Products">
            {/*<img src={iconCart} alt="" aria-hidden="true"/>*/}
        </button>
    );
}