import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.toggleCart} />
            </header>

            {/* <!-- Ha kötőjel van a classnev kozott akkor ilyen tömbösen kell megadni--> */}

            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="meals" />
            </div>
        </React.Fragment>
    );
};

export default Header;
