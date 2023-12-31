import React, { Fragment } from "react";

import classes from "./Modal.module.css";

import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const shoesOverlay = document.getElementById("shoesForm");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        shoesOverlay
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        shoesOverlay
      )}
    </Fragment>
  );
};

export default Modal;
