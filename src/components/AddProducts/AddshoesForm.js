import React, { useState, useContext } from "react";

import Modal from "../UI/Modal";

import classes from "./AddShoesForm.module.css";

import FormContext from "../../Store/FormData/form-context";

const AddshoesForm = (props) => {
  const [shoesName, setShoesName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [smallSize, setSmallsize] = useState("");
  const [mediumSize, setMediumSize] = useState("");
  const [largeSize, setLargeSize] = useState("");

  const { addProductHandler } = useContext(FormContext);

  const ShoesNameHandler = (event) => {
    setShoesName(event.target.value);
  };

  const DescreptionHandler = (event) => {
    setDesc(event.target.value);
  };

  const PriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const SmallSizeHanlder = (event) => {
    setSmallsize(event.target.value);
  };

  const MediumSizeHanlder = (event) => {
    setMediumSize(event.target.value);
  };

  const LargeSizeHanlder = (event) => {
    setLargeSize(event.target.value);
  };

  const formHanlder = (event) => {
    event.preventDefault();
    const formData = {
      shoesName: shoesName,
      Descreption: desc,
      Price: price,
      Small: smallSize,
      Medium: mediumSize,
      Large: largeSize,
    };
    addProductHandler(formData);
    console.log(formData);
  };

  return (
    <Modal onClick={props.onClick}>
      <form className={classes.form} onSubmit={formHanlder}>
        <label htmlFor="shoesname">Shoes Name</label>
        <input id="shoesname" type="text" onChange={ShoesNameHandler} />
        <label htmlFor="descreption">Descreption</label>
        <input id="descreption" type="text" onChange={DescreptionHandler} />
        <label htmlFor="price">Price</label>
        <input id="price" type="number" onChange={PriceHandler} />
        <label>Available Quantity</label>
        <div className={classes.shoesSize}>
          <label className={classes.size} htmlFor="smallSize">
            S
          </label>
          <input
            className={classes.size}
            id="smallSize"
            type="number"
            onChange={SmallSizeHanlder}
          />
          <label className={classes.size} htmlFor="mediumSize">
            M
          </label>
          <input
            className={classes.size}
            id="mediumSize"
            type="number"
            onChange={MediumSizeHanlder}
          />
          <label className={classes.size} htmlFor="largeSize">
            L
          </label>
          <input
            className={classes.size}
            id="largeSize"
            type="number"
            onChange={LargeSizeHanlder}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </Modal>
  );
};

export default AddshoesForm;
