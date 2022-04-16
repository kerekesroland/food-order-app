import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const BackDrop = (props) => {
    return <div onClick={props.toggleCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(
                <BackDrop toggleCart={props.toggleCart} />,
                portalElement
            )}
            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
