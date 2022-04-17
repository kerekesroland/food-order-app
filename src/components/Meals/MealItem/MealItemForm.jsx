import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
    const amountRef = useRef(null);
    const [amountIsValid, setAmountIsValid] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCartHandler(enteredAmountNumber);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={amountRef}
                label="Amount"
                input={{
                    id: "amount",
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1,
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter something valid (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
