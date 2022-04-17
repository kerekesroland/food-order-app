import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
    const { items } = useContext(CartContext);
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const numberOfCartItem = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        buttonIsHighlighted ? classes.bump : ""
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);
        setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 500);
    }, [items]);

    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={btnClasses}>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
};

export default HeaderCartButton;
