import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
    const { items } = useContext(CartContext);

    const numberOfCartItem = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
};

export default HeaderCartButton;
