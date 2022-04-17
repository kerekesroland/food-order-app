import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartContext.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    return (
        <Modal toggleCart={props.toggleCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    onClick={props.toggleCart}
                    className={classes["button--alt"]}
                >
                    Close
                </button>
                {hasItems && (
                    <button
                        onClick={props.toggleCart}
                        className={classes.button}
                    >
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
