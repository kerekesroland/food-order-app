import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <Modal toggleCart={props.toggleCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.99</span>
            </div>
            <div className={classes.actions}>
                <button
                    onClick={props.toggleCart}
                    className={classes["button--alt"]}
                >
                    Close
                </button>
                <button onClick={props.toggleCart} className={classes.button}>
                    Order
                </button>
            </div>
        </Modal>
    );
};

export default Cart;
